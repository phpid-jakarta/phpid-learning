<script>
	import Speaker from './Speaker.svelte';
	import Tags from './Tags.svelte';

	export let item;
</script>

<div
	class="relative rounded-lg bg-gradient-to-r from-gray-600/10 to-gray-500/10 dark:from-gray-600/25 dark:to-gray-500/25"
>
	<div class="relative rounded-b p-4 flex flex-wrap flex-col">
		<div class="absolute left-0 -top-2 flex flex-wrap gap-1.5">
			<span
				class="rounded-full px-1.5 py-0.5 text-sm md:text-xs bg-amber-700/75 dark:bg-amber-700/60 text-white dark:text-amber-200"
				>#{item.id}</span
			>
			<span
				class="rounded-full px-1.5 py-0.5 text-sm md:text-xs bg-blue-700/75 dark:bg-blue-700/60 text-white dark:text-blue-200"
			>
				{item.date}
			</span>
		</div>

		<h4 class="text-gray-800 dark:text-white font-semibold mt-2 mb-1">{item.topic}</h4>

		<Speaker speaker={item.speaker} speakerSlug={item.speakerSlug} />

		{#if item.tags && item.tags.length > 0}
			<div class="mt-2">
				<Tags tags={item.tags} />
			</div>
		{/if}
	</div>
</div>
