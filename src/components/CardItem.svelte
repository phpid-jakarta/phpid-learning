<script>
  import { onMount } from "svelte";
  import Tags from "./Tags.svelte";

  export let item;

  let src =
    "https://github.com/phpid-jakarta/phpid-learning/raw/master/cover/default.jpg";
  let loaded = false;
  let observer = null;

  function onIntersect(entries) {
    entries.forEach(node => {
      if (!node.isIntersecting) return false;

      const img = document.createElement("img");
      img.classList.add("is--loading");
      img.classList.add("card-image");

      img.onload = () => {
        loaded = true;
        img.classList.remove("is--loading");
        img.classList.add("is--loaded");

        window.__macy &&
          window.__macy.recalculate &&
          window.__macy.recalculate(true);
      };

      img.setAttribute("src", item.cover);
      img.setAttribute("alt", item.topic);

      node.target.appendChild(img);

      observer && observer.unobserve(node.target);
    });
  }

  onMount(() => {
    observer = new IntersectionObserver(onIntersect, {
      rootMargin: "0px",
      threshold: 1.0
    });

    const node = document.querySelector(`.js-image--${item.id}`);
    observer && node && observer.observe(node);
  });
</script>

<style>
  .card {
    width: 100%;
    margin-bottom: 13px;
  }

  @media only screen and (min-width: 700px) {
    .card {
      width: calc(33.3333% - 13.3333px);
      margin-right: 13px;
    }
  }
  .card-image-wrapper {
    width: auto;
    min-height: 200px;
    background: #212121;
  }
  .card-title,
  .card-subtitle {
    font-family: "Neucha", sans-serif;
  }
  .card .card-body {
    min-height: 200px;
    background: white;
  }

  .card .card-body button {
    margin: 5px 5px 0 0;
  }

  .card .card-body a + a {
    margin: 0;
  }
  .badge-group {
    margin-bottom: 1em;
  }
</style>

<div class="card">
  <div class="card-image-wrapper js-image--{item.id}" />
  <div class="card-body">
    <div class="badge-group">
      <span class="badge warning" style="margin-right: .25em">#{item.id}</span>
      <span class="badge secondary" style="margin-right: .25em">
        {item.date}
      </span>
      <span class="badge success">{item.time} WIB</span>
    </div>

    <h4 class="card-title">{item.topic}</h4>
    <h5 class="card-subtitle">{item.speaker}</h5>

    {#if item.tags && item.tags.length > 0}
      <Tags tags={item.tags} />
    {/if}

    <div class="card-text">
      {#if item.videos[0] && item.videos[0] !== 'empty'}
        <a
          href={item.videos[0]}
          target="_blank"
          rel="noopener"
          style="background-image: none"
          title="Tonton Video">
          <button class="btn-secondary">Tonton Video</button>
        </a>
      {/if}

      {#if item.registrasi && item.registrasi !== 'empty'}
        <a
          href={item.registrasi}
          target="_blank"
          rel="noopener"
          style="background-image: none"
          title="Registrasi">
          <button class="btn-warning">Registrasi</button>
        </a>
      {/if}

      {#if item.slide && item.slide !== 'empty'}
        <a
          href={item.slide}
          target="_blank"
          rel="noopener"
          style="background-image: none"
          title="Slide">
          <button class="btn-success">Lihat Slide</button>
        </a>
      {/if}
    </div>
  </div>
</div>
