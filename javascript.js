function toggleNav() {
    var navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
  }

 // Function to initialize the visitor count
 function initializeVisitorCount() {
  if (!localStorage.getItem('visitorCount')) {
    localStorage.setItem('visitorCount', '0');
  }
}

// Function to update and display the visitor count
function updateVisitorCount() {
  let count = localStorage.getItem('visitorCount');
  count = parseInt(count) + 1;
  localStorage.setItem('visitorCount', count.toString());
  document.getElementById('visitorCount').textContent = count;
}

// Initialize visitor count when the page loads
initializeVisitorCount();

// Update visitor count on page load
window.onload = updateVisitorCount; 