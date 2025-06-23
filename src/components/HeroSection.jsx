import React from 'react';
import heroBg from '../assets/images/herobg.JPG'; // Changed back to uppercase extension to match the actual file

const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-lg overflow-hidden">
            <img src={heroBg} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white p-4">
                <h1 className="text-5xl font-bold mb-4">Your Clean Home Awaits</h1>
                <p className="text-lg mb-6">Experience the best cleaning services tailored to your needs.</p>
                <a href="#contact" className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                    Get a Free Quote
                </a>
            </div>
        </div>
    );
};

export default HeroSection;