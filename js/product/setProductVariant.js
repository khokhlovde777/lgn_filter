document.addEventListener('DOMContentLoaded', function() {
  // Находим все кнопки variants-card внутри контейнера
  const variantButtons = document.querySelectorAll('.variants-card');

  // Функция для удаления active со всех элементов
  function removeActiveFromAll(buttons) {
  buttons.forEach(button => {
    // Удаляем active с самой кнопки
    button.classList.remove('active-variant');
    
    // Находим внутренние элементы и удаляем active
    const upDiv = button.querySelector('.variants-card__up');
    const article = button.querySelector('.variants-card__article');
    const title = button.querySelector('.variants-card__title');
    
    if (upDiv) upDiv.classList.remove('active-variant');
    if (article) article.classList.remove('active-variant');
    if (title) title.classList.remove('active-variant');
  });
  }

  // Функция для добавления active на нужные элементы внутри одной кнопки
  function addActiveToButton(button) {
    // Добавляем active на саму кнопку
    button.classList.add('active-variant');
    
    // Находим внутренние элементы и добавляем им active
    const upDiv = button.querySelector('.variants-card__up');
    const article = button.querySelector('.variants-card__article');
    const title = button.querySelector('.variants-card__title');
    
    if (upDiv) upDiv.classList.add('active-variant');
    if (article) article.classList.add('active-variant');
    if (title) title.classList.add('active-variant');
  }

  // Добавляем обработчик клика на каждую кнопку
  variantButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Удаляем active со всех кнопок
      removeActiveFromAll(variantButtons);
      
      // Добавляем active на текущую кнопку и её внутренние элементы
      addActiveToButton(this);
    });
  });
})