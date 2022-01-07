<script>
	import { currentPage, perPage, totalPage } from '../../store';
	import { createArray } from '../utils';

	export let className = null;

	let pageCount;
	$: pageCount = Math.ceil($totalPage / $perPage);

	const handleClickPage = (e, val) => {
		e.preventDefault();
		const newValue = parseInt(val, 10);
		if (newValue > 0 && newValue <= pageCount) {
			currentPage.set(newValue);
			// window.scrollTo({
			// 	top: 100,
			// 	left: 100,
			// 	behavior: 'smooth'
			// });
		}
	};
</script>

<aside class={className}>
	<ul
		class="flex flex-wrap md:justify-center justify-between items-center gap-3 tracking-content md:text-sm"
	>
		<li class="relative">
			<button
				class="text-gray-600 dark:text-gray-300 flex items-center gap-x-1.5 rounded-lg bg-gradient-to-r from-gray-600/10 to-gray-500/10 dark:from-gray-600/25 dark:to-gray-500/25 py-1.5 pl-3 pr-4 {$currentPage !==
				1
					? 'cursor-pointer'
					: 'cursor-not-allowed opacity-75'}"
				on:click={(e) => handleClickPage(e, $currentPage - 1)}
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.54166 5.625L3.95833 10L8.54166 14.375"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M16.0417 10H4.16667"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				Sebelumnya
			</button>
		</li>

		{#each createArray(pageCount) as i}
			<li class="relative md:block hidden">
				<button
					class="bg-gradient-to-r rounded-lg py-1.5 px-3 {$currentPage === i + 1
						? 'text-white from-blue-600/75 to-blue-500/75 dark:from-blue-600/25 dark:to-blue-500/25'
						: 'text-gray-600 dark:text-gray-300 from-gray-600/10 to-gray-500/10 dark:from-gray-600/25 dark:to-gray-500/25'}"
					on:click={(e) => handleClickPage(e, i + 1)}
				>
					{i + 1}
				</button>
			</li>
		{/each}

		<li class="relative">
			<button
				class="text-gray-600 dark:text-gray-300 flex items-center gap-x-1.5 rounded-lg bg-gradient-to-r from-gray-600/10 to-gray-500/10 dark:from-gray-600/25 dark:to-gray-500/25 py-1.5 pl-3 pr-4 {$currentPage ===
				pageCount
					? 'cursor-not-allowed opacity-75'
					: 'cursor-pointer'}"
				on:click={(e) => handleClickPage(e, $currentPage + 1)}
			>
				Berikutnya
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
			</button>
		</li>
	</ul>
</aside>
