<script>
  import { currentPage, perPage, totalPage } from "../../store";
  import { createArray } from "../utils";

  let pageCount;
  $: pageCount = Math.ceil($totalPage / $perPage);

  const handleClickPage = (e, val) => {
    e.preventDefault();
    const newValue = parseInt(val, 10);
    if (newValue > 0 && newValue <= pageCount) {
      currentPage.set(newValue);
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth"
      });
    }
  };
</script>

<aside class="m-8">
  <ul class="flex flex-wrap justify-center items-center gap-2">
    <li class="relative">
      <button
        class="rounded-lg backdrop-blur-md bg-gray-600/10 dark:bg-black/30 py-2 px-4 {$currentPage === 1 ? 'cursor-pointer' : 'cursor-not-allowed'}"
        on:click={e => handleClickPage(e, $currentPage - 1)}>
        &laquo; Sebelumnya
      </button>
    </li>

    {#each createArray(pageCount) as i}
      <li class="relative">
        <button
          class="rounded-lg backdrop-blur-md py-2 px-4 {$currentPage === i + 1 ? 'text-white bg-blue-600/75 dark:bg-blue-600/25' : 'bg-gray-600/10 dark:bg-black/30'}"
          on:click={e => handleClickPage(e, i + 1)}>
          {i + 1}
        </button>
      </li>
    {/each}

    <li class="relative">
      <button
        class="rounded-lg backdrop-blur-md bg-gray-600/10 dark:bg-black/30 py-2 px-4 {$currentPage === pageCount ? 'cursor-not-allowed' : 'cursor-pointer'}"
        on:click={e => handleClickPage(e, $currentPage + 1)}>
        Berikutnya &raquo;
      </button>
    </li>
  </ul>
</aside>
