document.addEventListener('DOMContentLoaded', function() {
  
  const categoryItems = document.querySelectorAll('.category-item');
  
  categoryItems.forEach(function(item) {
    
    item.addEventListener('mouseenter', function() {
      this.classList.add('ishover');
    });
    
    item.addEventListener('mouseleave', function() {
      this.classList.remove('ishover');
    });
    
  });
  
});