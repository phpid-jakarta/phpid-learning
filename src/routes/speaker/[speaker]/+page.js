import { error } from '@sveltejs/kit';
import data from '../../../api/data';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (params.speaker) {
		const item = data.data.find((i) => i.speakerSlug === params.speaker);

    return {
      speaker: params.speaker,
      realName: item?.speaker || params.speaker
    };
  }

  throw error(404, 'Not found');
}
