function initPositionsGallery() {
  // Проверяем ширину экрана
  if (window.innerWidth <= 1020) {
    console.log('Positions gallery disabled: screen width <= 1020px');
    return;
  }
  
  if (typeof Swiper === 'undefined') {
    console.error('Swiper library is not loaded');
    return;
  }
  
  const galleryContainer = document.querySelector('.gallery-sliders__items');
  
  if (!galleryContainer) {
    console.error('Gallery container not found');
    return;
  }
  
  const slides = galleryContainer.querySelectorAll('.swiper-slide');
  if (slides.length === 0) {
    console.error('No slides found');
    return;
  }
  
  const positionsSection = document.querySelector('.gallery-positions');
  const prevBtn = positionsSection?.querySelector('.gallery__arrow--left');
  const nextBtn = positionsSection?.querySelector('.gallery__arrow--right');
  
  try {
    const positionsSlider = new Swiper('.gallery-sliders__items', {
      slidesPerView: 'auto',
      spaceBetween: 18,
      slidesOffsetBefore: 0,
      speed: 600,
      loop: false,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      grabCursor: true,
      mousewheel: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
    });
    
    console.log('Positions gallery initialized successfully');
    
    return positionsSlider;
    
  } catch (error) {
    console.error('Error creating Swiper:', error);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initPositionsGallery();
});