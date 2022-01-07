<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
</script>

<div class="app overflow-x-hidden">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
