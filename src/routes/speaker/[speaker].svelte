<script context="module" lang="ts">
	export const prerender = true;
	import data from '../../api/data';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params }) {
		const { speaker } = params;
		const item = data.data.find((i) => i.speakerSlug === speaker);
		return {
			props: { speaker, realName: item?.speaker || speaker }
		};
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { allBySpeakers, currentSpeaker } from '../../store';

	import { initMasonry } from '$lib/utils';

	import CardItem from '$lib/event-item/CardItem.svelte';
	import Blob from '$lib/decoration/Blob.svelte';

	export let speaker;
	export let realName;

	onMount(() => {
		currentSpeaker.set(speaker);
		initMasonry();
	});
</script>

<svelte:head>
	<title>Webinar oleh {realName}</title>

	<meta property="og:title" content="Webinar oleh {realName}" />
	<meta
		property="og:description"
		content="Daftar webinar oleh {realName} di PHPID Online Learning"
	/>

	<meta name="twitter:title" content="Webinar oleh {realName}">
	<meta name="twitter:description" content="Daftar webinar oleh {realName} di PHPID Online Learning">
</svelte:head>

<section data-page="speaker">
	<article class="max-w-5xl px-4 lg:px-0 mx-auto tracking-content">
		{#if $allBySpeakers.length > 0}
			<div
				id="content-speaker"
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-x-6 gap-y-5 md:gap-y-6 mt-10 relative"
			>
				<Blob className="absolute top-32 left-0 dark:text-emerald-500 text-emerald-500/50" />
				<Blob
					className="absolute scale-x-[-1] -bottom-48 right-0 dark:text-red-500 text-red-500/50"
				/>
				{#each $allBySpeakers as item (`${item.id}${item.slug}`)}
					<CardItem {item} />
				{/each}
			</div>
		{/if}
	</article>
</section>
