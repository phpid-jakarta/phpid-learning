<script>
  import { originData } from "../store";

  const getDateOnly = (val = '') => {
    let res = val;
    const arr = res.split(',')
    if (arr && arr.length > 1) {
      res = arr[1].trim();
    }
    return res;
  }

  const dataLength = $originData.length;
  const dataStart = getDateOnly($originData[dataLength - 1].date);
  const dataEnd = getDateOnly($originData[0].date);
  const dateRange = `${dataStart} - ${dataEnd}`;
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
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  text-align: center;
}

.hero-text h1 {
  margin: 20px 0;
  font-size: 2rem;
  font-family: "Neucha", sans-serif;
}

.hero-text h3 {
  margin: 0;
  font-size: 1.25rem;
  font-family: "Neucha", sans-serif;
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
.hero-button {
  display: flex;
}
.hero-arrow {
  position: absolute;
  bottom: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.hero-arrow a {
  text-decoration: none;
  background-image: none;
}

.hero-arrow button {
  border-color: white;
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
      <h1 class="animate__animated animate__bounce">PHPID Online Learning</h1>
      <h3 class="animate__animated animate__bounce">{$originData.length} Materi</h3>
      <span class="animate__animated animate__bounce">{dateRange}</span>
      <div class="hero-button">
        <a href="https://s.byphp.id/jadi-pemateri" target="_blank" rel="noopener" title="Github">
          <button class="animate__animated animate__bounceIn">Daftar jadi speaker</button>
        </a>
        <a href="https://s.byphp.id/fb" target="_blank" rel="noopener" title="Facebook Group PHPID">
          <button class="btn-secondary animate__animated animate__bounceIn">FB Group</button>
        </a>
      </div>
    </div>
    <div class="hero-arrow">
      <a href="#content-speaker">
        <button class="animate__animated animate__bounceIn animate__delay-1s">&darr;</button>
      </a>
    </div>
  </div>
</header>
