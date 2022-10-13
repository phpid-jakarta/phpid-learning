import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (params.tag) {
    return {
      tag: params.tag
    };
  }

  throw error(404, 'Not found');
}
