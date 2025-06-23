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

    // Previous slide handler
    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Next slide handler
    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative h-screen">
            {/* Image Slider with overlay */}
            <div className="absolute inset-0 overflow-hidden">
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
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-800 to-cyan-600 opacity-70"></div>
                    </div>
                ))}
            </div>
            
            {/* Slider controls */}
            <div className="absolute inset-x-0 bottom-1/2 flex justify-between items-center px-4 z-20">
                <button 
                    onClick={prevSlide}
                    className="bg-white/30 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/50 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button 
                    onClick={nextSlide}
                    className="bg-white/30 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/50 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-3xl text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
                        Professional Cleaning <span className="block text-cyan-200">For Your Home & Office</span>
                    </h1>
                    <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
                        Experience the highest quality cleaning services tailored to your needs.
                        We make your space shine so you can focus on what matters most.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#contact"
                            className="bg-white text-[#2CA2B0] font-medium px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Get a Free Quote
                        </a>
                        <a
                            href="#services"
                            className="bg-transparent text-white border-2 border-white font-medium px-8 py-4 rounded-lg hover:bg-white hover:text-[#2CA2B0] transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Our Services
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Decorative wave at bottom */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path 
                        fill="#ffffff" 
                        fillOpacity="1" 
                        d="M0,96L48,128C96,160,192,224,288,224C384,224,480,160,576,149.3C672,139,768,181,864,202.7C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default HeroSection;