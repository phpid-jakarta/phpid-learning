<script>
  import { getTagWithColor } from '../utils.js'
  export let tags
  const tags_w_color = getTagWithColor(tags)
</script>

<style>
.tags>span {
  margin-right: .25em;
}
</style>

<div class="tags">
  {#if tags_w_color && tags_w_color.length > 0}
    {#each tags_w_color as item (item)}
      {#if item.isMapped}
        <span
          class="badge mr-1"
          style="background-color: {item.bg};color: {item.fg};">
          {item.tag}
        </span>
      {:else}
        <span class="badge mr-1 {item.classes}">{item.tag}</span>
      {/if}
    {/each}
  {/if}
</div>
