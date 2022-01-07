<script>
  import { originData, allByTags } from '../../store';
	import Blob from '../decoration/Blob.svelte';
	import SearchForm from '../search-form/SearchForm.svelte';

  export let tag;
</script>

<section data-section="hero">
  <div class="max-w-5xl mx-auto relative">
    <Blob className="absolute scale-x-[-1] top-32 -right-72 dark:text-amber-500 text-amber-500/50" />
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
					Menampilkan {$allByTags.length} webinar dengan tag #{tag} dari {$originData.length} yang tersedia.
				</p>
			</div>

			<div class="mt-8 sm:w-2/3 lg:w-1/2 mx-auto">
				<SearchForm q="" />
			</div>

			<div
				class="mt-16 flex flex-col text-xl font-semibold leading-normal tracking-wide text-gray-600 dark:text-gray-200"
			>
				<h2>Daftar Webinar</h2>
				<p>
					Tag #{tag}
				</p>
			</div>
		</div>
	</div>
</section>
