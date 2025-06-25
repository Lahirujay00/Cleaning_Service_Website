import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <div className="flex flex-col bg-[#F0F9FF] min-h-screen">
            <Header />
            <HeroSection />
            <ServicesSection />
            <div className="relative z-10 transform -mt-10">
                <AboutSection />
            </div>
            <div className="relative z-0 bg-gradient-to-br from-[#0A3D62]/5 to-[#2CA2B0]/10 py-16">
                <TestimonialsSection />
            </div>
            <ContactSection />
        </div>
    );
};

export default Home;