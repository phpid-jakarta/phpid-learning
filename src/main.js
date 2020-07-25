window.iframeURL = function iframeURL(link) {
  const linkSplit = link.split("/");
  if (linkSplit[2].includes("youtu")) {
    return `https://youtube.com/embed/${linkSplit[3]}`;
  }
  if (linkSplit[2].includes("facebook")) {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
      link
    )}&show_text=false&width=734&height=400`;
  }
};

window.showModal = function showModal(element) {
  const modal = document.querySelector("#modal-video");
  const iframe = document.querySelector("#modal-video .card iframe");
  const linkDirect = document.querySelector(
    "#modal-video .card .card-body .card-actions a"
  );
  const textDescription = document.querySelector(
    "#modal-video .card .card-body p"
  );
  const textTitle = document.querySelector(
    "#modal-video .card .card-body .card-title"
  );
  const textSubtitle = document.querySelector(
    "#modal-video .card .card-body .card-subtitle"
  );
  console.log(textDescription);
  iframe.setAttribute("src", iframeURL(element.dataset.video));
  modal.style.display = "block";
  linkDirect.setAttribute("href", element.dataset.video);
  textDescription.innerHTML = element.dataset.desc;
  textTitle.innerHTML = element.dataset.title.split(";")[0];
  textSubtitle.innerHTML = element.dataset.title.split(";")[1];
};

window.closeModal = function closeModal() {
  const modal = document.querySelector("#modal-video");
  const iframe = document.querySelector("#modal-video .card iframe");
  modal.style = "display:none;";
  iframe.setAttribute("src", "");
};

if ("loading" in HTMLImageElement.prototype) {
  // Intersection Observer Validation
  if ("IntersectionObserver" in window) {
    // Initiate Masonry Library
    let macy = null;

    try {
      if (Macy) {
        macy = Macy({
          container: "#content-speaker",
          trueOrder: false,
          waitForImages: true,
          margin: 20,
          columns: 3,
          breakAt: {
            520: 1,
            400: 1,
          },
        });
      }
    } catch (e) {
      console.debug(e);
    }

    const heroImage = document.querySelector(".hero-image");
    const cards = document.querySelectorAll("#content-speaker .card"); // Select All Card Element on Content Speaker Section
    const iobs = new IntersectionObserver((entries, observe) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList == "hero-image") {
            window.scrollTo({ behavior: "smooth", top: 0 });
          } else {
            let card = entry.target;
            let img = entry.target.childNodes[0];
            img.src = img.dataset.src;
            card.classList.add("animate__animated");
            card.classList.add("animate__zoomIn");
            img.classList.remove("lazyload");
            iobs.unobserve(card);
            macy && macy.recalculate && macy.recalculate(true); // Recalculate Masonry when element is intersecting
          }
        }
      });
    });
    iobs.observe(heroImage);
    cards.forEach((card) => iobs.observe(card));
  } else {
    const images = document.querySelectorAll("img.lazyload");
    images.forEach((img) => {
      img.src = img.dataset.src;
    });
  }
} else {
  // Dynamically import the LazySizes library
  let script = document.createElement("script");
  script.async = true;
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";
  document.body.appendChild(script);
}
