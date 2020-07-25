const fs = require("fs");
const path = require("path");

const REGEX_SECTIONS = /^\#{3}.*\n\n- Waktu.*\n- Pukul.*\n- Pemateri.*\n- Slide.*\n- Video.*\n- Registrasi.*\n- Sesi.*\n- Deskripsi.*\n/gm;
const REGEX_TITLE = /^\#{3}.*/gm;
const REGEX_DATE = /^- Waktu.*/gm;
const REGEX_TIME = /^- Pukul.*/gm;
const REGEX_SPEAKER = /^- Pemateri.*/gm;
const REGEX_SLIDE = /^- Slide.*/gm;
const REGEX_VIDEO = /^- Video.*/gm;
const REGEX_REGISTRASI = /^- Registrasi.*/gm;
const REGEX_SESI = /^- Sesi.*/gm;
const REGEX_DESKRIPSI = /^- Deskripsi.*/gm;

const getCoverUrl = (idx) => {
  const basePathImage = `https://github.com/phpid-jakarta/phpid-online-learning-2020/raw/master/cover`;
  const filePath = path.resolve(`./cover/${idx}.jpg`);
  if (fs.existsSync(filePath)) {
    return `${basePathImage}/${idx}.jpg`;
  }

  return `${basePathImage}/not-found.jpg`;
};

const getContent = (ctx, regex, titleString) => {
  const res = ctx.match(regex);

  if (res && res.length > 0) {
    const text = res[0].replace(`${titleString}`, "");
    return `${text}`.trim();
  }

  return "";
};

const main = async () => {
  try {
    const readmeContent = await fs.readFileSync(path.resolve(`./README.md`), {
      encoding: "utf-8",
    });
    const matchContent = readmeContent.match(REGEX_SECTIONS);
    const allData = [];

    matchContent.forEach((ctx) => {
      if (!ctx.startsWith("### Template")) {
        const videosRaw = getContent(ctx, REGEX_VIDEO, "- Video:");
        const videos = videosRaw
          .split(",")
          .map((i) => i.replace("- ", "").trim());
        const date = getContent(ctx, REGEX_DATE, "- Waktu:");
        const time = getContent(ctx, REGEX_TIME, "- Pukul:");
        const speaker = getContent(ctx, REGEX_SPEAKER, "- Pemateri:");
        const slide = getContent(ctx, REGEX_SLIDE, "- Slide:");
        const topic = getContent(ctx, REGEX_TITLE, "### ");
        const register = getContent(ctx, REGEX_REGISTRASI, "- Registrasi:");
        const sesi = getContent(ctx, REGEX_SESI, "- Sesi:");
        const cover = getCoverUrl(sesi);
        const deskripsi = getContent(ctx, REGEX_DESKRIPSI, "- Deskripsi:");

        const data = {
          date: date,
          time: time,
          speaker: speaker,
          slide: slide,
          topic: topic,
          videos: videos,
          registrasi: register,
          cover: cover,
          deskripsi: deskripsi,
        };

        allData.push(data);

        console.log("📚 ", topic);
        console.log("🗓️ ", date);
        console.log("⏰ ", time);
        console.log("🎙️ ", speaker);
        console.log("🖥️ ", slide);
        console.log("🌄 ", cover);
        console.log("🚪 ", register);
        console.log("📽️ ", videos);
        console.log("📕 ", deskripsi);
        console.log("\n-----------------------------\n");
      }
    });

    const fileContent = {
      meta: {
        last_updated: new Date(),
        total: allData.length,
        credits: "PHPID Community",
      },
      data: allData,
    };

    fs.writeFile(
      path.resolve("./data.json"),
      JSON.stringify(fileContent),
      function (err) {
        if (err) {
          return console.log("❌ Error write file data.json", err);
        }
        console.log("✅ Success write file data.json");
      }
    );

    fs.writeFile(
      path.resolve("./data.js"),
      `module.exports = ${JSON.stringify(fileContent)}`,
      function (err) {
        if (err) {
          return console.log("❌ Error write file data.json", err);
        }
        console.log("✅ Success write file data.json");
      }
    );
  } catch (error) {
    console.error("❌ Error read file README.md", error);
  }
};

main();
