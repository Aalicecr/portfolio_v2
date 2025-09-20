const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const slides = document.querySelectorAll(".slide");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  // Se siamo all'ultima slide, torna alla prima
  if (
    slidesContainer.scrollLeft + slidesContainer.clientWidth >=
    slidesContainer.scrollWidth
  ) {
    slidesContainer.scrollLeft = 0;
  } else {
    slidesContainer.scrollLeft += slideWidth;
  }
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  // Se siamo alla prima slide, vai all'ultima
  if (slidesContainer.scrollLeft === 0) {
    slidesContainer.scrollLeft =
      slidesContainer.scrollWidth - slidesContainer.clientWidth;
  } else {
    slidesContainer.scrollLeft -= slideWidth;
  }
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.side-text');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// MODALE IMMAGINI GRIGLIA FOTO (desktop e mobile)
document.querySelectorAll('.photo-grid img').forEach(img => {
  img.onclick = function() {
    document.getElementById('modalImg').src = this.src;
    document.getElementById('imageModal').classList.add('active');
  };
});

document.getElementById('closeModalDesktop').onclick = function() {
  document.getElementById('imageModal').classList.remove('active');
};
document.getElementById('closeModalMobile').onclick = function() {
  document.getElementById('imageModal').classList.remove('active');
};

// Chiudi il modale cliccando sullo sfondo (ma NON sull'immagine)
document.getElementById('imageModal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('active');
  }
});
