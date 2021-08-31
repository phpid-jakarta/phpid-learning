const path = require('path')

const {
  parseAllReadmes
} = require('./parser')

const {
  writeFile,
  constructFileContent,
  constant
} = require('./utils');


(async () => {
  try {
    const allData = await parseAllReadmes()
    const fileContent = constructFileContent(allData)

    writeFile(
      path.resolve(constant.ROOT_DIR, './data.json'),
      JSON.stringify(fileContent)
    )

    writeFile(
      path.resolve(constant.ROOT_DIR, './data.js'),
      `module.exports = ${JSON.stringify(fileContent, null, 2)}`
    )

    writeFile(
      path.resolve(constant.ROOT_DIR, './data-es.js'),
      `export default ${JSON.stringify(fileContent, null, 2)}`
    )
  } catch (error) {
    console.error('❌ Error execute ./scripts/toJson.js', error)
  }
})()

