<script lang="ts">
	import { allDistictTags } from '../../store';

	import Hero from '$lib/hero/HeroDefault.svelte';
	import Blob from '$lib/decoration/Blob.svelte';
	import { getTagWithColor } from '$lib/utils';

	const tags_w_color = getTagWithColor($allDistictTags.tags);
</script>

<svelte:head>
	<title>Daftar topik webinar</title>

	<meta property="og:title" content="Daftar topik webinar" />
	<meta
		property="og:description"
		content="Daftar topik webinar yang tersedia di PHPID Online Learning"
	/>

	<meta name="twitter:title" content="Daftar topik webinar" />
	<meta
		name="twitter:description"
		content="Daftar topik webinar yang tersedia di PHPID Online Learning"
	/>
</svelte:head>

<section data-page="tags">
	<Hero withSearch={false} withDateStats={false} />
	<article class="max-w-5xl px-4 lg:px-0 mx-auto tracking-content">
		<div
			class="text-center mt-16 flex flex-col text-xl font-semibold leading-normal tracking-wide text-gray-600 dark:text-gray-200"
		>
			<h2>Daftar topik webinar</h2>
		</div>
		{#if $allDistictTags.tags.length > 0}
			<div id="content-speaker" class="container mx-auto mt-10 relative">
				<Blob className="absolute top-32 left-0 dark:text-emerald-500 text-emerald-500/50" />
				<Blob
					className="absolute scale-x-[-1] -bottom-48 right-0 dark:text-red-500 text-red-500/50"
				/>
				<div class="flex justify-center gap-2 flex-wrap w-full">
					{#each tags_w_color as item (item.tag)}
						<a
							class="cursor-pointer rounded-full p-2 text-sm md:text-xs bg-blue-700/75 dark:bg-blue-700/60 text-white dark:text-blue-200 relative hover:underline"
							alt={item.tag}
							href={`/tag/${item.tag}`}
							style="background-color: {item.bg};color: {item.fg};"
						>
							#{item.tag}
							<span class="rounded-full bg-orange-700 text-white px-1">
								{$allDistictTags.withCount[`${item.tag}`]}
							</span>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</article>
</section>
