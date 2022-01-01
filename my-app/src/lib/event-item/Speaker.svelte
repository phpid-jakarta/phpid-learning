<script>
  import { goto } from '$app/navigation';

  export let speaker;

  const handleClick = e => {
    e.preventDefault();
    goto(`/search?q=from:${speaker}`);
  };
</script>

<h5 class="card-subtitle">
  <a href={`/search?q=from:${speaker}`} title={speaker} on:click={handleClick}>
    {speaker}
  </a>
</h5>

<style>
  .card-subtitle {
    font-family: 'Neucha', sans-serif;
  }
</style>
