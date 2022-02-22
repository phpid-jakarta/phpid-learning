import { writable, readable, derived } from 'svelte/store';

import dataQna from '../api/data-qna';

export const originQnaData = readable(dataQna, function set() {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	return function destroy() {};
});

export const allQnaData = writable(dataQna);

export const currentPageQna = writable(1);

export const perPageQna = writable(24);

export const offsetPageQna = derived([currentPageQna, perPageQna], ([$currentPage, $perPage]) => {
	return $currentPage * $perPage - $perPage;
});

export const totalPageQna = derived(originQnaData, ($originQnaData) => {
	return $originQnaData.length;
});

// Search Store
export const currentQnaKeyword = writable('');

export const allQnaByKeyword = derived([currentQnaKeyword], ([$currentQnaKeyword]) => {
	if ($currentQnaKeyword) {
		const foundQna = dataQna.filter((i) => {
			// search the topic instead
      const matchQuestions = i.questions.filter(q => q.q.toLocaleLowerCase().includes($currentQnaKeyword.toLowerCase()));

			return matchQuestions.length > 0;
		}).map(i => {
      const matchQuestions = i.questions.filter(q => q.q.toLocaleLowerCase().includes($currentQnaKeyword.toLowerCase()));

			return {
				...i,
				questions: matchQuestions,
			}
		});

		return foundQna;
	}
	return dataQna;
});
// End Search Store
