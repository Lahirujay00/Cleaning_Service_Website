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
            {/* Background with overlay */}
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
                    </div>
                ))}
                <div className="absolute inset-0 bg-[#0A3D62] opacity-90"></div>
            </div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-3xl text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
                        Professional Cleaning <span className="block text-[#2CA2B0]">For Your Home & Office</span>
                    </h1>
                    <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
                        Experience the highest quality cleaning services tailored to your needs.
                        We make your space shine so you can focus on what matters most.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#contact"
                            className="bg-[#2CA2B0] text-white font-medium px-8 py-4 rounded-lg shadow-lg hover:bg-[#218393] hover:shadow-xl transition-all duration-300"
                        >
                            Get a Free Quote
                        </a>
                        <a
                            href="#services"
                            className="bg-transparent text-white border-2 border-white font-medium px-8 py-4 rounded-lg hover:bg-white hover:text-[#0A3D62] transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Our Services
                        </a>
                    </div>
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