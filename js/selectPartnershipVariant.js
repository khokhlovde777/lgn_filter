document.addEventListener('DOMContentLoaded', function() {
  const partnershipVariantsButton = document.querySelectorAll('.tabs__button');
  
  const sections = [
    '#section-1', '#section-2', '#section-3', 
    '#section-4', '#section-5', '#section-6'
  ];

  function removeActiveFromAll(buttons) {
    buttons.forEach(button => {
      button.classList.remove('active-tab');
    });
  }

  function addActiveToTab(button) {
    button.classList.add('active-tab');
  }

  function activateButtonByIndex(index) {
    if (partnershipVariantsButton[index] && 
        !partnershipVariantsButton[index].classList.contains('active-tab')) {
      removeActiveFromAll(partnershipVariantsButton);
      addActiveToTab(partnershipVariantsButton[index]);
    }
  }

  partnershipVariantsButton.forEach((button, index) => {
    button.addEventListener('click', function() {
      removeActiveFromAll(partnershipVariantsButton);
      addActiveToTab(this);
      
      const targetAnchor = sections[index];
      if (targetAnchor) {
        const anchor = document.querySelector(targetAnchor);
        if (anchor) {
          anchor.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  function updateActiveButtonOnScroll() {
    const headerOffset = 347;
    const scrollPosition = window.scrollY + headerOffset + 50;
    
    let activeIndexFound = false;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.querySelector(sections[i]);
      if (section) {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop) {
          activateButtonByIndex(i);
          activeIndexFound = true;
          break;
        }
      }
    }
    
    if (!activeIndexFound && sections.length > 0) {
      activateButtonByIndex(0);
    }
  }

  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = requestAnimationFrame(updateActiveButtonOnScroll);
  });
  
  if (partnershipVariantsButton.length > 0) {
    addActiveToTab(partnershipVariantsButton[0]);
  }
  
  updateActiveButtonOnScroll();
});