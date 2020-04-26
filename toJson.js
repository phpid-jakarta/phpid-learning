const fs = require('fs');
const path = require('path');

const main = async () => {
	try {
		const readmeContent = await fs.readFileSync(path.resolve(`./README.md`), { encoding: 'utf-8' });
		const regex = /^\#{3}.*\n\n- Waktu.*\n- Pukul.*\n- Pemateri.*\n- URL.*\n- Slide.*\n- Video.*\n.*\n.*/gm;
		const matchContent = readmeContent.match(regex);
		const allData = []

		matchContent.forEach(ctx => {
			if (!ctx.startsWith('### Template')) {
				const dateRegex = /^- Waktu.*/gm;
				const timeRegex = /^- Pukul.*/gm;
				const pemateriRegex = /^- Pemateri.*/gm;
				const urlRegex = /^- URL.*/gm;
				const slideRegex = /^- Slide.*/gm;
				const TopicRegex = /^\#{3}.*/gm;
				const VideoRegex = /- Video.*\n.*\n.*/gm;
				const videosRaw = ctx.match(VideoRegex)[0].replace('- Video: ', '').trim();
				const splitVideos = videosRaw.split('\n').map(i => i.replace('- ', '').replace('Registrasi: ', '').trim())
				allData.push({
					"date": ctx.match(dateRegex)[0].replace('- Waktu: ', '').trim(),
					"time": ctx.match(timeRegex)[0].replace('- Pukul: ', '').trim(),
					"speaker": ctx.match(pemateriRegex)[0].replace('- Pemateri: ', '').trim(),
					"url": ctx.match(urlRegex)[0].replace('- URL:', '').trim(),
					"slide": ctx.match(slideRegex)[0].replace('- Slide:', '').trim(),
					"topic": ctx.match(TopicRegex)[0].replace('### ', '').trim(),
					"videos": splitVideos,
				})
			}
		});

		fs.writeFile(path.resolve('./data.json'), JSON.stringify({
			data: allData
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
