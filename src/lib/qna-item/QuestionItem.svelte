<script>
	export let item;
	export let question;
</script>

<div
	class="relative flex rounded-lg bg-gradient-to-r from-gray-600/10 to-gray-500/10 dark:from-gray-600/25 dark:to-gray-500/25"
>
	<div class="p-4 flex flex-wrap flex-col justify-between">
		<div class="shrink-0">
			<div>
				<span
					class="rounded-lg px-1.5 py-0.5 bg-blue-700/75 dark:bg-blue-700/60 text-white dark:text-blue-200 text-sm md:text-xs"
				>
					{question.topic || item.topic}
				</span>
			</div>
			<h4 class="text-gray-800 dark:text-white font-semibold my-2">
				{question.q}
			</h4>

			<div class="md:text-sm text-gray-600 dark:text-gray-200">
				{item.speaker}
			</div>
		</div>
		<div class=" mt-4 flex justify-between items-center">
			<a
				href={item.link}
				class="text-blue-600 dark:text-blue-300 md:text-sm font-medium hover:underline flex items-center"
				target="_blank"
				rel="noopener"
				title="Lihat Jawaban"
			>
				<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
					/>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M15.25 12L9.75 8.75V15.25L15.25 12Z"
					/>
				</svg>
				Lihat Jawaban
			</a>
		</div>
	</div>
</div>
