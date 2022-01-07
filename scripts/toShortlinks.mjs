import path from 'path';

import { parseAllSessions } from './parser.mjs';

import { writeFile } from './utils.mjs';

import constant from './constants.mjs';

const main = async () => {
	try {
		let urlVideos = '';
		let urlSlides = '';

		const allData = await parseAllSessions();
		allData.forEach((data) => {
			const videos = data.videos;
			const slide = data.slide;

			if (videos[0] !== 'empty') {
				urlVideos += `
/rekaman-${data.id}       ${videos[0]}`;
			}

			if (slide !== 'empty') {
				urlSlides += `
/slide-${data.id}         ${slide}`;
			}
		});

		writeFile(
			path.resolve(constant.ROOT_DIR, '_redirect-out'),
			`
## -- Videos - START
${urlVideos}
## -- Videos - END

## -- Slides - START
${urlSlides}
## -- Slides - END`
		);
	} catch (error) {
		console.error('❌ Error execute ./scripts/toShortlinks.js', error);
	}
};

main();
