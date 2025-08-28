// Carosello
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const slides = document.querySelectorAll(".slide"); // aggiunto

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});


// Funzionalità di ingrandimento delle immagini per la griglia
const images = document.querySelectorAll('.photo-grid img');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close-btn');

// Aggiungi un evento di clic a ogni immagine
images.forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'flex'; // Mostra il contenitore
    modalImage.src = image.src; // Imposta l'immagine cliccata nel contenitore
  });
});

// Aggiungi un evento di clic al pulsante di chiusura
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // Nascondi il contenitore
});
