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
	class="search-form rounded-lg relative block"
	method="GET"
	on:submit|preventDefault={handleSubmit}
>
	<div class="absolute inset-y-0 left-0 flex items-center pl-2">
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15.25 15.25L11.5 11.5L15.25 15.25ZM0.75 7C0.75 3.54822 3.54822 0.75 7 0.75C10.4518 0.75 13.25 3.54822 13.25 7C13.25 10.4518 10.4518 13.25 7 13.25C3.54822 13.25 0.75 10.4518 0.75 7Z"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</div>

	<input
		class="w-full rounded-lg px-4 py-2 pl-9 bg-gradient-to-b from-gray-600 to-gray-500 placeholder:text-gray-500 dark:placeholder:text-gray-300"
		type="text"
		name="q"
		value={q}
		id="q"
		placeholder="Cari berdasarkan judul..."
	/>
</form>
<p class="small tips">
	Tips: Kamu juga bisa mencari topik berdasarkan pembicara favoritmu dengan menggunakan kata kunci: <code class="rounded px-1 bg-blue-700 text-white dark:text-blue-200">from:pembicara</code
	>
</p>

<style>
	.search-form {
		display: flex;
		align-items: center;
	}

	.search-form button {
		margin-right: 16px;
	}
	.tips {
		margin-bottom: 16px;
		font-size: 70%;
	}
</style>
