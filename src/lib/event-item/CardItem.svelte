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
					class="text-blue-600 dark:text-blue-300 md:text-sm font-medium hover:underline flex items-center"
					target="_blank"
					rel="noopener"
					title="Video Rekaman"
				>
					<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
						/>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M15.25 12L9.75 8.75V15.25L15.25 12Z"
						/>
					</svg>

					Video Rekaman
				</a>
			{/if}

			{#if item.registrasi && item.registrasi !== 'empty'}
				<a
					href={item.registrasi}
					class="text-blue-600 dark:text-blue-300 md:text-sm font-medium hover:underline flex items-center"
					target="_blank"
					rel="noopener"
					title="Registrasi"
				>
					<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M5.78168 19.25H13.2183C13.7828 19.25 14.227 18.7817 14.1145 18.2285C13.804 16.7012 12.7897 14 9.5 14C6.21031 14 5.19605 16.7012 4.88549 18.2285C4.773 18.7817 5.21718 19.25 5.78168 19.25Z"
						/>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M15.75 14C17.8288 14 18.6802 16.1479 19.0239 17.696C19.2095 18.532 18.5333 19.25 17.6769 19.25H16.75"
						/>
						<circle
							cx="9.5"
							cy="7.5"
							r="2.75"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
						/>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M14.75 10.25C16.2688 10.25 17.25 9.01878 17.25 7.5C17.25 5.98122 16.2688 4.75 14.75 4.75"
						/>
					</svg>

					Registrasi
				</a>
			{/if}

			{#if item.slide && item.slide !== 'empty'}
				<a
					href={item.slide}
					class="text-blue-600 dark:text-blue-300 md:text-sm font-medium hover:underline flex items-center"
					target="_blank"
					rel="noopener"
					title="Slide"
				>
					<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
						/>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M15.25 19.25L12 17.25L8.75 19.25"
						/>
					</svg>

					Slide
				</a>
			{/if}
		</div>
	</div>
</div>
