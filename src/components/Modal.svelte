<style>
#modal-video {
  position: fixed;
  width: 100%;
  top: 0;
  display: none;
}

.wrapper {
  height: 100vh;
  background: black;
  opacity: 0.88;
}

.card {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: white;
  top: 0;
  border: none;
}

.card .card-body {
  position: relative;
}
.card-title, .card-subtitle {
  font-family: "Neucha", sans-serif;
}

.card .card-body .card-actions {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card .card-body .card-actions button {
  display: block;
  margin: 10px 0px;
}

.card iframe {
  width: 100%;
}
@media only screen and (min-width: 700px) {
  .card {
    width: 800px;
    height: 700px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .card .card-body .card-actions {
    text-align: left;
    display: block;
    bottom: 0;
  }

  .card .card-body .card-actions button {
    display: inline;
    margin: 10px 10px;
  }

  .card iframe {
    height: 450px;
  }
}
</style>

<div id="modal-video">
  <div class="wrapper" />
  <div class="card">
    <iframe
      src=""
      style="border:none;overflow:hidden"
      scrolling="no"
      frameBorder="0"
      allowTransparency="true"
      allow="encrypted-media"
      allowFullScreen="true"
      title="Video" />
    <div class="card-body">
      <h4 class="card-title">Title</h4>
      <h5 class="card-subtitle">Subtitle</h5>
      <p />
      <div class="card-actions">
        <a
          href="https://www.facebook.com/groups/phpid/"
          target="_blank"
          rel="noopener"
          title="Facebook Group PHPID">
          <button class="btn-secondary">Lihat Sumber Video</button>
        </a>
        <button class="btn-danger" onclick="closeModal()">Tutup Pemutar</button>
      </div>
    </div>
  </div>
</div>
