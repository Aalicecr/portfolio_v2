const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const slides = document.querySelectorAll(".slide"); // aggiunto

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


// Funzionalità di ingrandimento delle immagini per la griglia
const images = document.querySelectorAll(".photo-grid img");
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close-btn");

// Aggiungi un evento di clic a ogni immagine
images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex"; // Mostra il contenitore
    modalImage.src = image.src; // Imposta l'immagine cliccata nel contenitore
  });
});

// Aggiungi un evento di clic al pulsante di chiusura
closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; // Nascondi il contenitore
});
