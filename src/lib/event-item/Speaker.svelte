<script>
	export let speaker;
	export let speakerSlug;
</script>

<a
	class="md:text-sm cursor-pointer text-gray-600 dark:text-gray-200 hover:underline"
	href={`/speaker/${speakerSlug}`}
	title={speaker}
>
	{speaker}
</a>
