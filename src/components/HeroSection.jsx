import React, { useState, useEffect } from 'react';
import heroBg from '../assets/images/herobg.JPG';
import img4182 from '../assets/images/IMG_4182.JPG';
import img4183 from '../assets/images/IMG_4183.JPG';
import img4914 from '../assets/images/IMG_4914.JPG';

const HeroSection = () => {
    const images = [heroBg, img4182, img4183, img4914];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative h-screen">
            {/* Background with darker overlay */}
            <div className="absolute inset-0">
                {images.map((image, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img 
                            src={image} 
                            alt={`Cleaning Service ${index + 1}`} 
                            className="w-full h-full object-cover"
                        />
                        {/* Increase the darkness of the overlay to improve text visibility */}
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                    </div>
                ))}
            </div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-3xl text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
                        Professional Cleaning <span className="block text-white">For Your Home & Office</span>
                    </h1>
                    <p className="text-xl text-white mb-10 max-w-2xl mx-auto opacity-0 animate-description">
                        Experience the highest quality cleaning services tailored to your needs.
                        We make your space shine so you can focus on what matters most.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-buttons">
                        <a
                            href="#contact"
                            className="bg-[#2CA2B0] text-white font-medium px-8 py-4 rounded-lg shadow-lg hover:bg-[#218393] hover:shadow-xl transition-all duration-300 hover-float relative overflow-hidden"
                        >
                            <span className="relative z-10">Get a Free Quote</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2CA2B0] to-[#218393] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a
                            href="#services"
                            className="bg-transparent text-white border-2 border-white font-medium px-8 py-4 rounded-lg hover:bg-white hover:text-[#2CA2B0] transform hover-float transition-all duration-300"
                        >
                            Our Services
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Add floating cleaning elements for decoration */}
            <div className="absolute bottom-24 left-10 w-12 h-12 opacity-30 animate-float-slow-1">
                <div className="relative w-full h-full">
                    <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20,11H4c-1.1,0-2,0.9-2,2s0.9,2,2,2h16c1.1,0,2-0.9,2-2S21.1,11,20,11z M20,9c1.1,0,2-0.9,2-2s-0.9-2-2-2h-3V3h-2v2h-3V3h-2v2H7V3H5v2H3C1.9,5,1,5.9,1,7s0.9,2,2,2H20z M3,15h2v2h3v2h2v-2h3v2h2v-2h3v2h2v-2h1c1.1,0,2,0.9,2,2v1c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2v-1C1,15.9,1.9,15,3,15z"/>
                    </svg>
                </div>
            </div>
            <div className="absolute bottom-32 right-16 w-10 h-10 opacity-20 animate-float-slow-2">
                <div className="relative w-full h-full">
                    <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16,4h-1V2h-2v2h-2V2H9v2H8C6.9,4,6,4.9,6,6v12c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V6C18,4.9,17.1,4,16,4z M16,18H8V6h8V18z M10,9v2H8V9H10z M8,14h2v2H8V14z M12,9h2v2h-2V9z M14,14h-2v2h2V14z"/>
                    </svg>
                </div>
            </div>
            
            {/* Decorative wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path 
                        fill="#F0F9FF" 
                        fillOpacity="1" 
                        d="M0,96L48,128C96,160,192,224,288,224C384,224,480,160,576,149.3C672,139,768,181,864,202.7C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default HeroSection;