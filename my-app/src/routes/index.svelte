<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { showData, perPage, offsetPage, currentTag } from "../store";

  import { initMasonry } from "$lib/utils";

  import Hero from "$lib/hero/HeroDefault.svelte";
  import CardItem from "$lib/event-item/CardItem.svelte";
  import Pagination from "$lib/pagination/Pagination.svelte";

  onMount(() => {
    currentTag.set('')
    initMasonry()
  });
</script>

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
</main>
