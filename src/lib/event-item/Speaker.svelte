<script>
	import { goto } from '$app/navigation';

	export let speaker;

	const handleClick = (e) => {
		e.preventDefault();
		goto(`/search?q=from:${speaker}`);
	};
</script>

<a class="md:text-sm cursor-pointer text-gray-600 dark:text-gray-200 hover:underline" href={`/search?q=from:${speaker}`} title={speaker} on:click={handleClick}>
  {speaker}
</a>
