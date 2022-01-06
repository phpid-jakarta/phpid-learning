<script>
	import { onMount } from 'svelte';
	import { activeTheme } from '../../store';

	const handleSwitchTheme = () => {
		if ($activeTheme === 'dark') {
			activeTheme.set('light');
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			window.__setPreferredTheme('light');
		} else {
			activeTheme.set('dark');
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			window.__setPreferredTheme('dark');
		}
	};

	onMount(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		activeTheme.set(window.__theme);
	});
</script>

<div class="theme-swither cursor-pointer hover:text-blue-700" on:click={handleSwitchTheme}>
	{#if $activeTheme === 'dark'}
		<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
			<circle
				cx="12"
				cy="12"
				r="3.25"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
			/>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M12 2.75V4.25"
			/>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M17.25 6.75L16.0659 7.93416"
			/>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M21.25 12.0001L19.75 12.0001"
			/>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M17.25 17.2501L16.0659 16.066"
			/>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M12 19.75V21.25"
			/>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M7.9341 16.0659L6.74996 17.25"
			/>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M4.25 12.0001L2.75 12.0001"
			/>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M7.93405 7.93423L6.74991 6.75003"
			/>
		</svg>
	{:else}
		<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M18.25 15.7499C17.2352 16.2904 16.23 16.25 15 16.25C10.9959 16.25 7.75 13.0041 7.75 9.00001C7.75 7.77001 7.70951 6.76474 8.25 5.74994C5.96125 6.96891 4.75 9.2259 4.75 12C4.75 16.004 7.99594 19.25 12 19.25C14.7741 19.25 17.031 18.0387 18.25 15.7499Z"
			/>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M16 4.75C16 6.95914 14.9591 9 12.75 9C14.9591 9 16 11.0409 16 13.25C16 11.0409 17.0409 9 19.25 9C17.0409 9 16 6.95914 16 4.75Z"
			/>
		</svg>
	{/if}
</div>
