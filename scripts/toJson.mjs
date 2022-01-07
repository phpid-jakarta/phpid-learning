import path from 'path';

import { parseAllSessions } from './parser.mjs';

import { writeFile, constructFileContent } from './utils.mjs';

import constants from './constants.mjs';

(async () => {
	try {
		const allData = await parseAllSessions();
		const fileContent = constructFileContent(allData);

		const dirs = [path.resolve(constants.ROOT_DIR, './api')];
		const srcDir = path.resolve(constants.ROOT_DIR, './src/api');

		dirs.forEach((dir) => {
			writeFile(path.resolve(dir, './data.json'), JSON.stringify(fileContent));

			writeFile(
				path.resolve(dir, './data.js'),
				`module.exports = ${JSON.stringify(fileContent, null, 2)}`
			);

			writeFile(
				path.resolve(dir, './data-es.js'),
				`export default ${JSON.stringify(fileContent, null, 2)}`
			);
		});

		writeFile(
			path.resolve(srcDir, './data.ts'),
			`export default ${JSON.stringify(fileContent, null, 2)}`
		);

	} catch (error) {
		console.error('❌ Error execute ./scripts/toJson.js', error);
	}
})();
