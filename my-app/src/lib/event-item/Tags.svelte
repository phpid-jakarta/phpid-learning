<script>
	import { goto } from '$app/navigation';
	import { currentTag } from '../../store';
	import { getTagWithColor, initMasonry } from '../utils';

	export let tags;
	const tags_w_color = getTagWithColor(tags);

	const handleClickTag = (e, tag) => {
		e.preventDefault();
		goto(`/tag/${tag}`);
		currentTag.set(tag);

		setTimeout(() => {
			initMasonry();
		}, 500);
	};
</script>

<div class="flex flex-wrap gap-2">
	{#if tags_w_color && tags_w_color.length > 0}
		{#each tags_w_color as item (item)}
			<a
				class="cursor-pointer text-gray-500 dark:text-gray-400 hover:underline"
				on:click={(e) => handleClickTag(e, item.tag)}
				href={`/tag/${item.tag}`}
				alt={item.tag}
			>
				#{item.tag}
			</a>
		{/each}
	{/if}
</div>
