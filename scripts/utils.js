const fs = require("fs");
const path = require("path");
const appRootDir = require("app-root-dir");
const packageJson = require('../package');

const ROOT_DIR = appRootDir.get();

const writeFile = (pathFile, contentString) => {
  fs.writeFile(path.resolve(ROOT_DIR, pathFile), contentString, function (err) {
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

const getAllSectionsData = async () => {
  const readmeContent = await fs.readFileSync(
    path.resolve(ROOT_DIR, "./README.md"),
    {
      encoding: "utf-8",
    }
  );
  return readmeContent.match(REGEX_SECTIONS);
};

const getCoverUrl = (idx) => {
  const basePathImage =
    "https://github.com/phpid-jakarta/phpid-learning/raw/master/cover";
  const filePath = path.resolve(ROOT_DIR, `./cover/${idx}.jpg`);

  if (fs.existsSync(filePath)) {
    return `${basePathImage}/${idx}.jpg`;
  }

  return `${basePathImage}/not-found.jpg`;
};

const REGEX_SECTIONS = /^\#{3}.*\n\n- Waktu.*\n- Pukul.*\n- Pemateri.*\n- Slide.*\n- Video.*\n- Registrasi.*\n- Sesi.*\n- Kategori.*\n- Deskripsi.*\n/gm;
const REGEX_TITLE = /^\#{3}.*/gm;
const REGEX_DATE = /^- Waktu.*/gm;
const REGEX_TIME = /^- Pukul.*/gm;
const REGEX_SPEAKER = /^- Pemateri.*/gm;
const REGEX_SLIDE = /^- Slide.*/gm;
const REGEX_VIDEO = /^- Video.*/gm;
const REGEX_REGISTRASI = /^- Registrasi.*/gm;
const REGEX_SESI = /^- Sesi.*/gm;
const REGEX_KATEGORI = /^- Kategori.*/gm;
const REGEX_DESKRIPSI = /^- Deskripsi.*/gm;

module.exports = {
  writeFile,
  getContent,
  getAllSectionsData,
  getCoverUrl,
  packageJson,
  constant: {
    ROOT_DIR,
    REGEX_SECTIONS,
    REGEX_TITLE,
    REGEX_DATE,
    REGEX_TIME,
    REGEX_SPEAKER,
    REGEX_SLIDE,
    REGEX_VIDEO,
    REGEX_REGISTRASI,
    REGEX_SESI,
    REGEX_KATEGORI,
    REGEX_DESKRIPSI,
  },
};
