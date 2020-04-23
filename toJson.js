const fs = require('fs');
const path = require('path');

const main = async () => {
	try {
		const readmeContent = await fs.readFileSync(path.resolve(`./README.md`), { encoding: 'utf-8' });
		const regex = /^\#{3}.*\n\n- Waktu.*\n- Pemateri.*\n- Slide.*\n- Video.*\n.*\n.*/gm;
		const matchContent = readmeContent.match(regex);
		const allData = []

		matchContent.forEach(ctx => {
			if (!ctx.startsWith('### Template sesi selanjutnya')) {
				const dateRegex = /^- Waktu.*/gm;
				const pemateriRegex = /^- Pemateri.*/gm;
				const slideRegex = /^- Slide.*/gm;
				const TopicRegex = /^\#{3}.*/gm;
				const VideoRegex = /- Video.*\n.*\n.*/gm;
				const videosRaw = ctx.match(VideoRegex)[0].replace('- Video: ', '').trim();
				const splitVideos = videosRaw.split('\n').map(i => i.replace('- ', '').trim())
				allData.push({
					"date": ctx.match(dateRegex)[0].replace('- Waktu: ', '').trim(),
					"speaker": ctx.match(pemateriRegex)[0].replace('- Pemateri: ', '').trim(),
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
