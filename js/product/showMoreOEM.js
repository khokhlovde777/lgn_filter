// Простая версия без анимаций
document.addEventListener('DOMContentLoaded', function() {
  const oemCard = document.querySelector('.product-info__card:has(.show-more)');
  
  if (oemCard) {
    const cardContent = oemCard.querySelector('.card-content');
    const showMoreButton = oemCard.querySelector('.show-more');
    
    if (cardContent && showMoreButton) {
      // Получаем все строки и разделители
      const allRows = Array.from(cardContent.querySelectorAll('.card-content__row'));
      const allDividers = Array.from(cardContent.querySelectorAll('.card-content__devider'));
      
      const INITIAL_VISIBLE_ROWS = 5;
      const INITIAL_VISIBLE_DIVIDERS = 4;
      
      let isExpanded = false;
      
      // Функция для сброса к исходному состоянию
      function resetToInitial() {
        // Скрываем все строки сверх лимита
        allRows.forEach((row, index) => {
          if (index >= INITIAL_VISIBLE_ROWS) {
            row.style.display = 'none';
          } else {
            row.style.display = 'flex';
          }
        });
        
        // Скрываем все разделители сверх лимита
        allDividers.forEach((divider, index) => {
          if (index >= INITIAL_VISIBLE_DIVIDERS) {
            divider.style.display = 'none';
          } else {
            divider.style.display = 'block';
          }
        });
      }
      
      // Функция для показа всех элементов
      function showAll() {
        allRows.forEach(row => {
          row.style.display = 'flex';
        });
        
        allDividers.forEach(divider => {
          divider.style.display = 'block';
        });
      }
      
      // Инициализация
      resetToInitial();
      
      // Проверяем, есть ли скрытые элементы
      if (allRows.length <= INITIAL_VISIBLE_ROWS && allDividers.length <= INITIAL_VISIBLE_DIVIDERS) {
        showMoreButton.style.display = 'none';
      }
      
      // Обработчик кнопки
      showMoreButton.addEventListener('click', function() {
        if (!isExpanded) {
          showAll();
          this.textContent = 'Показать меньше';
          isExpanded = true;
        } else {
          resetToInitial();
          this.textContent = 'Показать еще';
          isExpanded = false;
        }
      });
    }
  }
});