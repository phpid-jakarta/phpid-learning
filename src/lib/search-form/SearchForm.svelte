<script>
	import { goto } from '$app/navigation';
	import { currentKeyword } from '../../store';
	import { initMasonry } from '../utils';

	export let q;

	const handleSubmit = () => {
		const keyword = q;

		currentKeyword.set(keyword);

		setTimeout(() => {
			initMasonry();
		}, 500);

		goto(`/search?q=${keyword}`);
	};
</script>

<form
	action="/search"
	class="rounded-lg relative block bg-gradient-to-r dark:from-gray-600/25 dark:to-gray-500/25 from-gray-600/10 to-gray-500/10"
	method="GET"
	on:submit|preventDefault={handleSubmit}
>
	<div class="absolute inset-y-0 left-0 flex items-center pl-3">
		<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
			/>
		</svg>
	</div>

	<input
		class="bg-transparent rounded-lg w-full pr-4 py-2.5 pl-12 placeholder:text-gray-500 dark:placeholder:text-gray-300"
		type="text"
		name="q"
		value={q}
		id="q"
		placeholder="Cari berdasarkan judul..."
	/>
</form>
<p class="md:text-sm mt-3 leading-normal">
	Tips: Kamu juga bisa mencari topik berdasarkan pembicara favoritmu dengan menggunakan kata kunci: <code
		class="rounded px-1 dark:bg-blue-700/60 bg-blue-700/75 text-white dark:text-blue-200"
		>from:Nama Pembicara</code
	>
</p>
