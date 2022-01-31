<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { allQnaData } from '../store';
	import Blob from '$lib/decoration/Blob.svelte';
	import QuestionItem from '$lib/qna-item/QuestionItem.svelte';
</script>

<svelte:head>
	<title>Tanya jawab</title>

	<meta property="og:title" content="Tanya jawab" />
	<meta
		property="og:description"
		content="Daftar tanya jawab yang tersedia di PHPID Online Learning"
	/>

	<meta name="twitter:title" content="Tanya jawab" />
	<meta
		name="twitter:description"
		content="Daftar tanya jawab yang tersedia di PHPID Online Learning"
	/>
</svelte:head>

<section data-page="qna">
	<article class="max-w-5xl px-4 lg:px-0 mx-auto tracking-content">
		<div
			id="content-speaker"
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-x-6 gap-y-5 md:gap-y-6 mt-10 relative"
		>
			<Blob className="absolute top-32 left-0 dark:text-emerald-500 text-emerald-500/50" />
			<Blob
				className="absolute scale-x-[-1] -bottom-48 right-0 dark:text-red-500 text-red-500/50"
			/>
			{#each $allQnaData as item (`${item.slug}`)}
				{#each item.questions as q}
					<QuestionItem item={item} question={q} />
				{/each}
			{/each}
		</div>
	</article>
</section>
