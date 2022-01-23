<script>
	import { onMount } from 'svelte';
	import Speaker from './Speaker.svelte';
	import Tags from './Tags.svelte';

	export let item;
	let src = 'https://github.com/phpid-jakarta/phpid-learning/raw/master/cover/default.jpg';
	let loaded = false;
	let observer = null;

	function onIntersect(entries) {
		entries.forEach((node) => {
			if (!node.isIntersecting) return false;

			const img = document.createElement('img');
			img.classList.add('is--loading');
			img.classList.add('card-image');
			img.classList.add('rounded-lg');

			img.onload = () => {
				loaded = true;
				img.classList.remove('is--loading');
				img.classList.add('is--loaded');

				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				window.__macy && window.__macy.recalculate && window.__macy.recalculate(true);
			};

			img.setAttribute('src', item.cover);
			img.setAttribute('alt', item.topic);

			node.target.appendChild(img);

			observer && observer.unobserve(node.target);
		});
	}

	onMount(() => {
		observer = new IntersectionObserver(onIntersect, {
			rootMargin: '0px',
			threshold: 1.0
		});

		const node = document.querySelector(`.js-image--${item.id}`);
		observer && node && observer.observe(node);
	});
</script>

<div
	class="relative rounded-lg bg-gradient-to-r from-gray-600/10 to-gray-500/10 dark:from-gray-600/25 dark:to-gray-500/25"
>
	<div class="w-auto p-2 rounded-lg js-image--{item.id}" />
	<div class="rounded-b px-4 pt-1 flex flex-wrap flex-col">
		<div class="flex flex-wrap gap-1.5">
			<span
				class="rounded-full px-1.5 py-0.5 text-sm md:text-xs bg-amber-700/75 dark:bg-amber-700/60 text-white dark:text-amber-200"
				>#{item.id}</span
			>
			<span
				class="rounded-full px-1.5 py-0.5 text-sm md:text-xs bg-blue-700/75 dark:bg-blue-700/60 text-white dark:text-blue-200"
			>
				{item.date}
			</span>
			<span
				class="rounded-full px-1.5 py-0.5 text-sm md:text-xs bg-emerald-700/75 dark:bg-emerald-700/60 text-white dark:text-emerald-200"
				>{item.time} WIB</span
			>
		</div>

		<h4 class="text-gray-800 dark:text-white font-semibold mt-2 mb-1">{item.topic}</h4>

		<Speaker speaker={item.speaker} speakerSlug={item.speakerSlug} />

		{#if item.tags && item.tags.length > 0}
			<div class="mt-2">
				<Tags tags={item.tags} />
			</div>
		{/if}

		<div class="mt-8 pb-2 flex justify-between items-center">
			{#if item.videos[0] && item.videos[0] !== 'empty'}
				<a
					href={item.videos[0]}
					class="text-blue-600 dark:text-blue-300 md:text-sm font-medium hover:underline"
					target="_blank"
					rel="noopener"
					title="Tonton Video"
				>
					Tonton Video
				</a>
			{/if}

			{#if item.registrasi && item.registrasi !== 'empty'}
				<a
					href={item.registrasi}
					class="text-blue-600 dark:text-blue-300 md:text-sm font-medium hover:underline"
					target="_blank"
					rel="noopener"
					title="Registrasi"
				>
					Registrasi
				</a>
			{/if}

			{#if item.slide && item.slide !== 'empty'}
				<a
					href={item.slide}
					class="text-blue-600 dark:text-blue-300 md:text-sm font-medium hover:underline"
					target="_blank"
					rel="noopener"
					title="Lihat Slide"
				>
					Lihat Slide
				</a>
			{/if}
		</div>
	</div>
</div>
