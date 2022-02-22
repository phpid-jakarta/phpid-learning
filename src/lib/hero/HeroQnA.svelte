<script>
	import Blob from '../decoration/Blob.svelte';
	import SearchForm from '../search-form/SearchFormQnA.svelte';
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
					Tanya jawab bersama komunitas PHPID
				</h1>
				<p
					class="text-gray-600 dark:text-gray-200 text-lg font-medium leading-normal tracking-wide lg:w-1/2 mx-auto mt-5"
				>
					Kumpulan sesi tanya jawab di bidang teknologi, dijawab langsung oleh para praktisi.
				</p>
			</div>


			<div class="mt-8 sm:w-2/3 lg:w-1/2 mx-auto">
				<SearchForm q="" />
			</div>
		</div>
	</div>
</section>
