const path = require("path");

const {
  writeFile,
  getContent,
  getAllSectionsData,
  constant,
} = require("./utils");

const main = async () => {
  try {
    const sections = await getAllSectionsData();
    let urlVideos = "";
    let urlSlides = "";

    sections.forEach((ctx) => {
      if (!ctx.startsWith("### Template")) {
        const videosRaw = getContent(ctx, constant.REGEX_VIDEO, "- Video:");
        const videos = videosRaw
          .split(",")
          .map((i) => i.replace("- ", "").trim());
        const slide = getContent(ctx, constant.REGEX_SLIDE, "- Slide:");
        const sesi = getContent(ctx, constant.REGEX_SESI, "- Sesi:");
        if (videos[0] !== "empty") {
          urlVideos += `
/rekaman-${sesi}       ${videos[0]}`;
        }

        if (slide !== "empty") {
          urlSlides += `
/slide-${sesi}         ${slide}`;
        }
      }
    });

    writeFile(
      path.resolve(constant.ROOT_DIR, "_redirect-out"),
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
