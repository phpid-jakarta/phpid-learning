<script>
  import { onMount } from "svelte";
  import { allData } from "../store";

  import Hero from "../components/Hero.svelte";
  import CardItem from "../components/CardItem.svelte";
  import Footer from "../components/Footer.svelte";
  import Modal from "../components/Modal.svelte";

  onMount(async () => {
    try {
      const Macy = await import("macy");
      if (Macy && Macy.default) {
        window.__macy = Macy.default({
          container: "#content-speaker",
          trueOrder: false,
          waitForImages: true,
          margin: 20,
          columns: 3,
          breakAt: {
            520: 1,
            400: 1
          }
        });
      }
    } catch (err) {
      console.debug("Error masonry", err);
    }
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

<svelte:head>
  <title>PHPID Online Learning 2020 by PHPID</title>
</svelte:head>

<main id="page-index">
  <Hero />
  <article class="app-content">
    {#if $allData.length > 0}
      <div id="content-speaker">
        {#each $allData as item (item.id)}
          <CardItem {item} />
        {/each}
      </div>
    {/if}
  </article>
  <Footer />
  <Modal />
</main>
