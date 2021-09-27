import path from 'path'

import {
  parseAllReadmes
} from './parser.mjs'

import {
  writeFile,
  constructFileContent
} from './utils.mjs'

import constants from './constants.mjs'

(async () => {
  try {
    const allData = await parseAllReadmes()
    const fileContent = constructFileContent(allData)

    writeFile(
      path.resolve(constants.ROOT_DIR, './data.json'),
      JSON.stringify(fileContent)
    )

    writeFile(
      path.resolve(constants.ROOT_DIR, './data.js'),
      `module.exports = ${JSON.stringify(fileContent, null, 2)}`
    )

    writeFile(
      path.resolve(constants.ROOT_DIR, './data-es.js'),
      `export default ${JSON.stringify(fileContent, null, 2)}`
    )
  } catch (error) {
    console.error('❌ Error execute ./scripts/toJson.js', error)
  }
})()

