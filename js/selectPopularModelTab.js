document.addEventListener('DOMContentLoaded', function() {
  const partnershipVariantsButton = document.querySelectorAll('.popular-models__tab');

  function removeActiveFromAll(buttons) {
    buttons.forEach(button => {
      button.classList.remove('active-tab--popular-model');
    });
  }

  function addActiveToTab(button) {
    button.classList.add('active-tab--popular-model');
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