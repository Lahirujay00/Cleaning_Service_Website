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
};
