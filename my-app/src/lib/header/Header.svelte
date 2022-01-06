<script lang="ts">
	import ThemeSwitcher from '../theme-switcher/ThemeSwitcher.svelte';

	let isOpen = false;
	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav class="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5">
	<div class="container flex flex-wrap justify-between items-center mx-auto">
		<a href="/" class="flex py-2 text-gray-700 dark:text-white">
			<svg class="mr-3 h-6" viewBox="0 0 101 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M24.6454 11.7619V23.5238H26.4984H28.3515V19.9016C28.3515 17.9094 28.3695 16.0342 28.3916 15.7346L28.4317 15.1896H33.4468H38.4619L38.5026 16.2707C38.5249 16.8653 38.5432 18.7404 38.5432 20.4377V23.5238H40.3962H42.2493V13.3481V3.17257L40.3808 1.79589L38.5123 0.419207L38.4966 5.98873L38.4808 11.5583H33.447H28.4133V7.4359V3.31347L27.2551 2.29611C26.6181 1.7366 25.7703 0.991048 25.3712 0.639407L24.6454 0V11.7619ZM81.3257 0.566781C81.3892 0.647086 82.2888 1.55765 83.325 2.59025L85.2089 4.46763L87.2252 4.47097C89.4433 4.47466 90.2057 4.5277 91.0678 4.73849C91.8927 4.94018 92.4942 5.19925 93.2409 5.67448C95.0364 6.81739 96.3375 8.71424 96.7 10.7172C96.8188 11.3738 96.8162 12.7098 96.6948 13.3808C96.3395 15.3439 95.0409 17.2805 93.354 18.3628C92.5954 18.8496 91.9675 19.1339 91.2327 19.3234C90.477 19.5183 89.8029 19.5821 88.0811 19.6219C87.2827 19.6403 86.2195 19.672 85.7185 19.6923L84.8074 19.7291V15.733V11.7369H83.0156H81.2237L81.2255 17.7196L81.2271 23.7024L85.3799 23.7023C87.7197 23.7023 89.8219 23.6758 90.1953 23.6417C92.7381 23.4093 95.211 22.3234 97.1358 20.5941C98.4035 19.4551 99.6955 17.5144 100.301 15.8397C101.222 13.2928 101.129 10.1659 100.058 7.6552C98.5175 4.04527 95.3302 1.45097 91.3857 0.596725C90.7796 0.465462 90.6781 0.462544 85.9892 0.441887L81.2104 0.420815L81.3257 0.566781ZM0 0.765431C0 0.7921 0.910336 1.68993 2.0229 2.76056L4.0458 4.70718L8.2769 4.72617L12.508 4.74522L12.9815 4.89946C13.5863 5.09656 14.2339 5.51196 14.6675 5.98088C16.1879 7.6255 15.8411 10.0766 13.9083 11.3466C13.4219 11.6662 12.9419 11.8397 12.333 11.9159C12.0876 11.9466 9.26921 11.9722 6.00693 11.9732L0.123536 11.975V17.6899V23.4047H2.19276H4.26199V19.6887V15.9727L8.5703 15.9476C12.7263 15.9234 12.9001 15.918 13.4847 15.7922C15.403 15.3797 17.021 14.3773 18.194 12.8745C19.2258 11.5527 19.704 10.1169 19.704 8.34104C19.704 6.20173 18.9626 4.47746 17.3877 2.95415C16.4912 2.08705 15.5368 1.50711 14.4045 1.14148C13.2074 0.755014 13.4537 0.767336 6.40842 0.740964C2.88382 0.727748 0 0.738762 0 0.765431ZM49.1428 2.83492L51.1712 4.83148L55.2497 4.83249C59.7916 4.83368 59.8276 4.8363 60.6561 5.22693C61.2711 5.51696 62.0188 6.22971 62.3333 6.82572C62.6524 7.43048 62.7258 7.74551 62.7218 8.49255C62.7189 9.03772 62.6921 9.21815 62.5614 9.57015C62.1815 10.5931 61.2695 11.4822 60.2066 11.8658L59.8223 12.0046L53.5374 12.0209L47.2525 12.0373V17.7508V23.4642H49.3217H51.3909V19.7436V16.023L55.5757 16.0228C60.1749 16.0226 60.4086 16.0083 61.4815 15.6618C63.8079 14.9107 65.7441 13.045 66.4831 10.8424C66.9536 9.44032 66.9538 7.47703 66.4837 6.08916C66.118 5.00935 65.5342 4.0773 64.6851 3.21728C63.5202 2.03752 62.2597 1.35239 60.5635 0.97682C60.1844 0.892884 59.3285 0.878478 53.6227 0.859726L47.1143 0.838354L49.1428 2.83492ZM72.145 12.4513V24H73.9261H75.7072L75.7482 20.205C75.7707 18.1178 75.7892 13.7626 75.7892 10.527L75.7893 4.6439L73.9918 2.77324C73.0031 1.74434 72.1831 0.902527 72.1696 0.902527C72.156 0.902527 72.145 6.09946 72.145 12.4513Z"
					fill="currentColor"
				/>
			</svg>
		</a>

		<div class="md:hidden flex items-center">
			<ThemeSwitcher />

			<button
				on:click={toggleMenu}
				data-collapse-toggle="mobile-menu"
				type="button"
				class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="mobile-menu-2"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/></svg
				>
				<svg
					class="hidden w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			</button>
		</div>

		<div class="{isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto" id="mobile-menu">
			<ul class="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
				<li class="hidden md:block">
					<ThemeSwitcher />
				</li>

				<li>
					<a
						href="https://s.byphp.id/fb"
						target="_blank"
						rel="noopener noreferrer"
						title="Facebook Group PHPID"
						class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-200 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-200"
						>Facebook</a
					>
				</li>
				<li>
					<a
						href="https://s.byphp.id/donasi"
						target="_blank"
						rel="noopener noreferrer"
						title="Donasi"
						class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-200 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-200"
						>Donasi</a
					>
				</li>
				<li>
					<a
						href="/about"
						class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-200 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-200"
						>Tentang</a
					>
				</li>
				<li>
					<a
						href="https://s.byphp.id/jadi-pemateri"
						target="_blank"
						rel="noopener noreferrer"
						class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>Daftar jadi speaker</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
