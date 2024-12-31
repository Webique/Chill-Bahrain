document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle-menu");
  const navLinks = document.querySelector(".nav-links");

  toggleButton.addEventListener("click", () => {
    if (navLinks.classList.contains("show")) {
      navLinks.classList.remove("show"); // Close the menu
      setTimeout(() => {
        navLinks.style.display = "none"; // Hide completely after animation
      }, 300); // Match CSS transition duration
    } else {
      navLinks.style.display = "flex"; // Show the menu
      setTimeout(() => {
        navLinks.classList.add("show"); // Add animation
      }, 10); // Add slight delay for smooth animation
    }
  });

  // Ensure dropdown resets properly when resizing to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.style.display = "flex"; // Keep visible in desktop view
      navLinks.classList.remove("show"); // Remove animation classes
    } else if (!navLinks.classList.contains("show")) {
      navLinks.style.display = "none"; // Hide in mobile view if not active
    }
  });
});


function scrollMenu(direction) {
  const scrollContainer = document.querySelector('.menu-scroll');
  const scrollAmount = 250; // Adjust scroll distance
  if (direction === 'left') {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

