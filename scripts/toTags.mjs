import path from 'path'

import {
  parseAllReadmes
} from './parser.mjs'

import {
  writeFile,
  packageJson,
  constant
} from './utils.mjs'

(async () => {
  try {
    const allData = await parseAllReadmes()
    const tagSet = new Set()
    const tagSetWithPrefix = new Set()

    allData.forEach(data => {
      const tags = data.tags
      tags.forEach((t) => {
        if (!tagSet.has(t)) {
          tagSet.add(t)
          tagSetWithPrefix.add(`/tag/${t}`)
        }
      })
    })

    const allTagsWithPrefix = Array.from(tagSetWithPrefix)

    const modifyScriptTag = packageJson

    modifyScriptTag.scripts.export = `cross-env NODE_ENV=production SAPPER_TIMESTAMP=${Date.now()} sapper export --entry '/ ${allTagsWithPrefix.join(
      ' '
    )}'`

    writeFile(
      path.resolve(constant.ROOT_DIR, './package.json'),
      JSON.stringify(modifyScriptTag, null, 2)
    )
  } catch (error) {
    console.error('❌ Error execute ./scripts/toTags.js', error)
  }
})()
