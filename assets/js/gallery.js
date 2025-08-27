// Gallery Modal Functionality for Meihodo Accommodation Pages
document.addEventListener('DOMContentLoaded', function() {
  // Initialize gallery modals for all accommodation pages
  initializeGalleryModals();
});

function initializeGalleryModals() {
  const galleries = document.querySelectorAll('.accommodation-gallery');
  
  galleries.forEach(gallery => {
    const images = gallery.querySelectorAll('img');
    if (images.length === 0) return;
    
    // Create modal HTML
    const modal = createGalleryModal(images);
    document.body.appendChild(modal);
    
    // Add click events to images
    images.forEach((img, index) => {
      img.addEventListener('click', () => openGalleryModal(modal, images, index));
    });
  });
}

function createGalleryModal(images) {
  const modal = document.createElement('div');
  modal.className = 'gallery-modal';
  modal.innerHTML = `
    <div class="close-btn">&times;</div>
    <div class="nav-btn prev">&lt;</div>
    <div class="nav-btn next">&gt;</div>
    <div class="image-counter">1 / ${images.length}</div>
    <img src="" alt="Gallery image" />
  `;
  
  // Add event listeners
  const closeBtn = modal.querySelector('.close-btn');
  const prevBtn = modal.querySelector('.prev');
  const nextBtn = modal.querySelector('.next');
  const modalImg = modal.querySelector('img');
  
  closeBtn.addEventListener('click', () => closeGalleryModal(modal));
  prevBtn.addEventListener('click', () => navigateImage(modal, images, -1));
  nextBtn.addEventListener('click', () => navigateImage(modal, images, 1));
  modalImg.addEventListener('click', () => closeGalleryModal(modal));
  
  // Close on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeGalleryModal(modal);
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    
    switch(e.key) {
      case 'Escape':
        closeGalleryModal(modal);
        break;
      case 'ArrowLeft':
        navigateImage(modal, images, -1);
        break;
      case 'ArrowRight':
        navigateImage(modal, images, 1);
        break;
    }
  });
  
  return modal;
}

function openGalleryModal(modal, images, startIndex) {
  const modalImg = modal.querySelector('img');
  const counter = modal.querySelector('.image-counter');
  
  currentImageIndex = startIndex;
  updateModalImage(modal, images, currentImageIndex);
  updateCounter(counter, currentImageIndex + 1, images.length);
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeGalleryModal(modal) {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateImage(modal, images, direction) {
  const modalImg = modal.querySelector('img');
  const counter = modal.querySelector('.image-counter');
  
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  updateModalImage(modal, images, currentImageIndex);
  updateCounter(counter, currentImageIndex + 1, images.length);
}

function updateModalImage(modal, images, index) {
  const modalImg = modal.querySelector('img');
  const img = images[index];
  
  modalImg.src = img.src;
  modalImg.alt = img.alt;
}

function updateCounter(counter, current, total) {
  counter.textContent = `${current} / ${total}`;
}

let currentImageIndex = 0;
