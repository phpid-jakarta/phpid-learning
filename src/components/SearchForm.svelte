<script>
  export let q;
</script>

<form action="/search" class="search-form">
  <input type="text" name="q" value={q} /><button type="submit">Cari</button>
</form>

<style>
  .search-form {
    display: flex;
    padding-bottom: 16px;
  }
</style>
