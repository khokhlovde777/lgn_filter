document.addEventListener('DOMContentLoaded', () => {
  const searchNumberBtn = document.querySelector('.btn-search-number');
  const searchAutoBtn = document.querySelector('.btn-search-auto');
  const searchNumberWrapper = document.querySelector('.search-by-number');
  const searchAutoWrapper = document.querySelector('.search-by-auto');
  
  // Поля ввода
  const brandInput = document.querySelector('.search-input-car-brend .search-input');
  const modelInput = document.querySelector('.search-input-car-model .search-input');
  const brandArrow = document.querySelector('.search-input-car-brend-arrow');
  const modelArrow = document.querySelector('.search-input-car-model-arrow');
  const numberInput = document.querySelector('.search-by-number .search-input');
  
  // Скрытые поля для хранения ID
  let brandId = '';
  let modelId = '';
  let modelCode = '';
  
  // Данные марок с ID и code
  const brandsData = [
    { "id": "155196", "code": "acura", "value": "ACURA" },
    { "id": "206954", "code": "aito", "value": "AITO" },
    { "id": "69550", "code": "alfa_romeo", "value": "ALFA ROMEO" },
    { "id": "205336", "code": "astra_iveco_group", "value": "ASTRA (IVECO GROUP)" },
    { "id": "42742", "code": "audi", "value": "AUDI" },
    { "id": "42743", "code": "bmw", "value": "BMW" },
    { "id": "42744", "code": "mercedes_benz", "value": "MERCEDES-BENZ" },
    { "id": "42745", "code": "toyota", "value": "TOYOTA" },
    { "id": "42746", "code": "volkswagen", "value": "VOLKSWAGEN" },
    { "id": "42747", "code": "kia", "value": "KIA" },
    { "id": "42748", "code": "hyundai", "value": "HYUNDAI" },
    { "id": "42749", "code": "renault", "value": "RENAULT" }
  ];
  
  // Данные моделей по маркам
  const modelsData = {
    "acura": [
      { "id": "1001", "value": "MDX" },
      { "id": "1002", "value": "RDX" },
      { "id": "1003", "value": "TLX" }
    ],
    "audi": [
      { "id": "2001", "value": "A3" },
      { "id": "2002", "value": "A4" },
      { "id": "2003", "value": "A6" },
      { "id": "2004", "value": "Q5" },
      { "id": "2005", "value": "Q7" }
    ],
    "bmw": [
      { "id": "3001", "value": "3 Series" },
      { "id": "3002", "value": "5 Series" },
      { "id": "3003", "value": "X3" },
      { "id": "3004", "value": "X5" },
      { "id": "3005", "value": "7 Series" }
    ],
    "mercedes_benz": [
      { "id": "4001", "value": "C-Class" },
      { "id": "4002", "value": "E-Class" },
      { "id": "4003", "value": "S-Class" },
      { "id": "4004", "value": "GLC" },
      { "id": "4005", "value": "GLE" }
    ],
    "toyota": [
      { "id": "5001", "value": "Camry" },
      { "id": "5002", "value": "Corolla" },
      { "id": "5003", "value": "RAV4" },
      { "id": "5004", "value": "Land Cruiser" },
      { "id": "5005", "value": "Highlander" }
    ],
    "volkswagen": [
      { "id": "6001", "value": "Golf" },
      { "id": "6002", "value": "Passat" },
      { "id": "6003", "value": "Tiguan" },
      { "id": "6004", "value": "Polo" },
      { "id": "6005", "value": "Tuareg" }
    ],
    "kia": [
      { "id": "7001", "value": "Rio" },
      { "id": "7002", "value": "Sportage" },
      { "id": "7003", "value": "Sorento" },
      { "id": "7004", "value": "K5" },
      { "id": "7005", "value": "Ceed" }
    ],
    "hyundai": [
      { "id": "8001", "value": "Solaris" },
      { "id": "8002", "value": "Elantra" },
      { "id": "8003", "value": "Santa Fe" },
      { "id": "8004", "value": "Tucson" },
      { "id": "8005", "value": "Sonata" }
    ],
    "renault": [
      { "id": "9001", "value": "Logan" },
      { "id": "9002", "value": "Sandero" },
      { "id": "9003", "value": "Duster" },
      { "id": "9004", "value": "Kaptur" },
      { "id": "9005", "value": "Megane" }
    ]
  };
  
  // Функция для управления стрелкой
  function setArrowState(arrow, isActive) {
    if (arrow) {
      if (isActive) {
        arrow.classList.add('arrow-active');
      } else {
        arrow.classList.remove('arrow-active');
      }
    }
  }
  
  // Функция для создания выпадающего списка марок
  function showBrandSuggestions(suggestions) {
    removeSuggestions();
    
    if (!suggestions.length) {
      setArrowState(brandArrow, false);
      return;
    }
    
    setArrowState(brandArrow, true);
    
    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.className = 'autocomplete-suggestions';
    suggestionsDiv.style.cssText = `
      position: absolute;
      max-height: 300px;
      overflow-y: auto;
      z-index: 9999;
      background: white;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    `;
    
    suggestions.forEach((suggestion) => {
      const suggestionDiv = document.createElement('div');
      suggestionDiv.className = 'autocomplete-suggestion';
      suggestionDiv.textContent = suggestion.value;
      suggestionDiv.style.cssText = `
        padding: 8px 12px;
        cursor: pointer;
        transition: background 0.2s;
        color: #333;
      `;
      suggestionDiv.setAttribute('data-id', suggestion.id);
      suggestionDiv.setAttribute('data-code', suggestion.code);
      
      suggestionDiv.addEventListener('mouseenter', () => {
        suggestionDiv.style.backgroundColor = '#f0f0f0';
      });
      suggestionDiv.addEventListener('mouseleave', () => {
        suggestionDiv.style.backgroundColor = '';
      });
      
      suggestionDiv.addEventListener('click', () => {
        brandInput.value = suggestion.value;
        brandId = suggestion.id;
        modelCode = suggestion.code;
        removeSuggestions();
        setArrowState(brandArrow, false);
        
        // Очищаем поле модели
        modelInput.value = '';
        modelId = '';
        
        brandInput.dispatchEvent(new Event('change', { bubbles: true }));
      });
      
      suggestionsDiv.appendChild(suggestionDiv);
    });
    
    const rect = brandInput.getBoundingClientRect();
    suggestionsDiv.style.top = `${rect.bottom + window.scrollY}px`;
    suggestionsDiv.style.left = `${rect.left}px`;
    suggestionsDiv.style.width = `${rect.width}px`;
    
    document.body.appendChild(suggestionsDiv);
  }
  
  // Функция для создания выпадающего списка моделей
  function showModelSuggestions(suggestions) {
    removeModelSuggestions();
    
    if (!suggestions || !suggestions.length) {
      setArrowState(modelArrow, false);
      return;
    }
    
    setArrowState(modelArrow, true);
    
    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.className = 'autocomplete-suggestions-model';
    suggestionsDiv.style.cssText = `
      position: absolute;
      max-height: 300px;
      overflow-y: auto;
      z-index: 9999;
      background: white;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    `;
    
    suggestions.forEach((suggestion) => {
      const suggestionDiv = document.createElement('div');
      suggestionDiv.className = 'autocomplete-suggestion';
      suggestionDiv.textContent = suggestion.value;
      suggestionDiv.style.cssText = `
        padding: 8px 12px;
        cursor: pointer;
        transition: background 0.2s;
        color: #333;
      `;
      suggestionDiv.setAttribute('data-id', suggestion.id);
      
      suggestionDiv.addEventListener('mouseenter', () => {
        suggestionDiv.style.backgroundColor = '#f0f0f0';
      });
      suggestionDiv.addEventListener('mouseleave', () => {
        suggestionDiv.style.backgroundColor = '';
      });
      
      suggestionDiv.addEventListener('click', () => {
        modelInput.value = suggestion.value;
        modelId = suggestion.id;
        removeModelSuggestions();
        setArrowState(modelArrow, false);
        
        modelInput.dispatchEvent(new Event('change', { bubbles: true }));
      });
      
      suggestionsDiv.appendChild(suggestionDiv);
    });
    
    const rect = modelInput.getBoundingClientRect();
    suggestionsDiv.style.top = `${rect.bottom + window.scrollY}px`;
    suggestionsDiv.style.left = `${rect.left}px`;
    suggestionsDiv.style.width = `${rect.width}px`;
    
    document.body.appendChild(suggestionsDiv);
  }
  
  // Функция получения моделей по выбранной марке
  function getModelsByBrand(brandCode) {
    return modelsData[brandCode] || [];
  }
  
  // Функция удаления подсказок марок
  function removeSuggestions() {
    const existingSuggestions = document.querySelector('.autocomplete-suggestions');
    if (existingSuggestions) {
      existingSuggestions.remove();
    }
    setArrowState(brandArrow, false);
  }
  
  // Функция удаления подсказок моделей
  function removeModelSuggestions() {
    const existingSuggestions = document.querySelector('.autocomplete-suggestions-model');
    if (existingSuggestions) {
      existingSuggestions.remove();
    }
    setArrowState(modelArrow, false);
  }
  
  // Функция фильтрации марок
  function filterBrands(searchText) {
    if (!searchText) return brandsData;
    return brandsData.filter(brand => 
      brand.value.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  
  // Функция фильтрации моделей
  function filterModels(searchText, models) {
    if (!searchText) return models;
    return models.filter(model => 
      model.value.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  
  // Обработчики для поля марки
  if (brandInput) {
    brandInput.addEventListener('click', (e) => {
      e.stopPropagation();
      const filteredBrands = filterBrands(brandInput.value);
      showBrandSuggestions(filteredBrands);
    });
    
    brandInput.addEventListener('input', () => {
      const filteredBrands = filterBrands(brandInput.value);
      showBrandSuggestions(filteredBrands);
      
      // Если марка меняется вручную, сбрасываем ID и очищаем модели
      const selectedBrand = brandsData.find(b => b.value === brandInput.value);
      if (!selectedBrand && brandInput.value !== '') {
        brandId = '';
        modelCode = '';
        modelInput.value = '';
        modelId = '';
      }
    });
    
    brandInput.addEventListener('focus', () => {
      const filteredBrands = filterBrands(brandInput.value);
      showBrandSuggestions(filteredBrands);
    });
    
    brandInput.addEventListener('blur', () => {
      setTimeout(() => {
        removeSuggestions();
      }, 200);
    });
    
    brandInput.addEventListener('change', () => {
      if (brandId && modelCode) {
        const models = getModelsByBrand(modelCode);
        if (models.length) {
          console.log('Доступные модели:', models);
        }
      }
    });
  }
  
  // Обработчики для поля модели
  if (modelInput) {
    modelInput.addEventListener('click', (e) => {
      e.stopPropagation();
      if (modelCode) {
        const models = getModelsByBrand(modelCode);
        const filteredModels = filterModels(modelInput.value, models);
        showModelSuggestions(filteredModels);
      }
    });
    
    modelInput.addEventListener('input', () => {
      if (modelCode) {
        const models = getModelsByBrand(modelCode);
        const filteredModels = filterModels(modelInput.value, models);
        showModelSuggestions(filteredModels);
      }
    });
    
    modelInput.addEventListener('focus', () => {
      if (modelCode) {
        const models = getModelsByBrand(modelCode);
        const filteredModels = filterModels(modelInput.value, models);
        showModelSuggestions(filteredModels);
      }
    });
    
    modelInput.addEventListener('blur', () => {
      setTimeout(() => {
        removeModelSuggestions();
      }, 200);
    });
  }
  
  // Обработчик для стрелки марки
  if (brandArrow) {
    brandArrow.addEventListener('click', (e) => {
      e.stopPropagation();
      const existingSuggestions = document.querySelector('.autocomplete-suggestions');
      if (existingSuggestions) {
        removeSuggestions();
      } else {
        const filteredBrands = filterBrands(brandInput.value);
        showBrandSuggestions(filteredBrands);
      }
    });
  }
  
  // Обработчик для стрелки модели
  if (modelArrow) {
    modelArrow.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!modelCode) {
        console.log('Сначала выберите марку');
        return;
      }
      const existingSuggestions = document.querySelector('.autocomplete-suggestions-model');
      if (existingSuggestions) {
        removeModelSuggestions();
      } else {
        const models = getModelsByBrand(modelCode);
        const filteredModels = filterModels(modelInput.value, models);
        showModelSuggestions(filteredModels);
      }
    });
  }
  
  // Функция поиска
  function handleSearch() {
    // Проверяем, какая форма активна
    const isNumberSearchActive = searchNumberWrapper.classList.contains('active');
    const isAutoSearchActive = searchAutoWrapper.classList.contains('active');
    
    if (isNumberSearchActive) {
      // Поиск по номеру
      const searchValue = numberInput ? numberInput.value.trim() : '';
      
      if (searchValue) {
        // Формируем URL с поисковым запросом
        const url = '/products/cars/' + encodeURIComponent(searchValue) + '/';
        window.location.href = url;
      } else {
        alert('Пожалуйста, введите номер фильтра, его аналог или OEM');
      }
    } else if (isAutoSearchActive) {
      // Поиск по марке и модели
      const brand = modelCode;
      const modelName = modelInput.value;
      const modelIdValue = modelId;
      
      if (brand && modelName && modelIdValue) {
        const normalizedModelName = modelName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        const url = '/products/cars/' + encodeURIComponent(brand) + '/' + encodeURIComponent(normalizedModelName) + '/model-' + modelIdValue + '/';
        window.location.href = url;
      } else if (brand) {
        const url = '/products/cars/' + encodeURIComponent(brand) + '/';
        window.location.href = url;
      } else {
        alert('Пожалуйста, выберите марку автомобиля');
      }
    }
  }
  
  // Обработчик кнопки поиска
  const searchButton = document.querySelector('.btn-search-enter');
  if (searchButton) {
    searchButton.addEventListener('click', handleSearch);
  }
  
  // Обработчик отправки форм
  if (searchNumberWrapper) {
    searchNumberWrapper.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSearch();
    });
  }
  
  if (searchAutoWrapper) {
    searchAutoWrapper.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSearch();
    });
  }
  
  // Обработчик нажатия Enter в полях ввода
  if (numberInput) {
    numberInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
      }
    });
  }
  
  if (brandInput) {
    brandInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
      }
    });
  }
  
  if (modelInput) {
    modelInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
      }
    });
  }
  
  // Клик вне подсказок - закрываем их
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.autocomplete-suggestions') && e.target !== brandInput && e.target !== brandArrow) {
      removeSuggestions();
    }
    if (!e.target.closest('.autocomplete-suggestions-model') && e.target !== modelInput && e.target !== modelArrow) {
      removeModelSuggestions();
    }
  });
  
  // Функции для переключения между поиском по номеру и по авто
  function setActiveButton(activeButton, activeWrapper) {
    // Удаляем active у всех
    searchNumberBtn.classList.remove('active');
    searchAutoBtn.classList.remove('active');
    searchNumberWrapper.classList.remove('active');
    searchAutoWrapper.classList.remove('active');
    
    // Добавляем active выбранному
    activeButton.classList.add('active');
    activeWrapper.classList.add('active');
    
    // Очищаем поля при переключении (опционально)
    if (activeWrapper === searchNumberWrapper) {
      // Очищаем поля поиска по авто
      if (brandInput) brandInput.value = '';
      if (modelInput) modelInput.value = '';
      brandId = '';
      modelId = '';
      modelCode = '';
    } else {
      // Очищаем поле поиска по номеру
      if (numberInput) numberInput.value = '';
    }
  }
  
  // Устанавливаем начальное состояние (по номеру по умолчанию)
  if (searchNumberBtn && searchAutoBtn) {
    setActiveButton(searchNumberBtn, searchNumberWrapper);
    
    searchNumberBtn.addEventListener('click', () => setActiveButton(searchNumberBtn, searchNumberWrapper));
    searchAutoBtn.addEventListener('click', () => setActiveButton(searchAutoBtn, searchAutoWrapper));
  }
  
  // Проверка параметров URL для авто-поиска
  const markaId = new URLSearchParams(window.location.search).get('marka');
  if (markaId) {
    const foundBrand = brandsData.find(b => b.id === markaId);
    if (foundBrand) {
      brandInput.value = foundBrand.value;
      brandId = foundBrand.id;
      modelCode = foundBrand.code;
    }
  }
});