<script context="module" lang="ts">
	export const prerender = true;
</script>


<script lang="ts">
	import { onMount } from 'svelte';
  import { allByKeyword, currentKeyword } from "../store";

	import { initMasonry } from '$lib/utils';

	import Hero from '$lib/hero/HeroSearch.svelte';
	import CardItem from '$lib/event-item/CardItem.svelte';
	import Blob from '$lib/decoration/Blob.svelte';

  onMount(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const searchParams = new URL(window.location).searchParams
    currentKeyword.set(searchParams.get('q'));
    initMasonry();
  });
</script>

<svelte:head>
	<title>Search... | PHPID Online Learning</title>
</svelte:head>

<section data-page="home">
	<Hero />
	<article class="max-w-5xl px-4 lg:px-0 mx-auto tracking-content">
		{#if $allByKeyword.length > 0}
			<div
				id="content-speaker"
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-x-6 gap-y-5 md:gap-y-6 mt-10 relative"
			>
				<Blob className="absolute top-32 left-0 dark:text-emerald-500 text-emerald-500/50" />
        <Blob className="absolute scale-x-[-1] -bottom-48 right-0 dark:text-red-500 text-red-500/50" />
				{#each $allByKeyword as item (`${item.id}${item.slug}`)}
					<CardItem {item} />
				{/each}
			</div>
		{/if}
	</article>
</section>
