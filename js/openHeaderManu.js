document.addEventListener('DOMContentLoaded', function() {
    const catalogButton = document.querySelector('.link-catalog__text');
    const menuWrapper = document.querySelector('.header__menu-wrapper');
    
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
    } else {
        console.error('Элементы не найдены. Проверьте классы .link-catalog__text и .header__menu-wrapper');
    }
});