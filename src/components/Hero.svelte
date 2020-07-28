<script>
  import { allData } from "../store";
</script>

<style>
.hero-image {
  min-height: 100vh;
  background: url('./assets/new_bg_hero.webp');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 500px;
  position: relative;
  background-color: #212121;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text h1 {
  margin: 20px 0 0 0;
  font-size: 2rem;
}

.hero-text h3 {
  margin: 0;
  font-size: 1.25rem;
}

.hero-text span {
  display: block;
  margin-bottom: 20px;
}

.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
  margin: 5px;
}

.hero-text button:hover {
  background-color: #555;
  color: white;
}

.hero-arrow {
  position: absolute;
  bottom: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}

.hero-arrow a {
  text-decoration: none;
  background-image: none;
}

.hero-arrow button {
  border-color: white;
  color: white;
  margin-top: 20px;
}

@media only screen and (min-width: 700px) {
  .hero-text h3 {
    font-size: 1.8rem;
  }

  .hero-text h1 {
    font-size: 2.5rem;
  }
}
</style>

<header class="header">
  <div class="hero-image">
    <div class="hero-text">
      <h1 class="animate__animated animate__bounce">PHPID Online Learning 2020</h1>
      <h3 class="animate__animated animate__bounce">{$allData.length} Materi</h3><span class="animate__animated animate__bounce">{$allData[0].date} - {$allData[$allData.length - 1].date}</span><a href="https://github.com/phpid-jakarta/phpid-online-learning-2020/" target="_blank" rel="noopener" title="Github">
      <button class="animate__animated animate__bounceIn">Github</button></a><a href="https://www.facebook.com/groups/phpid/" target="_blank" rel="noopener" title="Facebook Group PHPID">
      <button class="btn-secondary animate__animated animate__bounceIn">FB Group</button></a>
    </div>
    <div class="hero-arrow"><span class="animate__animated animate__bounceIn animate__delay-1s">Lihat Semua Pemateri</span><a href="#content-speaker">
        <button class="animate__animated animate__bounceIn animate__delay-1s">&darr;</button></a></div>
  </div>
</header>
