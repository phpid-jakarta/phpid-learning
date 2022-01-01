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

<style>
  .pagination {
    margin: .5em 0;
    text-align: center;
  }
  .page-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  .page-item {
    list-style: none;
    text-indent: 0;
    margin: 0 0.25em;
  }
  .page-item::before {
    content: "";
    display: none;
  }

  .is--d {
    display: none;
  }
  /* For desktop only */
  @media only screen and (min-width: 700px) {
    .is--d {
      display: inline;
    }
  }
</style>

<aside class="pagination">
  <span>Hal {$currentPage} dari {pageCount}</span>
  <ul class="page-wrapper">
    <li class="page-item">
      <button
        class="btn-small {$currentPage === 1 ? 'btn-primary"' : 'btn-secondary"'}"
        on:click={e => handleClickPage(e, $currentPage - 1)}>
        &laquo; Sebelumnya
      </button>
    </li>

    {#each createArray(pageCount) as i}
      <li class="page-item is--d">
        <button
          class="btn-small {$currentPage === i + 1 ? 'btn-success"' : 'btn-secondary"'}"
          on:click={e => handleClickPage(e, i + 1)}>
          {i + 1}
        </button>
      </li>
    {/each}

    <li class="page-item">
      <button
        class="btn-small {$currentPage === pageCount ? 'btn-secondary"' : 'btn-primary"'}"
        on:click={e => handleClickPage(e, $currentPage + 1)}>
        Berikutnya &raquo;
      </button>
    </li>
  </ul>
</aside>
