document.addEventListener('DOMContentLoaded', function() {
  const brandButtons = document.querySelectorAll('.card-content__row--car-brand');
  
  function hideAllModelContainers() {
    const allModelContainers = document.querySelectorAll('.card-content--car-models');
    allModelContainers.forEach(container => {
      if (container.style.display !== 'none') {
        animateCollapse(container);
      }
    });
  }
  
  function showModelContainersForBrand(brandId) {
    const containers = document.querySelectorAll(`.card-content--car-models[data-brand="${brandId}"]`);
    containers.forEach(container => {
      showModelContainer(container);
    });
  }
  
  function hideModelContainersForBrand(brandId) {
    const containers = document.querySelectorAll(`.card-content--car-models[data-brand="${brandId}"]`);
    containers.forEach(container => {
      if (container.style.display !== 'none') {
        animateCollapse(container);
      }
    });
  }
  
  function showModelContainer(container) {
    container.style.display = 'flex';
    animateExpand(container);
  }
  
  function animateCollapse(element) {
    const height = element.scrollHeight;
    element.style.maxHeight = height + 'px';
    
      element.style.maxHeight = '0';
    
      if (element.style.maxHeight === '0px') {
        element.style.display = 'none';
      }
  }
  
  function animateExpand(element) {
    element.style.display = 'flex';
    element.style.maxHeight = '0';
    element.style.opacity = '0';
  
    const height = element.scrollHeight;
    element.style.maxHeight = height + 'px';
    element.style.opacity = '1';

    if (element.style.maxHeight !== '0px') {
      element.style.maxHeight = 'none';
    }
  }
  
  function animateCollapseTable(table) {
    const height = table.scrollHeight;
    table.style.maxHeight = height + 'px';
    
    table.style.maxHeight = '0';

    if (table.style.maxHeight === '0px') {
      table.style.display = 'none';
    }
  }
  
  function animateExpandTable(table) {
    table.style.display = 'flex';
    table.style.maxHeight = '0';
    table.style.opacity = '0';
    
    const height = table.scrollHeight;
    table.style.maxHeight = height + 'px';
    table.style.opacity = '1';
  
    if (table.style.maxHeight !== '0px') {
      table.style.maxHeight = 'none';
    }
  }
  
  function updateAllHeights() {
    const openModelContainers = document.querySelectorAll('.card-content--car-models[style*="display: flex"]');
    openModelContainers.forEach(container => {
      if (container.style.maxHeight !== 'none' && container.style.maxHeight !== '0px') {
        const height = container.scrollHeight;
        container.style.maxHeight = height + 'px';
      }
    });
    
    const openTables = document.querySelectorAll('.car-info-table[style*="display: flex"]');
    openTables.forEach(table => {
      if (table.style.maxHeight !== 'none' && table.style.maxHeight !== '0px') {
        const height = table.scrollHeight;
        table.style.maxHeight = height + 'px';
      }
    });
  }
  
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
  
  function removeActiveClassesFromModelsForBrand(brandId) {
    const modelButtons = document.querySelectorAll(`.card-content__row--car-model[data-brand="${brandId}"]`);
    modelButtons.forEach(button => {
      removeActiveClassesFromModel(button);
    });
  }
  
  function hideAllInfoTables() {
    const allInfoTables = document.querySelectorAll('.car-info-table');
    allInfoTables.forEach(table => {
      if (table.style.display !== 'none') {
        animateCollapseTable(table);
      }
    });
  }
  
  function hideAllInfoTablesForBrand(brandId) {
    const allInfoTables = document.querySelectorAll(`.car-info-table[data-brand="${brandId}"]`);
    allInfoTables.forEach(table => {
      if (table.style.display !== 'none') {
        animateCollapseTable(table);
      }
    });
  }
  
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
  
  brandButtons.forEach((brandButton) => {
    const brandId = brandButton.dataset.brand;
    
    if (!brandId) {
      console.warn('Кнопка бренда не имеет атрибута data-brand');
      return;
    }
    
    brandButton.addEventListener('click', function(e) {
      e.stopPropagation();
      
      const isActive = this.classList.contains('active-car-brand');
      
      if (isActive) {
        this.classList.remove('active-car-brand');
        const textElement = this.querySelector('.card-content__title--car-text');
        const svgElement = this.querySelector('.card-content__arrow--car-svg');
        
        if (textElement) textElement.classList.remove('active-car-text');
        if (svgElement) svgElement.classList.remove('active-car-svg');
        
        hideModelContainersForBrand(brandId);
        hideAllInfoTablesForBrand(brandId);
        removeActiveClassesFromModelsForBrand(brandId);
      } 
      else {
        removeActiveClassesFromAllBrands();
        hideAllModelContainers();
        hideAllInfoTables();
        removeActiveClassesFromAllModels();
        addActiveClassesToBrand(this);
        showModelContainersForBrand(brandId);
      }
    });
  });
  
  function initModelButtons() {
      const modelButtons = document.querySelectorAll('.card-content__row--car-model');
      
      modelButtons.forEach(modelButton => {
        const infoTable = modelButton.nextElementSibling;
        
        if (infoTable && infoTable.classList.contains('car-info-table')) {
          
          infoTable.style.display = 'none';
          infoTable.style.maxHeight = '0';
          infoTable.style.opacity = '0';
          infoTable.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
          
          modelButton.removeEventListener('click', modelButton._listener);
          
          const handler = function(e) {
            e.stopPropagation();
            
            const isTableVisible = infoTable.style.display === 'flex';
            
            const parentModelsContainer = this.closest('.card-content--car-models');
            
            if (!isTableVisible) {
              if (parentModelsContainer) {
                const allInfoTables = parentModelsContainer.querySelectorAll('.car-info-table');
                const allModelButtons = parentModelsContainer.querySelectorAll('.card-content__row--car-model');
                
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
              
              animateExpandTable(infoTable);
              addActiveClassesToModel(this);
            } 

            else {
              animateCollapseTable(infoTable);
              removeActiveClassesFromModel(this);
            }
          };
          
          modelButton._listener = handler;
          modelButton.addEventListener('click', handler);
        }
      });
  }
  
  function refreshModelButtons() {
    initModelButtons();
  }
  
  function initAnimationStyles() {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      .card-content--car-models,
      .car-info-table {
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
    
    const allModelContainers = document.querySelectorAll('.card-content--car-models');
    allModelContainers.forEach(container => {
      container.style.maxHeight = '0';
      container.style.opacity = '0';
    });
    
    const allInfoTables = document.querySelectorAll('.car-info-table');
    allInfoTables.forEach(table => {
      table.style.maxHeight = '0';
      table.style.opacity = '0';
    });
  }
  
  function init() {
    initAnimationStyles();
    hideAllModelContainers();
    hideAllInfoTables();
    initModelButtons();
    
    let resizeTimeout;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateAllHeights();
      }, 150);
    });
  }


  init();
});