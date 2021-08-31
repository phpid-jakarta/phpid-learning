const path = require('path')

const {
  parseAllReadmes
} = require('./parser')

const {
  writeFile,
  constant
} = require('./utils')

const main = async () => {
  try {
    let urlVideos = ''
    let urlSlides = ''

    const allData = await parseAllReadmes()
    allData.forEach(data => {
      const videos = data.videos
      const slide = data.slide

      if (videos[0] !== 'empty') {
        urlVideos += `
/rekaman-${sesi}       ${videos[0]}`
      }

      if (slide !== 'empty') {
        urlSlides += `
/slide-${sesi}         ${slide}`
      }
    })

    writeFile(
      path.resolve(constant.ROOT_DIR, '_redirect-out'),
      `
## -- Videos - START
${urlVideos}
## -- Videos - END

## -- Slides - START
${urlSlides}
## -- Slides - END`
    )
  } catch (error) {
    console.error('❌ Error execute ./scripts/toShortlinks.js', error)
  }
}

main()
