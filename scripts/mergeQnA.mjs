import path from 'path';

import { getAllQnaFiles, getContentQna, writeFile } from './utils.mjs';
import { parseQnA } from './parser.mjs';
import constants from './constants.mjs';

(async () => {
	const srcDir = path.resolve(constants.ROOT_DIR, './src/api');
	const all = await getAllQnaFiles();
	const combinedData = [];
	for (const item of all) {
		const c = await getContentQna(item);
		combinedData.push(await parseQnA(c, item));
	}

	writeFile(
		path.resolve(srcDir, './data-qna.ts'),
		`export default ${JSON.stringify(combinedData.reverse(), null, 2)}`
	);
})();
