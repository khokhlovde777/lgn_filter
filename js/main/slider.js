document.addEventListener('DOMContentLoaded', function() {
    const backgrounds = [
        '/src/main/bg_1.png',
        // '/src/main/bg_2.png',
        // '/src/main/bg_3.png',
        // '/src/main/bg_4.png'
    ];
    
    const firstSection = document.querySelector('.first-section');
    const circlesWrapper = document.querySelector('.circles-wrapper');
    const circles = document.querySelectorAll('.circles-wrapper svg circle');
    
    const overlay1 = document.createElement('div');
    const overlay2 = document.createElement('div');
    
    overlay1.className = 'overlay overlay-active';
    overlay2.className = 'overlay';
    
    firstSection.insertBefore(overlay2, firstSection.firstChild);
    firstSection.insertBefore(overlay1, firstSection.firstChild);
    
    overlay1.style.backgroundImage = `url('${backgrounds[0]}')`;
    overlay2.style.backgroundImage = `url('${backgrounds[1]}')`;
    
    let currentIndex = 0;
    
    function updateActiveCircle(index) {
        circles.forEach((circle, i) => {
            if (i === index) {
                circle.setAttribute('fill', '#FF914D'); 
            } else {
                circle.setAttribute('fill', '#FBFBFB'); 
            }
        });
    }
    
    updateActiveCircle(0);
    
    function changeBackgroundToIndex(targetIndex) {
        if (targetIndex === currentIndex) return;
        
        const currentActive = document.querySelector('.overlay-active');
        const nextOverlay = currentActive === overlay1 ? overlay2 : overlay1;
        
        nextOverlay.style.backgroundImage = `url('${backgrounds[targetIndex]}')`;
        
        currentActive.classList.add('slide-out');
        nextOverlay.classList.add('slide-in');
        nextOverlay.classList.add('overlay-active');
        
        setTimeout(() => {
            currentActive.classList.remove('slide-out', 'overlay-active');
            nextOverlay.classList.remove('slide-in');
        }, 600);
        
        currentIndex = targetIndex;
        updateActiveCircle(currentIndex);
    }
    
    function nextSlide() {
        const nextIndex = (currentIndex + 1) % backgrounds.length;
        changeBackgroundToIndex(nextIndex);
    }
    
    let interval = setInterval(nextSlide, 5000);
    
    circles.forEach((circle, index) => {
        circle.addEventListener('click', function(e) {
            e.stopPropagation(); 
            changeBackgroundToIndex(index);
            clearInterval(interval);
            interval = setInterval(nextSlide, 5000);
        });
    });
});