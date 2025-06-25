import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAnimations = () => {
  AOS.init({
    duration: 800,
    once: false,
    mirror: false,
    offset: 100,
    easing: 'ease-out'
  });
  
  // Add scroll to top button logic
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
      } else {
        scrollToTopBtn.style.opacity = '0';
      }
    });
  }
  
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
