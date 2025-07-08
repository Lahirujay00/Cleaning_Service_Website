import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import { initAnimations } from '../utils/animations';

const Home = () => {
    useEffect(() => {
        // Initialize animations when component mounts
        initAnimations();
    }, []);

    useEffect(() => {
        // Add scroll-triggered reveals
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('float-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        const animatableElements = document.querySelectorAll('.animate-on-scroll');
        animatableElements.forEach(el => observer.observe(el));
        
        return () => {
            animatableElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="flex flex-col bg-[#F0F9FF] min-h-screen">
            <Header />
            <div className="flex-grow">
                <HeroSection />
                
                {/* Modified Services section to ensure buttons are clickable */}
                <div className="animate-on-scroll relative z-10" style={{ opacity: 1 }}>
                    <ServicesSection />
                </div>
                
                <div className="relative z-10 transform -mt-10 animate-on-scroll opacity-0" data-aos="fade-up">
                    <AboutSection />
                </div>
                
                <div className="relative z-0 bg-gradient-to-br from-[#0A3D62]/5 to-[#2CA2B0]/10 py-16 animate-on-scroll opacity-0" data-aos="fade-up">
                    <TestimonialsSection />
                </div>
                
                {/* Contact section removed - moved to Contact page */}
            </div>
            
            <div className="fixed bottom-8 right-8 z-50 opacity-0 transition-opacity duration-500" id="scrollToTop">
                <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                    className="bg-white p-3 rounded-full shadow-lg hover-float border border-[#2CA2B0]/20"
                >
                    <svg className="w-6 h-6 text-[#2CA2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Home;
