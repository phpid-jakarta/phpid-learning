const path = require("path");

const {
  writeFile,
  getContent,
  getAllSectionsData,
  packageJson,
  constant,
} = require("./utils");

const main = async () => {
  try {
    const sections = await getAllSectionsData();
    const tagSet = new Set();
    const tagSetWithPrefix = new Set();

    sections.forEach((ctx) => {
      if (!ctx.startsWith("### Template")) {
        const kategori = getContent(
          ctx,
          constant.REGEX_KATEGORI,
          "- Kategori:"
        );
        const tags = kategori
          .split(",")
          .map((i) => i.trim().replace("/", "-").replace(" ", "-"));

        tags.forEach((t) => {
          if (!tagSet.has(t)) {
            tagSet.add(t);
            tagSetWithPrefix.add(`/tag/${t}`);
          }
        });
      }
    });

    const allTagsWithPrefix = Array.from(tagSetWithPrefix);

    let modifyScriptTag = packageJson;

    modifyScriptTag.scripts.export = `cross-env NODE_ENV=production SAPPER_TIMESTAMP=${Date.now()} sapper export --entry '/ ${allTagsWithPrefix.join(
      " "
    )}'`;

    writeFile(
      path.resolve(constant.ROOT_DIR, "./package.json"),
      JSON.stringify(modifyScriptTag, null, 2)
    );
  } catch (error) {
    console.error("❌ Error read file README.md", error);
  }
};

main();
