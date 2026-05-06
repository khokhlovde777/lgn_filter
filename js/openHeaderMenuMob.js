document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.querySelector('.header-burger');
  const menuWrapper = document.querySelector('.menu');
  const closeButton = document.querySelector('.menu__close');

  if (burgerButton && menuWrapper && closeButton) {
    function openMenu() {
      menuWrapper.style.display = 'flex';
      setTimeout(() => {
        menuWrapper.style.transform = 'translateX(0)';
      }, 10);
    }

    function closeMenu() {
      menuWrapper.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        menuWrapper.style.display = 'none';
      },300);
    }
  }

  document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
          closeMenu();
      }
  });

  function toggleMenu(event) {
    event.stopPropagation();
    
    if (menuWrapper.style.display === 'flex' || 
      window.getComputedStyle(menuWrapper).display !== 'none') {
      closeMenu();
    } else {
      openMenu();
    }
  }

  burgerButton.addEventListener('click', toggleMenu);
    
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = menuWrapper.contains(event.target);
    const isClickOnButton = burgerButton.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnButton) {
      closeMenu();
    }
  });

  closeButton.addEventListener('click', closeMenu)
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

})