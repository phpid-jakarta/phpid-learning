const path = require("path");

const {
  writeFile,
  getContent,
  getCoverUrl,
  getAllSectionsData,
  constant,
} = require("./utils");


const main = async () => {
  try {
    const sections = await getAllSectionsData();
    const allData = [];

    sections.forEach((ctx) => {
      if (!ctx.startsWith("### Template")) {
        const videosRaw = getContent(ctx, constant.REGEX_VIDEO, "- Video:");
        const videos = videosRaw
          .split(",")
          .map((i) => i.replace("- ", "").trim());
        const date = getContent(ctx, constant.REGEX_DATE, "- Waktu:");
        const time = getContent(ctx, constant.REGEX_TIME, "- Pukul:");
        const speaker = getContent(ctx, constant.REGEX_SPEAKER, "- Pemateri:");
        const slide = getContent(ctx, constant.REGEX_SLIDE, "- Slide:");
        const topic = getContent(ctx, constant.REGEX_TITLE, "### ");
        const register = getContent(ctx, constant.REGEX_REGISTRASI, "- Registrasi:");
        const sesi = getContent(ctx, constant.REGEX_SESI, "- Sesi:");
        const cover = getCoverUrl(sesi);
        const deskripsi = getContent(ctx, constant.REGEX_DESKRIPSI, "- Deskripsi:");
        const kategori = getContent(ctx, constant.REGEX_KATEGORI, "- Kategori:");
        const tags = kategori
          .split(",")
          .map((i) => i.trim().replace("/", "-").replace(" ", "-"));
        const data = {
          id: sesi,
          date: date,
          time: time,
          speaker: speaker,
          slide: slide,
          topic: topic,
          videos: videos,
          registrasi: register,
          cover: cover,
          deskripsi: deskripsi,
          tags: tags,
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
        console.log("🏷 ", tags);
        console.log("\n-----------------------------\n");
      }
    });

    const fileContent = {
      meta: {
        last_updated: new Date().toISOString().substring(0, 10),
        total: allData.length,
        credits: "PHPID Community",
        ui: "https://s.byphp.id/learning",
      },
      data: allData,
    };

    writeFile(
      path.resolve(constant.ROOT_DIR, "./data.json"),
      JSON.stringify(fileContent)
    );
    writeFile(
      path.resolve(constant.ROOT_DIR, "./data.js"),
      `module.exports = ${JSON.stringify(fileContent, null, 2)}`
    );
    writeFile(
      path.resolve(constant.ROOT_DIR, "./data-es.js"),
      `export default ${JSON.stringify(fileContent, null, 2)}`
    );
  } catch (error) {
    console.error("❌ Error read file README.md", error);
  }
};

main();
