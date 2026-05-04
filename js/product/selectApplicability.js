// Анимация для блоков применимости автомобилей
document.addEventListener('DOMContentLoaded', function() {
  // Находим все кнопки брендов автомобилей
  const brandButtons = document.querySelectorAll('.card-content__row--car-brand');
  
  // Функция для скрытия всех блоков с моделями с анимацией
  function hideAllModelContainers() {
    const allModelContainers = document.querySelectorAll('.card-content--car-models');
    allModelContainers.forEach(container => {
      if (container.style.display !== 'none') {
        animateCollapse(container);
      }
    });
  }
  
  // Функция для показа конкретного блока с моделями с анимацией
  function showModelContainer(container) {
    container.style.display = 'block';
    animateExpand(container);
  }
  
  // Плавное сворачивание элемента
  function animateCollapse(element) {
    // Сохраняем высоту перед анимацией
    const height = element.scrollHeight;
    element.style.maxHeight = height + 'px';
    
    // Запускаем анимацию сворачивания
    setTimeout(() => {
      element.style.maxHeight = '0';
    }, 10);
    
    // После окончания анимации скрываем элемент
    setTimeout(() => {
      if (element.style.maxHeight === '0px') {
        element.style.display = 'none';
      }
    }, 300);
  }
  
  // Плавное разворачивание элемента
  function animateExpand(element) {
    // Сначала делаем элемент видимым, но с max-height 0
    element.style.display = 'block';
    element.style.maxHeight = '0';
    element.style.opacity = '0';
    
    // Запускаем анимацию
    setTimeout(() => {
      const height = element.scrollHeight;
      element.style.maxHeight = height + 'px';
      element.style.opacity = '1';
    }, 10);
    
    // Фиксируем состояние после анимации
    setTimeout(() => {
      if (element.style.maxHeight !== '0px') {
        element.style.maxHeight = 'none';
      }
    }, 310);
  }
  
  // Плавное сворачивание таблицы
  function animateCollapseTable(table) {
    const height = table.scrollHeight;
    table.style.maxHeight = height + 'px';
    
    setTimeout(() => {
      table.style.maxHeight = '0';
    }, 10);
    
    setTimeout(() => {
      if (table.style.maxHeight === '0px') {
        table.style.display = 'none';
      }
    }, 300);
  }
  
  // Плавное разворачивание таблицы
  function animateExpandTable(table) {
    table.style.display = 'block';
    table.style.maxHeight = '0';
    table.style.opacity = '0';
    
    setTimeout(() => {
      const height = table.scrollHeight;
      table.style.maxHeight = height + 'px';
      table.style.opacity = '1';
    }, 10);
    
    setTimeout(() => {
      if (table.style.maxHeight !== '0px') {
        table.style.maxHeight = 'none';
      }
    }, 310);
  }
  
  // Обновление высоты всех открытых элементов (для ресайза)
  function updateAllHeights() {
    // Обновляем открытые блоки с моделями
    const openModelContainers = document.querySelectorAll('.card-content--car-models[style*="display: block"]');
    openModelContainers.forEach(container => {
      if (container.style.maxHeight !== 'none' && container.style.maxHeight !== '0px') {
        const height = container.scrollHeight;
        container.style.maxHeight = height + 'px';
      }
    });
    
    // Обновляем открытые таблицы
    const openTables = document.querySelectorAll('.car-info-table[style*="display: block"]');
    openTables.forEach(table => {
      if (table.style.maxHeight !== 'none' && table.style.maxHeight !== '0px') {
        const height = table.scrollHeight;
        table.style.maxHeight = height + 'px';
      }
    });
  }
  
  // Функция для удаления активных классов со всех кнопок брендов
  function removeActiveClassesFromAllBrands() {
    brandButtons.forEach(button => {
      button.classList.remove('active-car-brand');
      const textElement = button.querySelector('.card-content__title--car-text');
      const svgElement = button.querySelector('.card-content__arrow--car-svg');
      
      if (textElement) {
        textElement.classList.remove('active-car-text');
      }
      if (svgElement) {
        svgElement.classList.remove('active-car-svg');
      }
    });
  }
  
  // Функция для удаления активных классов со всех кнопок моделей
  function removeActiveClassesFromAllModels() {
    const allModelButtons = document.querySelectorAll('.card-content__row--car-model');
    allModelButtons.forEach(button => {
      button.classList.remove('active-car-model');
      const textElement = button.querySelector('.card-content__title--car-text');
      const svgElement = button.querySelector('.card-content__arrow--car-svg');
      
      if (textElement) {
        textElement.classList.remove('active-car-text');
      }
      if (svgElement) {
        svgElement.classList.remove('active-car-svg');
      }
    });
  }
  
  // Функция для скрытия всех таблиц с информацией
  function hideAllInfoTables() {
    const allInfoTables = document.querySelectorAll('.car-info-table');
    allInfoTables.forEach(table => {
      if (table.style.display !== 'none') {
        animateCollapseTable(table);
      }
    });
  }
  
  // Функция для добавления активных классов на кнопку бренда
  function addActiveClassesToBrand(button) {
    button.classList.add('active-car-brand');
    const textElement = button.querySelector('.card-content__title--car-text');
    const svgElement = button.querySelector('.card-content__arrow--car-svg');
    
    if (textElement) {
      textElement.classList.add('active-car-text');
    }
    if (svgElement) {
      svgElement.classList.add('active-car-svg');
    }
  }
  
  // Функция для добавления активных классов на кнопку модели
  function addActiveClassesToModel(button) {
    button.classList.add('active-car-model');
    const textElement = button.querySelector('.card-content__title--car-text');
    const svgElement = button.querySelector('.card-content__arrow--car-svg');
    
    if (textElement) {
      textElement.classList.add('active-car-text');
    }
    if (svgElement) {
      svgElement.classList.add('active-car-svg');
    }
  }
  
  // Функция для удаления активных классов с кнопки модели
  function removeActiveClassesFromModel(button) {
    button.classList.remove('active-car-model');
    const textElement = button.querySelector('.card-content__title--car-text');
    const svgElement = button.querySelector('.card-content__arrow--car-svg');
    
    if (textElement) {
      textElement.classList.remove('active-car-text');
    }
    if (svgElement) {
        svgElement.classList.remove('active-car-svg');
    }
  }
  
  // Обработчики для кнопок брендов
  brandButtons.forEach((brandButton) => {
    // Находим соответствующий блок с моделями (следующий элемент после кнопки)
    const modelContainer = brandButton.nextElementSibling;
    
    // Проверяем, что следующий элемент является блоком с моделями
    if (modelContainer && modelContainer.classList.contains('card-content--car-models')) {
        
      brandButton.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Проверяем, открыт ли уже этот блок
        const isActive = this.classList.contains('active-car-brand');
        
        // Если блок уже активен, закрываем его
        if (isActive) {
          // Удаляем активные классы с кнопки бренда
          this.classList.remove('active-car-brand');
          const textElement = this.querySelector('.card-content__title--car-text');
          const svgElement = this.querySelector('.card-content__arrow--car-svg');
          
          if (textElement) textElement.classList.remove('active-car-text');
          if (svgElement) svgElement.classList.remove('active-car-svg');
          
          // Плавно скрываем блок с моделями
          animateCollapse(modelContainer);
          
          // Плавно скрываем все таблицы внутри этого блока
          const infoTables = modelContainer.querySelectorAll('.car-info-table');
          infoTables.forEach(table => {
            if (table.style.display !== 'none') {
              animateCollapseTable(table);
            }
          });
          
          // Удаляем активные классы у всех кнопок моделей внутри этого блока
          const modelButtons = modelContainer.querySelectorAll('.card-content__row--car-model');
          modelButtons.forEach(modelBtn => {
            removeActiveClassesFromModel(modelBtn);
          });
        } 
        // Если блок не активен, открываем его и закрываем все остальные
        else {
          // Удаляем активные классы со всех кнопок брендов
          removeActiveClassesFromAllBrands();
          
          // Плавно скрываем все блоки с моделями
          hideAllModelContainers();
          
          // Плавно скрываем все таблицы
          hideAllInfoTables();
          
          // Удаляем активные классы со всех кнопок моделей
          removeActiveClassesFromAllModels();
          
          // Добавляем активные классы на текущую кнопку бренда
          addActiveClassesToBrand(this);
          
          // Плавно показываем соответствующий блок с моделями
          showModelContainer(modelContainer);
        }
      });
    }
  });
  
  // Логика для кнопок моделей внутри каждого блока
  function initModelButtons() {
      // Находим все кнопки моделей
      const modelButtons = document.querySelectorAll('.card-content__row--car-model');
      
      modelButtons.forEach(modelButton => {
        // Находим соответствующую таблицу с информацией
        const infoTable = modelButton.nextElementSibling;
        
        // Проверяем, что следующий элемент является таблицей с информацией
        if (infoTable && infoTable.classList.contains('car-info-table')) {
          
          // Изначально скрываем таблицы
          infoTable.style.display = 'none';
          infoTable.style.maxHeight = '0';
          infoTable.style.opacity = '0';
          infoTable.style.overflow = 'hidden';
          infoTable.style.transition = 'max-height 0.3s ease-out, opacity 0.3s ease-out';
          
          // Удаляем старый обработчик, если есть
          modelButton.removeEventListener('click', modelButton._listener);
          
          // Создаем новый обработчик
          const handler = function(e) {
            e.stopPropagation();
            
            // Проверяем, открыта ли уже эта таблица
            const isTableVisible = infoTable.style.display === 'block';
            
            // Находим родительский контейнер моделей
            const parentModelsContainer = this.closest('.card-content--car-models');
            
            // Если таблица скрыта, показываем её
            if (!isTableVisible) {
              // Скрываем все другие таблицы в этом же контейнере моделей
              if (parentModelsContainer) {
                const allInfoTables = parentModelsContainer.querySelectorAll('.car-info-table');
                const allModelButtons = parentModelsContainer.querySelectorAll('.card-content__row--car-model');
                
                // Плавно скрываем все таблицы и удаляем активные классы у других кнопок
                allInfoTables.forEach(table => {
                  if (table !== infoTable && table.style.display !== 'none') {
                    animateCollapseTable(table);
                  }
                });
                
                allModelButtons.forEach(btn => {
                  if (btn !== this) {
                    removeActiveClassesFromModel(btn);
                  }
                });
              }
              
              // Плавно показываем текущую таблицу
              animateExpandTable(infoTable);
              // Добавляем активные классы на текущую кнопку
              addActiveClassesToModel(this);
            } 
            // Если таблица видна, скрываем её
            else {
              animateCollapseTable(infoTable);
              // Удаляем активные классы с текущей кнопки
              removeActiveClassesFromModel(this);
            }
          };
          
          // Сохраняем обработчик для возможного удаления
          modelButton._listener = handler;
          modelButton.addEventListener('click', handler);
        }
      });
  }
  
  // Функция для обновления обработчиков (нужно вызывать при динамическом добавлении контента)
  function refreshModelButtons() {
    initModelButtons();
  }
  
  // Инициализация стилей для всех анимируемых элементов
  function initAnimationStyles() {
    // Добавляем CSS стили для анимации
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      .card-content--car-models,
      .car-info-table {
        transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
        overflow: hidden;
        opacity: 0;
      }
      
      .card-content--car-models {
        max-height: 0;
      }
      
      .card-content__arrow--car-svg {
        transition: transform 0.3s ease;
      }
      
      .card-content__arrow--car-svg.active-car-svg {
        transform: rotate(90deg);
      }
    `;
    document.head.appendChild(styleSheet);
    
    // Инициализируем все элементы
    const allModelContainers = document.querySelectorAll('.card-content--car-models');
    allModelContainers.forEach(container => {
      container.style.maxHeight = '0';
      container.style.opacity = '0';
      container.style.overflow = 'hidden';
      container.style.transition = 'max-height 0.3s ease-out, opacity 0.3s ease-out';
    });
    
    const allInfoTables = document.querySelectorAll('.car-info-table');
    allInfoTables.forEach(table => {
      table.style.maxHeight = '0';
      table.style.opacity = '0';
      table.style.overflow = 'hidden';
      table.style.transition = 'max-height 0.3s ease-out, opacity 0.3s ease-out';
    });
  }
  
  // Инициализация
  function init() {
    // Инициализируем стили анимации
    initAnimationStyles();
    
    // Скрываем все блоки с моделями изначально
    hideAllModelContainers();
    
    // Скрываем все таблицы изначально
    hideAllInfoTables();
    
    // Инициализируем кнопки моделей
    initModelButtons();
    
    // Добавляем обработчик для обновления высоты при изменении размера окна
    let resizeTimeout;
    window.addEventListener('resize', function() {
      // Используем debounce для оптимизации
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateAllHeights();
      }, 150);
    });
    
    // Добавляем обработчик для динамического контента (если нужно)
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          // Проверяем, были ли добавлены новые кнопки моделей
          const addedNodes = mutation.addedNodes;
          let hasNewModelButtons = false;
          
          addedNodes.forEach(node => {
            if (node.nodeType === 1) { // Element node
              if (node.classList && node.classList.contains('card-content__row--car-model')) {
                hasNewModelButtons = true;
              }
              if (node.querySelectorAll) {
                if (node.querySelectorAll('.card-content__row--car-model').length > 0) {
                  hasNewModelButtons = true;
                }
              }
            }
          });
          
          if (hasNewModelButtons) {
            refreshModelButtons();
          }
          
          // Обновляем высоты при добавлении нового контента
          updateAllHeights();
        }
      });
    });
    
    // Наблюдаем за изменениями в документе
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  
  // Запускаем инициализацию
  init();
});