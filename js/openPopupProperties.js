document.addEventListener('DOMContentLoaded', function() {

  const popupProperties = document.querySelector('.popup-properties-company');
  const openBtn = document.querySelector('.btn-requisits');
  const closeBtn = document.querySelector('.popup-properties__close-img');

  if (popupProperties && openBtn) {
    // Изначально скрываем попап
    popupProperties.style.display = 'none';
    popupProperties.style.opacity = '0';

    // Открытие попапа
    openBtn.addEventListener('click', function() {
      popupProperties.style.display = 'flex';
      // Небольшая задержка для правильной анимации
      setTimeout(() => {
        popupProperties.style.opacity = '1';
      }, 10);
    });
  }

  if (popupProperties && closeBtn) {
    // Закрытие попапа
    closeBtn.addEventListener('click', function() {
      popupProperties.style.opacity = '0';
      setTimeout(() => {
        popupProperties.style.display = 'none';
      }, 300);
    });
  }

  // Дополнительно: закрытие по клику на фон (оверлей)
  if (popupProperties) {
    popupProperties.addEventListener('click', function(e) {
      if (e.target === popupProperties) {
        popupProperties.style.opacity = '0';
        setTimeout(() => {
          popupProperties.style.display = 'none';
        }, 300);
      }
    });
  }

});