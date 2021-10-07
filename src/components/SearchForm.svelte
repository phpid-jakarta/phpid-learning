<script>
  import { goto } from '@sapper/app';
  import { currentKeyword } from '../store';

  export let q;

  const handleSubmit = () => {
    const keyword = document.getElementById('q').value;

    goto(`/search?q=${keyword}`);
    currentKeyword.set(keyword);
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
