<script lang="ts">
	import { onMount } from 'svelte';
	import { allByTags, currentTag } from '../../../store';

	import { initMasonry } from '$lib/utils';

	import Hero from '$lib/hero/HeroTag.svelte';
	import CardItem from '$lib/event-item/CardItem.svelte';
	import Blob from '$lib/decoration/Blob.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		currentTag.set(data.tag);
		initMasonry();
	});
</script>

<svelte:head>
	<title>Webinar dengan topik #{data.tag}</title>

	<meta property="og:title" content="Webinar dengan topik #{data.tag}" />
	<meta
		property="og:description"
		content="Daftar webinar dengan topik #{data.tag} di PHPID Online Learning"
	/>

	<meta name="twitter:title" content="Webinar dengan topik #{data.tag}" />
	<meta
		name="twitter:description"
		content="Daftar webinar dengan topik #{data.tag} di PHPID Online Learning"
	/>
</svelte:head>

<section data-page="tag">
	<Hero tag={data.tag} />
	<article class="max-w-5xl px-4 lg:px-0 mx-auto tracking-content">
		{#if $allByTags.length > 0}
			<div
				id="content-speaker"
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-x-6 gap-y-5 md:gap-y-6 mt-10 relative"
			>
				<Blob className="absolute top-32 left-0 dark:text-emerald-500 text-emerald-500/50" />
				<Blob
					className="absolute scale-x-[-1] -bottom-48 right-0 dark:text-red-500 text-red-500/50"
				/>
				{#each $allByTags as item (`${item.id}${item.slug}`)}
					<CardItem {item} />
				{/each}
				<a
					href="/tags"
					class="flex items-center gap-x-1.5 justify-center bg-gradient-to-r rounded-lg py-1.5 px-3 text-gray-600 dark:text-gray-300 from-gray-600/10 to-gray-500/10 dark:from-gray-600/25 dark:to-gray-500/25 text-center"
					>Lihat semua topik
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11.4583 5.625L16.0417 10L11.4583 14.375"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M15.8333 10H3.95834"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			</div>
		{/if}
	</article>
</section>
