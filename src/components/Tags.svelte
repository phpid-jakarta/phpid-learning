<script>
  import { goto } from "@sapper/app";
  import { currentTag } from "../store";
  import { getTagWithColor, initMasonry } from "../utils.js";

  export let tags;
  const tags_w_color = getTagWithColor(tags);

  const handleClickTag = (e, tag) => {
    e.preventDefault();
    goto(`/tag/${tag}`);
    currentTag.set(tag);

    setTimeout(() => {
      initMasonry()
    }, 500);
  };
</script>

<style>
  .badge {
    margin-left: 0 !important;
    margin-right: 0.5em;
  }
</style>

<div class="badge-group">
  {#if tags_w_color && tags_w_color.length > 0}
    {#each tags_w_color as item (item)}
      {#if item.isMapped}
        <a
          class="badge"
          href={`/tag/${item.tag}`}
          alt={item.tag}
          on:click={e => handleClickTag(e, item.tag)}
          style="background-color: {item.bg};color: {item.fg};">
          {item.tag}
        </a>
      {:else}
        <a
          class="badge {item.classes}"
          on:click={e => handleClickTag(e, item.tag)}
          href={`/tag/${item.tag}`}
          alt={item.tag}>
          {item.tag}
        </a>
      {/if}
    {/each}
  {/if}
</div>
