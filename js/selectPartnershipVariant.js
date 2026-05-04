document.addEventListener('DOMContentLoaded', function() {
  const partnershipVariantsButton = document.querySelectorAll('.tabs__button');

  function removeActiveFromAll(buttons) {
    buttons.forEach(button => {
      button.classList.remove('active-tab');
    });
  }

  function addActiveToTab(button) {
    button.classList.add('active-tab');
  }

  partnershipVariantsButton.forEach(button => {
    button.addEventListener('click', function() {
      removeActiveFromAll(partnershipVariantsButton);
      addActiveToTab(this);
    });
  });

  if (partnershipVariantsButton.length > 0) {
    addActiveToTab(partnershipVariantsButton[0]);
  }
});