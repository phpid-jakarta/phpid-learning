<script>
  import { allByTags } from "../store";

  export let tag;
</script>

<style>
  .header {
    margin-bottom: 2rem;
  }
  .hero-image {
    min-height: 100vh;
    position: relative;

    background-image: linear-gradient(to right, #f7e4a0, #fadf8e, #f5c04c);
  }

  .hero-text {
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .hero-text h1 {
    margin-top: 2rem;
    margin-bottom: 0.25em;
    font-size: 2rem;
    font-family: "Neucha", sans-serif;
  }
  .hero-text h3 {
    margin-bottom: 1rem;
    margin-top: 0;
    font-size: 1.25rem;
    font-family: "Neucha", sans-serif;
  }

  @media only screen and (min-width: 700px) {
    .hero-text h1 {
      font-size: 4rem;
    }
    .hero-text h3 {
      font-size: 1.8rem;
    }
  }

  .waves {
    position: absolute;
    width: 100%;
    height: 15vh;
    margin-top: -100px;
    /*Fix for safari gap*/
    min-height: 100px;
    max-height: 150px;
  }

  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
      margin-top: -40px;
    }
  }

  /* Animation */
  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }

  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }

  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }

    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
</style>

<header class="header">
  <div class="hero-image">
    <div class="hero-text">
      <h1>Kategori: {tag}</h1>
      <h3>
        Tersedia
        <b>{$allByTags.length}</b>
        webinar
      </h3>
      <div class="row flex-center">
        <a
          href="/"
          title="Ke Beranda"
          class="paper-btn btn-secondary margin-right">
          Ke Beranda
        </a>
        <a
          href="https://s.byphp.id/donasi"
          target="_blank"
          rel="noopener noreferrer"
          title="Donasi"
          class="paper-btn btn-success">
          Bantu donasi
        </a>
      </div>
    </div>
    <svg
      class="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto">
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18
          v44h-352z" />
      </defs>
      <g class="parallax">
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="0"
          fill="rgba(255,255,255,0.7" />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(255,255,255,0.5)" />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="5"
          fill="rgba(255,255,255,0.3)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
      </g>
    </svg>
  </div>
</header>
