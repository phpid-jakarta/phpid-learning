<script>
  import { onMount } from "svelte";
  import { showData, perPage, offsetPage, currentTag } from "../store";
  import { initMasonry } from "../utils.js";

  import Hero from "../components/Hero.svelte";
  import CardItem from "../components/CardItem.svelte";
  import Footer from "../components/Footer.svelte";
  import Pagination from "../components/Pagination.svelte";

  onMount(() => {
    currentTag.set('')
    initMasonry()
  });
</script>

<style>
  .app-content {
    min-height: 70vh;
    text-rendering: optimizeLegibility;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
  #content-speaker {
    max-width: 90%;
    margin: 50px auto;
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }
</style>

<main id="page-index">
  <Hero />
  <article class="app-content">
    {#if $showData.length > 0}
      <Pagination />
    {/if}
    {#if $showData.length > 0}
      <div id="content-speaker">
        {#each $showData.slice($offsetPage, $offsetPage + $perPage) as item (`${item.id}${item.slug}`)}
          <CardItem {item} />
        {/each}
      </div>
    {/if}
  </article>
  {#if $showData.length > 0}
    <Pagination />
  {/if}
  <Footer />
</main>
