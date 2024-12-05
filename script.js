document.addEventListener('DOMContentLoaded', function() {
    // Select all menu toggle elements
    const menuToggles = document.querySelectorAll('.menu-toggle');
  
    // Add click event listener to each toggle
    menuToggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        // Toggle the active class on the clicked toggle
        this.classList.toggle('active');
        
        // Get the next sibling element (menu content)
        const menuContent = this.nextElementSibling;
        
        // If menu content is currently open, close it
        if (menuContent.style.maxHeight) {
          menuContent.style.maxHeight = null;
        } 
        // If menu content is closed, open it
        else {
          menuContent.style.maxHeight = menuContent.scrollHeight + "px";
        }
      });
    });
  });