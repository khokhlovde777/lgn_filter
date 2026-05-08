function initProductGallery() {
  // Проверяем ширину экрана
  if (window.innerWidth <= 1000) {
    console.log('Gallery disabled: screen width <= 1000px');
    return;
  }
  
  if (typeof Swiper === 'undefined') {
    console.error('Swiper library is not loaded');
    return;
  }
  
  const thumbsContainer = document.querySelector('.gallery-sliders__imgs');
  const mainContainer = document.querySelector('.img-gallery__slides');
  
  if (!thumbsContainer || !mainContainer) {
    console.error('Containers not found');
    return;
  }
  
  try {
    const originalThumbsDisplay = thumbsContainer.style.display;
    const originalMainDisplay = mainContainer.style.display;
    
    const galleryThumbs = new Swiper(thumbsContainer, {
      spaceBetween: 16, 
      slidesPerView: 'auto',
      direction: 'horizontal',
      watchSlidesProgress: true,
      freeMode: true,
      mousewheel: false,
    });
    
    const section = document.querySelector('.item-section__imgs-gallery');
    const prevBtn = section?.querySelector('.img-gallery__arrow--left');
    const nextBtn = section?.querySelector('.img-gallery__arrow--right');
    
    const galleryMain = new Swiper(mainContainer, {
      spaceBetween: 0,
      speed: 600,
      thumbs: {
        swiper: galleryThumbs,
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
    });
    
    galleryThumbs.on('init', function(swiper) {
      swiper.slides.forEach((slide, index) => {
        const slideItem = slide.querySelector('.slide-item');
        if (slideItem) {
          slideItem.addEventListener('mouseenter', function() {
            galleryMain.slideTo(index);
          });
        }
      });
    });
    
    console.log('Gallery initialized successfully');
    
  } catch (error) {
    console.error('Error creating Swiper:', error);
  }
}

// Запускаем при загрузке DOM
document.addEventListener('DOMContentLoaded', initProductGallery);