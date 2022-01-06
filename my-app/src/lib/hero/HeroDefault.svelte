<script>
	import { originData } from '../../store';
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
</script>

<section data-section="hero" class="w-full">
	<div class="container mx-auto max-w-lg">
		<div class="flex flex-col gap-8 text-center px-8 py-16">
      <div class="flex flex-col gap-4">
        <h1 class="text-gray-800 dark:text-white text-5xl">Belajar daring bersama PHPID</h1>

        <p class="text-gray-600 dark:text-gray-200">
          Tersedia hingga {$originData.length} webinar yang dapat kamu tonton secara gratis.
        </p>
      </div>

			<div class="mt-2">
				<SearchForm q="" />
			</div>

			<div class="mt-8 flex flex-col gap-2">
				<b class="text-3xl text-gray-600 dark:text-gray-200">Daftar Webinar</b>
				<p class="text-2xl text-gray-600 dark:text-gray-200">
					{dateRange}
				</p>
			</div>
		</div>
	</div>
</section>
