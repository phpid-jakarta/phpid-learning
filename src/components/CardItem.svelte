<script>
  import { onMount } from "svelte";
  export let item;

  let src =
    "https://github.com/phpid-jakarta/phpid-online-learning-2020/raw/master/cover/default.jpg";
  let loaded = false;
  let observer = null;

  function onIntersect(entries) {
    entries.forEach(node => {
      if (!node.isIntersecting) return false;

      node.target.onload = () => {
        loaded = true;

        window.__macy &&
          window.__macy.recalculate &&
          window.__macy.recalculate(true);
      };

      node.target.src = item.cover;

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
  .card-image {
    width: auto;
    min-height: 200px;
    object-fit: cover;
    transition: filter .3s linear;
  }
  .card-image.is--loading {
    filter: blur(5px);
  }
  .card-image.is--loaded {
    transition-delay: .5s;
    filter: blur(0);
  }
  .card-title, .card-subtitle {
    font-family: "Neucha", sans-serif;
  }
  .card .card-body {
    min-height: 200px;
    background: white;
  }

  .card .card-body button {
    margin: 5px;
  }

  .card .card-body a + a {
    margin: 0;
  }
</style>

<div class="card">
  <img class="card-image {loaded ? 'is--loaded' : 'is--loading'} js-image--{item.id}" data-src={item.cover} {src} alt={item.topic} />
  <div class="card-body">
    <span class="badge secondary" style="margin-right: .5em">{item.date}</span>
    <span class="badge success">{item.time} WIB</span>
    <h4 class="card-title">{item.topic}</h4>
    <h5 class="card-subtitle">{item.speaker}</h5>
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
