const fs = require("fs");
const path = require("path");

const REGEX_SECTIONS = /^\#{3}.*\n\n- Waktu.*\n- Pukul.*\n- Pemateri.*\n- Slide.*\n- Video.*\n- Registrasi.*\n- Sesi.*\n- Kategori.*\n- Deskripsi.*\n/gm;
const REGEX_SLIDE = /^- Slide.*/gm;
const REGEX_VIDEO = /^- Video.*/gm;
const REGEX_SESI = /^- Sesi.*/gm;

const writeFile = (pathFile, contentString) => {
  fs.writeFile(path.resolve(pathFile), contentString, function (err) {
    if (err) {
      return console.log(`❌ Error write file ${pathFile}`, err);
    }
    console.log(`✅ Success write file ${pathFile}`);
  });
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
    const readmeContent = await fs.readFileSync(path.resolve("./README.md"), {
      encoding: "utf-8",
    });
    const matchContent = readmeContent.match(REGEX_SECTIONS);
    let urlVideos = "";
    let urlSlides = "";

    matchContent.forEach((ctx) => {
      if (!ctx.startsWith("### Template")) {
        const videosRaw = getContent(ctx, REGEX_VIDEO, "- Video:");
        const videos = videosRaw
          .split(",")
          .map((i) => i.replace("- ", "").trim());
        const slide = getContent(ctx, REGEX_SLIDE, "- Slide:");
        const sesi = getContent(ctx, REGEX_SESI, "- Sesi:");
        if (videos[0] !== "empty") {
          urlVideos += `
/rekaman-${sesi}       ${videos[0]}`;
        }

        if (slide !== 'empty') {
          urlSlides += `
/slide-${sesi}         ${slide}`;
        }
      }
    });

    writeFile(
      "_redirect-out",
      `
## -- Videos - START
${urlVideos}
## -- Videos - END

## -- Slides - START
${urlSlides}
## -- Slides - END`
    );
  } catch (error) {
    console.error("❌ Error read file README.md", error);
  }
};

main();
