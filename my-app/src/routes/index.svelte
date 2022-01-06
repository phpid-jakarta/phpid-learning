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

<section data-page="home">
  <Hero />
  <article class="container mx-auto">
    {#if $showData.length > 0}
      <Pagination />
    {/if}
    {#if $showData.length > 0}
      <div id="content-speaker" class="grid grid-cols-1 md:grid-cols-3 md:gap-x-8 gap-y-5 md:gap-y-8 mb-8">
        {#each $showData.slice($offsetPage, $offsetPage + $perPage) as item (`${item.id}${item.slug}`)}
          <CardItem {item} />
        {/each}
      </div>
    {/if}
  </article>
  {#if $showData.length > 0}
    <Pagination />
  {/if}
</section>
