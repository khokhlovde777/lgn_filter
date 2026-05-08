document.addEventListener('DOMContentLoaded', function() {
  // Находим все элементы .model-info__option
  const modelInfoOptions = document.querySelectorAll('.model-info__option');

  // Функция для удаления active со всех элементов
  function removeActiveFromAll(options) {
    options.forEach(option => {
      // Находим кнопку (model-info__head)
      const head = option.querySelector('.model-info__head');
      // Находим body
      const body = option.querySelector('.model-info__body');
      // Находим все элементы с классами head-item__title и head-item__value
      const titles = option.querySelectorAll('.head-item__title');
      const values = option.querySelectorAll('.head-item__value');
      // Находим стрелку
      const arrow = option.querySelector('.head-item__arrow');
      
      // Удаляем классы
      if (head) head.classList.remove('active-model-info__head');
      if (body) body.classList.remove('active-model-info__body');
      titles.forEach(title => title.classList.remove('head-item__text-active'));
      values.forEach(value => value.classList.remove('head-item__text-active'));
      if (arrow) arrow.classList.remove('head-item__arrow-active');
      
      // Удаляем класс active__option с самого .model-info__option
      // option.classList.remove('active__option');
    });
  }

  // Функция для добавления active на нужные элементы
  function addActiveToOption(option) {
    // Находим кнопку (model-info__head)
    const head = option.querySelector('.model-info__head');
    // Находим body
    const body = option.querySelector('.model-info__body');
    // Находим все элементы с классами head-item__title и head-item__value
    const titles = option.querySelectorAll('.head-item__title');
    const values = option.querySelectorAll('.head-item__value');
    // Находим стрелку
    const arrow = option.querySelector('.head-item__arrow');
    
    // Добавляем классы
    if (head) head.classList.add('active-model-info__head');
    if (body) body.classList.add('active-model-info__body');
    titles.forEach(title => title.classList.add('head-item__text-active'));
    values.forEach(value => value.classList.add('head-item__text-active'));
    if (arrow) arrow.classList.add('head-item__arrow-active');
    
    // Добавляем класс active__option на сам .model-info__option
    // option.classList.add('active__option');
  }

  // Добавляем обработчик клика на каждую кнопку model-info__head
  modelInfoOptions.forEach(option => {
    const button = option.querySelector('.model-info__head');
    
    if (button) {
      button.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Проверяем, активна ли уже эта опция
        const isActive = button.classList.contains('active-model-info__head');
        
        // Удаляем active со всех опций
        removeActiveFromAll(modelInfoOptions);
        
        // Если эта опция не была активна, делаем её активной
        if (!isActive) {
          addActiveToOption(option);
        }
        // Если была активна - закрываем её (уже закрыто через removeActiveFromAll)
      });
    }
  });
});