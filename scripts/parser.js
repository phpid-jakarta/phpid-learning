

import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'

import {
  getAllReadmeFiles,
  getAllSectionsData,
  getContent,
  getCoverUrl,
  constant
} from './utils.js'

import 'dayjs/locale/id.js'
dayjs.extend(customParseFormat)
dayjs.locale('id')

export const parseReadmeSection = async (sections) => {
  try {
    const allData = []

    sections.forEach((ctx) => {
      // exclude template section
      if (!ctx.startsWith('### Template')) {
        const videosRaw = getContent(ctx, constant.REGEX_VIDEO, '- Video:')
        const videos = videosRaw
          .split(',')
          .map((i) => i.replace('- ', '').trim())
        const date = getContent(ctx, constant.REGEX_DATE, '- Waktu:')
        const time = getContent(ctx, constant.REGEX_TIME, '- Pukul:')
        const speaker = getContent(ctx, constant.REGEX_SPEAKER, '- Pemateri:')
        const slide = getContent(ctx, constant.REGEX_SLIDE, '- Slide:')
        const topic = getContent(ctx, constant.REGEX_TITLE, '### ')
        const register = getContent(ctx, constant.REGEX_REGISTRASI, '- Registrasi:')
        const sesi = getContent(ctx, constant.REGEX_SESI, '- Sesi:')
        const cover = getCoverUrl(sesi)
        const deskripsi = getContent(ctx, constant.REGEX_DESKRIPSI, '- Deskripsi:')
        const kategori = getContent(ctx, constant.REGEX_KATEGORI, '- Kategori:')
        const tags = kategori
          .split(',')
          .map((i) => i.trim().replace('/', '-').replace(' ', '-'))


        const dateWithoutDay = date.split(',')[1]
        const datetime = `${dateWithoutDay.trim()} ${time.trim()}`
        const dateTimeObj = dayjs(`${datetime}`, 'D MMMM YYYY HH:mm', 'id').locale('id').format('YYYY-MM-DD HH:mm:ss')

        const data = {
          id: sesi,
          date: date,
          time: time,
          dateTime: `${dateTimeObj} +07:00`,
          speaker: speaker,
          slide: slide,
          topic: topic,
          videos: videos,
          registrasi: register,
          cover: cover,
          deskripsi: deskripsi,
          tags: tags
        }

        allData.push(data)
      }
    })

    return allData
  } catch (error) {
    console.error('❌ Error parsing section', error)
    return []
  }
}

export const parseAllReadmes = async () => {
  try {
    const readmes = await getAllReadmeFiles()
    let combinedData = []

    for (const readme of readmes) {
      try {
        const sections = await getAllSectionsData(readme)
        const allData = await parseReadmeSection(sections)
        combinedData = [
          ...combinedData,
          ...allData
        ]
      } catch (error) {
        console.error(`❌ Error parsing file ${readme}`, error)
      }
    }

    combinedData = combinedData.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return b.id - a.id
    })

    return combinedData
  } catch (error) {
    console.error('❌ Error parsing section', error)
    return []
  }
}

