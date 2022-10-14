import path from 'path';
import fs from 'fs';
import appRootDir from 'app-root-dir';

import sizeOf from 'image-size';
import sharp from 'sharp';
import { globby } from 'globby';

const ROOT_DIR = appRootDir.get();
const SOURCE_PATH = path.join(ROOT_DIR, './cover');
const SOURCE_PATTERN = `${SOURCE_PATH}/**/*.jpg`;

const DIST_PATH = path.join(ROOT_DIR, 'cover', 'out');
const DIST_PATTERN = `${DIST_PATH}/**/*.jpg`;

(async function main() {
  const imagesSource = await globby(SOURCE_PATTERN);
  let promises = [];

  for (const image of imagesSource) {
    const filenameArr = image.split('/');
    const filename = filenameArr[filenameArr.length - 1];
    const distFile = `${DIST_PATH}/${filename}`;
    if (!fs.existsSync(distFile)) {
      const { width } = sizeOf(image);
      if (width > 800) {
        const promise = await sharp(image)
          .resize({ width: 800 })
          .jpeg({ mozjpeg: true })
          .toFile(distFile)
          .then(() => {
            console.log(`✅ Success compressing file "${filename}"`);
          })
          .catch((err) => {
            console.log(`❌ Failed to compress "${filename}"`, err);
          });
        promises.push(promise);
      }
    }
  }

  Promise.all(promises)
    .then(async () => {
      const imagesDist = await globby(DIST_PATTERN);
      for (const image of imagesDist) {
        const filenameArr = image.split('/');
        const filename = filenameArr[filenameArr.length - 1];
        const sourceFile = `${SOURCE_PATH}/${filename}`;
        if (fs.existsSync(sourceFile)) {
          fs.unlinkSync(sourceFile);
          fs.copyFileSync(image, sourceFile);
          console.log(`✅ Write compressed file "${filename}" to cover dir`);
          fs.unlinkSync(image);
        }
      }
    })

})();
