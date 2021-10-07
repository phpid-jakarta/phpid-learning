<script>
  import { goto } from '@sapper/app';
  import { currentKeyword } from '../store';
  import { initMasonry } from '../utils.js';

  export let q;

  const handleSubmit = () => {
    const keyword = document.getElementById('q').value;

    goto(`/search?q=${keyword}`);
    currentKeyword.set(keyword);

    setTimeout(() => {
      initMasonry();
    }, 500);
  };
</script>

<form
  action="/search"
  class="search-form"
  method="GET"
  on:submit|preventDefault={handleSubmit}
>
  <input type="text" name="q" value={q} id="q" />
  <button type="submit">Cari</button>
</form>

<style>
  .search-form {
    display: flex;
    padding-bottom: 16px;
  }
</style>
