<script>
  import { goto } from "@sapper/app";
  import { currentKeyword } from "../store";
  import { initMasonry } from "../utils.js";

  export let q;

  const handleSubmit = () => {
    const keyword = document.getElementById("q").value;

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
<p class="small tips">
  Tips: Kamu juga bisa mencari topik berdasarkan pembicara favoritmu dengan
  menggunakan kata kunci: <code>from:Nama Pembicara</code>
</p>

<style>
  .search-form {
    display: flex;
    align-items: center;
  }

  .search-form button {
    margin-right: 16px;
  }
  .tips {
    margin-bottom: 16px;
    font-size: 70%;
  }
</style>
