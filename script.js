// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = document.querySelectorAll(".portfolio-image, .row-image");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentImageIndex = 0;

// Open lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    currentImageIndex = index;
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Previous image
prevBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentImageIndex].src;
});

// Next image
nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  lightboxImg.src = images[currentImageIndex].src;
});

// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.querySelectorAll(".flower").forEach((img) => {
  img.addEventListener("click", () => {
    let stage = parseInt(img.dataset.stage);
    const name = img.dataset.name;
    stage = (stage % 4) + 1; // Cycle from 1 to 4
    img.src = `assets/Leaflet/${name}${stage}.png`;
    img.dataset.stage = stage;
  });
});
