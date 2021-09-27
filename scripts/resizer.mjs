import path from 'path'
import appRootDir from 'app-root-dir'

import sharp from 'sharp'
import { globby } from 'globby'

const ROOT_DIR = appRootDir.get()
const SOURCE_PATH = path.join(ROOT_DIR, './cover')
const DIST_PATH = path.join(ROOT_DIR, 'cover', 'compressed');

(async function main () {
  const dirdata = `${SOURCE_PATH}/**/*.jpg`
  const images = await globby(dirdata)

  for (const image of images) {
    const filenameArr = image.split('/')
    const filename = filenameArr[filenameArr.length - 1]

    sharp(image)
      .resize({ width: 300 })
      .jpeg({ mozjpeg: true })
      .toFile(`${DIST_PATH}/${filename}`)
      .then(() => {
        console.log('✅ Success compressing file ', filename)
      })
      .catch(err => {
        console.log(err)
      })
  }
})()
