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
      }, 90); // Add slight delay for smooth animation
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

document.addEventListener("DOMContentLoaded", function () {
  const aboutUsSection = document.querySelector('.about-us');

  function onScroll() {
    const sectionPosition = aboutUsSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (sectionPosition.top <= viewportHeight - 100) {
      aboutUsSection.classList.add('visible'); // Add the visible class
      window.removeEventListener('scroll', onScroll); // Trigger only once
    }
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // Check on load in case the section is already in view
});

document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector('.opening-hours');
  const title = section.querySelector('.section-title');
  const wrapper = section.querySelector('.hours-wrapper');

  function onScroll() {
    const sectionPosition = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (sectionPosition.top <= viewportHeight - 100) {
      title.style.opacity = "1";
      title.style.transform = "translateY(0)";
      wrapper.style.opacity = "1";
      wrapper.style.transform = "translateY(0)";
      window.removeEventListener('scroll', onScroll); // Trigger only once
    }
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // Check on load in case already in view
});

const section = document.querySelector('.location-section');
const title = section.querySelector('.section-title');
const mapWrapper = section.querySelector('.map-wrapper');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}, { threshold: 0.5 });

observer.observe(section);
