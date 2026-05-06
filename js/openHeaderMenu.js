document.addEventListener('DOMContentLoaded', function() {
  // Десктопное меню
  const catalogButton = document.querySelector('.link-catalog__text');
  const menuWrapper = document.querySelector('.header__menu-wrapper');
  
  // Мобильное подменю
  const mobileCatalogButton = document.querySelector('.menu__item--products');
  const mobileSubmenu = document.querySelector('.menu__second-level');
  
  // === ДЕСКТОП ЛОГИКА (оставляем как есть) ===
  if (catalogButton && menuWrapper) {
    menuWrapper.style.display = 'none';
    
    function openMenu() {
      menuWrapper.style.display = 'flex';
      setTimeout(() => {
        menuWrapper.style.opacity = '1';
        menuWrapper.style.visibility = 'visible';
        menuWrapper.style.transform = 'translateY(0)';
      }, 10);
    }
    
    function closeMenu() {
      menuWrapper.style.opacity = '0';
      menuWrapper.style.visibility = 'hidden';
      menuWrapper.style.transform = 'translateY(-10px)';
      
      setTimeout(() => {
        if (menuWrapper.style.opacity === '0') {
          menuWrapper.style.display = 'none';
        }
      }, 300);
    }
    
    function toggleMenu(event) {
      event.stopPropagation();
      
      if (menuWrapper.style.display === 'flex' || 
        window.getComputedStyle(menuWrapper).display !== 'none') {
        closeMenu();
      } else {
        openMenu();
      }
    }
    
    catalogButton.addEventListener('click', toggleMenu);
    
    document.addEventListener('click', function(event) {
      const isClickInsideMenu = menuWrapper.contains(event.target);
      const isClickOnButton = catalogButton.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnButton) {
        closeMenu();
      }
    });
    
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeMenu();
      }
    });
    
    const menuItems = menuWrapper.querySelectorAll('.menu-wrapper__item');
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        closeMenu();
        console.log('Выбран пункт:', this.querySelector('.menu-wrapper__item-text')?.textContent);
      });
    });
  }
  
  // === МОБИЛЬНОЕ ПОДМЕНЮ (новая логика) ===
  if (mobileCatalogButton && mobileSubmenu) {
    // Скрываем подменю по умолчанию
    mobileSubmenu.style.display = 'none';
    
    // Добавляем стрелку для индикатора (опционально)
    const arrow = mobileCatalogButton.querySelector('.menu__item-arrow');
    
    function openMobileSubmenu() {
      mobileSubmenu.style.display = 'flex';
      mobileSubmenu.style.flexDirection = 'column';
      
      // Поворачиваем стрелку (если есть)
      if (arrow) {
        arrow.style.transform = 'rotate(90deg)';
        arrow.style.transition = 'transform 0.3s ease';
      }
    }
    
    function closeMobileSubmenu() {
      mobileSubmenu.style.display = 'none';
      
      // Возвращаем стрелку (если есть)
      if (arrow) {
        arrow.style.transform = 'rotate(0deg)';
      }
    }
    
    function toggleMobileSubmenu(event) {
      event.stopPropagation();
      
      if (mobileSubmenu.style.display === 'flex' || 
          window.getComputedStyle(mobileSubmenu).display !== 'none') {
        closeMobileSubmenu();
      } else {
        openMobileSubmenu();
      }
    }
    
    mobileCatalogButton.addEventListener('click', toggleMobileSubmenu);
    
    // Закрытие подменю при клике на пункт меню
    const mobileMenuItems = mobileSubmenu.querySelectorAll('.menu__item');
    mobileMenuItems.forEach(item => {
      item.addEventListener('click', function() {
        closeMobileSubmenu();
        console.log('Выбран пункт:', this.textContent);
      });
    });
    
    // Закрытие подменю при клике вне его
    document.addEventListener('click', function(event) {
      const isClickInsideSubmenu = mobileSubmenu.contains(event.target);
      const isClickOnButton = mobileCatalogButton.contains(event.target);
      
      if (!isClickInsideSubmenu && !isClickOnButton) {
        // Проверяем, открыто ли подменю
        if (mobileSubmenu.style.display === 'flex' || 
            window.getComputedStyle(mobileSubmenu).display !== 'none') {
          closeMobileSubmenu();
        }
      }
    });
  }
});