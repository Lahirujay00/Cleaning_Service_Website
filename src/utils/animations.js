import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAnimations = () => {
  // Reset any previous initialization
  AOS.refresh();
  
  // Initialize with better settings
  AOS.init({
    // Global settings
    duration: 800,           // Animation duration
    easing: 'ease-out-cubic', // Animation easing
    once: false,             // Whether animation should happen only once
    mirror: false,           // Whether elements should animate out while scrolling up
    offset: 120,             // Offset (in px) from the original trigger point
    delay: 0,                // Default delay
    anchorPlacement: 'top-bottom', // Define which position of the element regarding to window should trigger the animation
  });
  
  // Make sure animations are properly triggered when navigating
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  });
  
  // Refresh AOS on window resize for responsive layouts
  window.addEventListener('resize', () => {
    AOS.refresh();
  });
  
  // Add parallax effect to elements
  const handleParallax = () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
      const speed = element.getAttribute('data-speed') || 0.2;
      const yPos = -(window.pageYOffset * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  };
  
  window.addEventListener('scroll', handleParallax);
  
  // Add scroll progress indicator
  const addScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrollDone = window.pageYOffset / scrollTotal;
      progressBar.style.width = `${scrollDone * 100}%`;
    });
  };
  
  addScrollProgress();
};
