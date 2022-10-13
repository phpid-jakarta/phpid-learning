import { globby } from 'globby';
import fs from 'fs';
import path from 'path';
import appRootDir from 'app-root-dir';

import constants from './constants.mjs';
import packageJsonData from '../package.json' assert { type: 'json' };

export const ROOT_DIR = appRootDir.get();
export const DATA_PATH = path.join(ROOT_DIR, './data');
export const QNA_PATH = path.join(ROOT_DIR, './data-qna');

export const writeFile = (pathFile, contentString) => {
	fs.writeFile(path.resolve(ROOT_DIR, pathFile), contentString, function (err) {
		if (err) {
			return console.log(`❌ Error write file ${pathFile}`, err);
		}
		console.log(`✅ Success write file ${pathFile}`);
	});
};

export const getAllSessionFiles = async () => {
	const dirdata = `${DATA_PATH}/**/*.md`;
	const paths = await globby(dirdata);

	return paths;
};

export const getAllQnaFiles = async () => {
	const dirdata = `${QNA_PATH}/*.json`;
	const paths = await globby(dirdata);

	return paths;
};

export const getContentQna = async (p) => {
	const c = await fs.readFileSync(p, {
		encoding: 'utf-8'
	});

	try {
		return JSON.parse(c);
	} catch (error) {
		return null;
	}
};

export const getContent = (ctx, regex, titleString) => {
	const res = ctx.match(regex);

	if (res && res.length > 0) {
		const text = res[0].replace(`${titleString}`, '');
		return `${text}`.trim();
	}

	return '';
};

export const getAllSectionsData = async (sessionPath) => {
	const sessionContent = await fs.readFileSync(sessionPath, {
		encoding: 'utf-8'
	});

	return sessionContent.match(constants.REGEX_SECTIONS);
};

export const getCoverUrl = (idx) => {
	const basePathImage = 'https://github.com/phpid-jakarta/phpid-learning/raw/master/cover';
	const filePath = path.resolve(ROOT_DIR, `./cover/${idx}.jpg`);

	if (fs.existsSync(filePath)) {
		return `${basePathImage}/${idx}.jpg`;
	}

	return `${basePathImage}/not-found.jpg`;
};

export const constructFileContent = (combinedData) => {
	const fileContent = {
		meta: {
			last_updated: new Date().toISOString().substring(0, 10),
			total: combinedData.length,
			credits: 'PHPID Community',
			ui: 'https://s.byphp.id/learning'
		},
		data: combinedData
	};

	return fileContent;
};

export const packageJson = packageJsonData;

const util = {
	writeFile,
	getContent,
	getAllSessionFiles,
	getAllSectionsData,
	getCoverUrl,
	packageJson,
	constructFileContent
};

export default util;
