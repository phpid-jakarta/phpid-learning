const fs = require('fs');
const path = require('path');

const REGEX_SECTIONS = /^\#{3}.*\n\n- Waktu.*\n- Pukul.*\n- Pemateri.*\n- Slide.*\n- Video.*\n.*\n.*/gm;
const REGEX_DATE = /^- Waktu.*/gi;
const REGEX_TIME = /^- Pukul.*/gi;
const REGEX_SPEAKER = /^- Pemateri.*/gi;
const REGEX_SLIDE = /^- Slide.*/gi;
const REGEX_VIDEO = /^- Video.*/gi;
const REGEX_TITLE = /^\#{3}.*/gi;
const REGEX_REGISTRASI = /^- Registrasi.*/gi;

const getCoverUrl = (idx) => `https://github.com/phpid-jakarta/phpid-online-learning-2020/raw/master/cover/${idx}.jpg`;
const getContent = (ctx, regex, titleString) => {
  if (ctx.match(regex) && ctx.match(regex).length > 0) {
    return ctx.match(regex)[0].replace(`${titleString}`, '').trim()
  }
  return '';
}

const main = async () => {
	try {
		const readmeContent = await fs.readFileSync(path.resolve(`./README.md`), { encoding: 'utf-8' });
		const matchContent = readmeContent.match(REGEX_SECTIONS);
		const allData = []

		matchContent.forEach((ctx, idx) => {
			if (!ctx.startsWith('### Template')) {
                                const sessionIndex = (matchContent.length - idx);
				const videosRaw = getContent(ctx, REGEX_VIDEO, '- Video:');
				const videos = videosRaw.split(',').map(i => i.replace('- ', '').trim());
                                
				allData.push({
					"date": getContent(ctx, REGEX_DATE, '- Waktu:'),
					"time": getContent(ctx, REGEX_TIME, '- Pukul:'),
					"speaker": getContent(ctx, REGEX_SPEAKER, '- Pemateri:'),
					"slide": getContent(ctx, REGEX_SLIDE, '- Slide:'),
					"topic": getContent(ctx, REGEX_TITLE, '### '),
					"videos": videos,

                                        // field URL is deprecated, use registrasi field
                                        "url": getContent(ctx, REGEX_REGISTRASI, '- Registrasi:'),
                                        "registrasi": getContent(ctx, REGEX_REGISTRASI, '- Registrasi:'),

                                        "cover": getCoverUrl(sessionIndex),
				})
			}
		});

		fs.writeFile(path.resolve('./data.json'), JSON.stringify({
                        message: 'field URL is deprecated, use registrasi',
                        credits: 'PHPID Community',
			data: allData,
		}), function (err) {
			if (err) {
				return console.log('❌ Error write file data.json', err);
			}
			console.log('✅ Success write file data.json');
		});

	} catch (error) {
		console.error('❌ Error read file README.md', error);
	}
};

main();
