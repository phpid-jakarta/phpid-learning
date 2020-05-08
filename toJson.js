const fs = require('fs');
const path = require('path');

const getCoverUrl = (idx) => `https://github.com/phpid-jakarta/phpid-online-learning-2020/raw/master/cover/${idx}.jpg`;

const main = async () => {
	try {
		const readmeContent = await fs.readFileSync(path.resolve(`./README.md`), { encoding: 'utf-8' });
		const regex = /^\#{3}.*\n\n- Waktu.*\n- Pukul.*\n- Pemateri.*\n- Slide.*\n- Video.*\n.*\n.*/gm;
		const matchContent = readmeContent.match(regex);
		const allData = []

		matchContent.forEach((ctx, idx) => {
			if (!ctx.startsWith('### Template')) {
                                const sessionIndex = (matchContent.length - idx);
				const dateRegex = /^- Waktu.*/gm;
				const timeRegex = /^- Pukul.*/gm;
				const pemateriRegex = /^- Pemateri.*/gm;
				const slideRegex = /^- Slide.*/gm;
				const topicRegex = /^\#{3}.*/gm;
				const videoRegex = /- Video.*\n.*\n.*/gm;
				const videosRaw = ctx.match(videoRegex)[0].replace('- Video: ', '').trim();
				const splitVideos = videosRaw.split('\n').map(i => i.replace('- ', '').replace('Registrasi: ', '').trim());
                                const registerRegex = /- Registrasi.*\n.*\n.*/gm;
				allData.push({
					"date": ctx.match(dateRegex)[0].replace('- Waktu: ', '').trim(),
					"time": ctx.match(timeRegex)[0].replace('- Pukul: ', '').trim(),
					"speaker": ctx.match(pemateriRegex)[0].replace('- Pemateri: ', '').trim(),
					"slide": ctx.match(slideRegex)[0].replace('- Slide:', '').trim(),
					"topic": ctx.match(topicRegex)[0].replace('### ', '').trim(),
					"videos": splitVideos,
                                        // field URL is deprecated, use registrasi field
                                        "url": ctx.match(registerRegex)[0].replace('- Registrasi: ', '').trim(),
                                        "registrasi": ctx.match(registerRegex)[0].replace('- Registrasi: ', '').trim(),
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
