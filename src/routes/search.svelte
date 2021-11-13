<script context="module">
  export async function preload(page) {
    const { q = "" } = page.query;
    return { q };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { allByKeyword, currentKeyword } from "../store";
  import { initMasonry } from "../utils.js";

  import HeroSearch from "../components/HeroSearch.svelte";
  import CardItem from "../components/CardItem.svelte";
  import Footer from "../components/Footer.svelte";

  export let q;

  onMount(() => {
    currentKeyword.set(q);
    initMasonry();
  });
</script>

<main id="page-index">
  <HeroSearch {q} />
  <article class="app-content">
    {#if $allByKeyword.length > 0}
      <div id="content-speaker">
        {#each $allByKeyword as item (`${item.id}${item.slug}`)}
          <CardItem {item} />
        {/each}
      </div>
    {/if}
  </article>
  <Footer />
</main>

<style>
  #content-speaker {
    max-width: 90%;
    margin: 50px auto;
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }
</style>
