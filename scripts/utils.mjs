import { globby } from 'globby'
import fs from 'fs'
import path from 'path'
import appRootDir from 'app-root-dir'

import constants from './constants.mjs'
import packageJsonData from '../package.json'

const ROOT_DIR = appRootDir.get()
const DATA_PATH = path.join(ROOT_DIR, './data')

export const writeFile = (pathFile, contentString) => {
  fs.writeFile(path.resolve(ROOT_DIR, pathFile), contentString, function (err) {
    if (err) {
      return console.log(`❌ Error write file ${pathFile}`, err)
    }
    console.log(`✅ Success write file ${pathFile}`)
  })
}

export const getAllReadmeFiles = async () => {
  const dirdata = `${DATA_PATH}/**/*.md`
  const paths = await globby(dirdata)

  return paths
}

export const getContent = (ctx, regex, titleString) => {
  const res = ctx.match(regex)

  if (res && res.length > 0) {
    const text = res[0].replace(`${titleString}`, '')
    return `${text}`.trim()
  }

  return ''
}

export const getAllSectionsData = async (readmePath) => {
  const readmeContent = await fs.readFileSync(readmePath,
    {
      encoding: 'utf-8'
    }
  )

  return readmeContent.match(constants.REGEX_SECTIONS)
}

export const getCoverUrl = (idx) => {
  const basePathImage =
    'https://github.com/phpid-jakarta/phpid-learning/raw/master/cover'
  const filePath = path.resolve(ROOT_DIR, `./cover/${idx}.jpg`)

  if (fs.existsSync(filePath)) {
    return `${basePathImage}/${idx}.jpg`
  }

  return `${basePathImage}/not-found.jpg`
}

export const constructFileContent = (combinedData) => {
  const fileContent = {
    meta: {
      last_updated: new Date().toISOString().substring(0, 10),
      total: combinedData.length,
      credits: 'PHPID Community',
      ui: 'https://s.byphp.id/learning'
    },
    data: combinedData
  }

  return fileContent
}

export const packageJson = packageJsonData

const util = {
  writeFile,
  getContent,
  getAllReadmeFiles,
  getAllSectionsData,
  getCoverUrl,
  packageJson,
  constructFileContent
}

export default util
