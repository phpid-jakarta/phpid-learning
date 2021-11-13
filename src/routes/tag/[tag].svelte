<script context="module">
  export async function preload(page, session) {
    const { tag } = page.params;
    return { tag };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { allByTags, currentTag } from "../../store";
  import { initMasonry } from "../../utils.js";

  import HeroTag from "../../components/HeroTag.svelte";
  import CardItem from "../../components/CardItem.svelte";
  import Footer from "../../components/Footer.svelte";
  import Pagination from "../../components/Pagination.svelte";

  export let tag;

  onMount(() => {
    currentTag.set(tag);
    initMasonry();
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
  <HeroTag {tag} />
  <article class="app-content">
    {#if $allByTags.length > 0}
      <div id="content-speaker">
        {#each $allByTags as item (`${item.id}${item.slug}`)}
          <CardItem {item} />
        {/each}
      </div>
    {/if}
  </article>
  <Footer />
  <!-- <Modal /> -->
</main>
