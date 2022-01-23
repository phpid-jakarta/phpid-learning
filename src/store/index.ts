import { writable, readable, derived } from 'svelte/store';
import { getDistinctTags } from '$lib/utils';

import data from '../api/data';

export const originData = readable(data.data, function set() {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	return function destroy() {};
});

export const allData = writable(data.data);

export const showData = writable(data.data);

export const allDistictTags = derived(allData, ($allData) => {
	const r = getDistinctTags($allData);
	return r;
});

export const currentTag = writable('');

export const allByTags = derived([currentTag, allData], ([$currentTag, $allData]) => {
	if ($currentTag) {
		const r = $allData.filter((i) => {
			return i.tags.includes($currentTag);
		});
		return r;
	}
	return [];
});

export const currentSpeaker = writable('');

export const allBySpeakers = derived([currentSpeaker, allData], ([$currentSpeaker, $allData]) => {
	if ($currentSpeaker) {
		const r = $allData.filter((i) => {
			return i.speakerSlug === $currentSpeaker;
		});
		return r;
	}
	return [];
});

export const currentPage = writable(1);

export const perPage = writable(24);

export const offsetPage = derived([currentPage, perPage], ([$currentPage, $perPage]) => {
	return $currentPage * $perPage - $perPage;
});

export const totalPage = derived(originData, ($originData) => {
	return $originData.length;
});

export const activeTheme = writable('');

// Search Store
export const currentKeyword = writable('');

export const allByKeyword = derived([currentKeyword, allData], ([$currentKeyword, $allData]) => {
	if ($currentKeyword) {
		const speakerFilterPrefix = 'from:';
		const r = $allData.filter((i) => {
			// search by speaker, by using "from:" prefix on the keyword
			if ($currentKeyword.startsWith(speakerFilterPrefix)) {
				const cleanKeyword = $currentKeyword.replace(speakerFilterPrefix, '').trim().toLowerCase();

				return i.speaker.toLowerCase().includes(cleanKeyword);
			}

			// search the topic instead
			return i.topic.toLowerCase().includes($currentKeyword.toLowerCase());
		});
		return r;
	}
	return [];
});
// Eend Search Store
