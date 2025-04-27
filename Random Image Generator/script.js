const imgContainer = document.querySelector(".img-container");
const btnEl = document.querySelector(".btn");
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');

// Load more images when button clicked
btnEl.addEventListener("click", () => {
  updateimg(6);
});

// Function to create and attach new images
function updateimg(num) {
  for (let i = 0; i < num; i++) {
    const newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/400?random=${Math.floor(Math.random() * 1000)}`;
    newImg.alt = "Random Image";
    newImg.style.cursor = "pointer";
    newImg.classList.add('gallery-img');
    imgContainer.appendChild(newImg);
  }
}

// Event delegation: handle image clicks
imgContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    openLightbox(e.target.src);
  }
});

// Function to open lightbox
function openLightbox(src) {
  lightboxImg.src = src;
  lightboxImg.style.width = '800px';
  lightboxImg.style.height = '800px';
  lightbox.classList.remove('hidden');
  lightbox.classList.add('show');
}

// Function to close lightbox
function closeLightbox() {
  lightbox.classList.remove('show');
  setTimeout(() => {
    lightbox.classList.add('hidden');
    lightboxImg.src = "";
  }, 300); // Wait for fade-out animation to complete
}

// Close button event
closeBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent triggering lightbox click event
  closeLightbox();
});

// Clicking outside image closes lightbox
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});
