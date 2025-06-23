import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <TestimonialsSection />
            <ContactSection />
        </div>
    );
};

export default Home;