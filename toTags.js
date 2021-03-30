const fs = require('fs')
const path = require('path')

const packageJson = require('./package');

const REGEX_SECTIONS = /^\#{3}.*\n\n- Waktu.*\n- Pukul.*\n- Pemateri.*\n- Slide.*\n- Video.*\n- Registrasi.*\n- Sesi.*\n- Kategori.*\n- Deskripsi.*\n/gm
const REGEX_KATEGORI = /^- Kategori.*/gm

const writeFile = (pathFile, contentString) => {
  fs.writeFile(
    path.resolve(pathFile), contentString,
    function (err) {
      if (err) {
        return console.log(`❌ Error write file ${pathFile}`, err)
      }
      console.log(`✅ Success write file ${pathFile}`)
    }
  )
}

const getCoverUrl = (idx) => {
  const basePathImage = 'https://github.com/phpid-jakarta/phpid-learning/raw/master/cover'
  const filePath = path.resolve(`./cover/${idx}.jpg`)
  if (fs.existsSync(filePath)) {
    return `${basePathImage}/${idx}.jpg`
  }

  return `${basePathImage}/not-found.jpg`
}

const getContent = (ctx, regex, titleString) => {
  const res = ctx.match(regex)

  if (res && res.length > 0) {
    const text = res[0].replace(`${titleString}`, '')
    return `${text}`.trim()
  }

  return ''
}

const main = async () => {
  try {
    const readmeContent = await fs.readFileSync(path.resolve('./README.md'), {
      encoding: 'utf-8'
    })


    const matchContent = readmeContent.match(REGEX_SECTIONS)
    const tagSet = new Set();
    const tagSetWithPrefix = new Set();

    matchContent.forEach((ctx) => {
      if (!ctx.startsWith('### Template')) {
        const kategori = getContent(ctx, REGEX_KATEGORI, '- Kategori:')
        const tags = kategori.split(',').map(i => i.trim().replace('/', '-').replace(' ', '-'))

        tags.forEach(t => {
          if (!tagSet.has(t)) {
            tagSet.add(t)
            tagSetWithPrefix.add(`/tag/${t}`)
          }
        });
      }
    })

    // const allTags = Array.from(tagSet);
    const allTagsWithPrefix = Array.from(tagSetWithPrefix);

    let modifyScriptTag = packageJson

    modifyScriptTag.scripts.export = `cross-env NODE_ENV=production sapper export --basepath phpid-learning --entry '/ ${allTagsWithPrefix.join(' ')}'`

    // writeFile('./tags.txt', allTags.join(' '))
    // writeFile('./tags-prefix.txt', allTagsWithPrefix.join(' '))
    writeFile('./package.json', JSON.stringify(modifyScriptTag, null, 2))
  } catch (error) {
    console.error('❌ Error read file README.md', error)
  }
}

main()
