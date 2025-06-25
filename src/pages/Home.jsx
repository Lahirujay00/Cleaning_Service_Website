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
            <div className="w-full h-24 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                    <path fill="#2CA2B0" fillOpacity="0.2" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,149.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
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