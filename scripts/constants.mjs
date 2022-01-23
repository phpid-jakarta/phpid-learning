/* eslint-disable no-useless-escape */
import appRootDir from 'app-root-dir';

const MONTHNAMES =
	'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split(
		'_'
	);

const REGEX_SECTIONS =
	/\#{3}.*\n\n- Waktu.*\n- Pukul.*\n- Pemateri.*\n- Slide.*\n- Video.*\n- Registrasi.*\n- Sesi.*\n- Kategori.*\n- Deskripsi.*/gm;
const REGEX_TITLE = /^\#{3}.*/gm;
const REGEX_DATE = /^- Waktu.*/gm;
const REGEX_TIME = /^- Pukul.*/gm;
const REGEX_SPEAKER = /^- Pemateri.*/gm;
const REGEX_SLIDE = /^- Slide.*/gm;
const REGEX_VIDEO = /^- Video.*/gm;
const REGEX_REGISTRASI = /^- Registrasi.*/gm;
const REGEX_SESI = /^- Sesi.*/gm;
const REGEX_KATEGORI = /^- Kategori.*/gm;
const REGEX_DESKRIPSI = /^- Deskripsi.*/gm;

const ROOT_DIR = appRootDir.get();

const SLUGIFY_OPTION = {
	replacement: '-', // replace spaces with replacement character, defaults to `-`
	remove: undefined, // remove characters that match regex, defaults to `undefined`
	lower: true, // convert to lower case, defaults to `false`
	strict: true, // strip special characters except replacement, defaults to `false`
	locale: 'vi', // language code of the locale to use
	trim: true // trim leading and trailing replacement chars, defaults to `true`
};

const constants = {
	REGEX_SECTIONS,
	REGEX_TITLE,
	REGEX_DATE,
	REGEX_TIME,
	REGEX_SPEAKER,
	REGEX_SLIDE,
	REGEX_VIDEO,
	REGEX_REGISTRASI,
	REGEX_SESI,
	REGEX_KATEGORI,
	REGEX_DESKRIPSI,
	MONTHNAMES,
	ROOT_DIR,
	SLUGIFY_OPTION
};

export default constants;
