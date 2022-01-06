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
			img.classList.add('rounded-t');

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

<div class="backdrop-blur-md rounded bg-gray-600/10 dark:bg-black/30">
	<div class="card-image-wrapper p-2 rounded-t js-image--{item.id}" />
	<div class="rounded-b p-4 flex flex-wrap flex-col gap-2">
		<div class="flex flex-wrap gap-2">
			<span class="rounded-full px-2 bg-yellow-700 text-white dark:text-yellow-200">#{item.id}</span>
			<span class="rounded-full px-2 bg-blue-700 text-white dark:text-blue-200">
				{item.date}
			</span>
			<span class="rounded-full px-2 bg-green-700 text-white dark:text-green-200">{item.time} WIB</span>
		</div>

		<h4 class="text-xl text-gray-800 dark:text-white">{item.topic}</h4>

		<Speaker speaker={item.speaker} />

		{#if item.tags && item.tags.length > 0}
			<Tags tags={item.tags} />
		{/if}

		<div class="mt-8 flex justify-between items-center">
			{#if item.videos[0] && item.videos[0] !== 'empty'}
				<a
					href={item.videos[0]}
					class="text-blue-600 dark:text-blue-300 hover:underline"
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
					class="text-blue-600 dark:text-blue-300 hover:underline"
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
					class="text-blue-600 dark:text-blue-300 hover:underline"
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

<style>
	.card-image-wrapper {
		width: auto;
		min-height: 200px;
	}

	.card-body {
		min-height: 200px;
	}
</style>
