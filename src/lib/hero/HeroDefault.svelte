<script>
	import { originData } from '../../store';
	import Blob from '../decoration/Blob.svelte';
	import SearchForm from '../search-form/SearchForm.svelte';

	const getDateOnly = (val = '') => {
		let res = val;
		const arr = res.split(',');
		if (arr && arr.length > 1) {
			res = arr[1].trim();
		}
		return res;
	};

	const dataLength = $originData.length;
	const dataStart = getDateOnly($originData[dataLength - 1].date);
	const dataEnd = getDateOnly($originData[0].date);
	const dateRange = `${dataStart} - ${dataEnd}`;

	/**
	 * @type {boolean}
	 */
	export let withSearch;
	/**
	 * @type {boolean}
	 */
	export let withDateStats;
</script>

<section data-section="hero">
	<div class="max-w-5xl mx-auto relative">
		<Blob
			className="absolute scale-x-[-1] top-32 -right-72 dark:text-amber-500 text-amber-500/50"
		/>
		<div class="flex flex-col text-center px-4 pt-24">
			<div class="flex flex-col">
				<h1
					class="text-gray-800 dark:text-white text-3xl md:text-5xl font-semibold md:px-6 lg:w-2/3 tracking-wide md:leading-tight mx-auto"
				>
					Belajar daring bersama komunitas PHPID
				</h1>
				<p
					class="text-gray-600 dark:text-gray-200 text-lg font-medium leading-normal tracking-wide lg:w-1/2 mx-auto mt-5"
				>
					Tersedia hingga {$originData.length} webinar yang dapat kamu tonton secara gratis.
				</p>
			</div>

			{#if withSearch}
				<div class="mt-8 sm:w-2/3 lg:w-1/2 mx-auto">
					<SearchForm q="" />
				</div>
			{/if}

			{#if withDateStats}
				<div
					class="mt-16 flex flex-col text-xl font-semibold leading-normal tracking-wide text-gray-600 dark:text-gray-200"
				>
					<h2>Daftar Webinar</h2>
					<p>
						{dateRange}
					</p>
				</div>
			{/if}
		</div>
	</div>
</section>
