<script>
  import { getTagWithColor } from "../utils.js";
  export let tags;
  const tags_w_color = getTagWithColor(tags);
</script>

<style>
.badge{
  margin-left: 0!important;
  margin-right: .5em;
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
          style="background-color: {item.bg};color: {item.fg};">
          {item.tag}
        </a>
      {:else}
        <a class="badge {item.classes}" href={`/tag/${item.tag}`} alt={item.tag}>
          {item.tag}
        </a>
      {/if}
    {/each}
  {/if}
</div>
