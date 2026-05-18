function updateMobileText() {
  const thElement = document.querySelectorAll('th.first-data');
  
  if (window.innerWidth <= 610) {
    thElement.textContent = 'Модель';
  } else {
    thElement.textContent = 'Объем (модель)';
  }
}

updateMobileText();
window.addEventListener('resize', updateMobileText);