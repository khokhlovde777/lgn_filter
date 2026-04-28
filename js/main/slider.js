
document.addEventListener('DOMContentLoaded', function() {
    const backgrounds = [
        '/src/main/bg_1.png',
        '/src/main/bg_2.png',
        '/src/main/bg_3.png',
        '/src/main/bg_4.png'
    ];
    
    let currentIndex = 0;
    const firstSection = document.querySelector('.first-section');
    
    const circles = document.querySelectorAll('.circles-wrapper svg circle');
    
    const overlay1 = document.createElement('div');
    const overlay2 = document.createElement('div');
    
    overlay1.className = 'overlay overlay-active';
    overlay2.className = 'overlay';
    
    firstSection.insertBefore(overlay2, firstSection.firstChild);
    firstSection.insertBefore(overlay1, firstSection.firstChild);
    
    overlay1.style.backgroundImage = `url('${backgrounds[0]}')`;
    overlay2.style.backgroundImage = `url('${backgrounds[1]}')`;
    
    let nextIndex = 0;
    
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
    
    function changeBackgroundWithSlide() {
        nextIndex = (nextIndex + 1) % backgrounds.length;

        updateActiveCircle(nextIndex);
        
        const currentActive = document.querySelector('.overlay-active');
        const nextOverlay = currentActive === overlay1 ? overlay2 : overlay1;
        
        nextOverlay.style.backgroundImage = `url('${backgrounds[nextIndex]}')`;
        
        currentActive.classList.add('slide-out');
        nextOverlay.classList.add('slide-in');
        nextOverlay.classList.add('overlay-active');
        
        setTimeout(() => {
            currentActive.classList.remove('slide-out', 'overlay-active');
            nextOverlay.classList.remove('slide-in');
        }, 600);
    }
    
    setInterval(changeBackgroundWithSlide, 5000);
});