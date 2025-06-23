import React from 'react';
import aboutImage from '../assets/images/about-image.jpg';

const About = () => {
    return (
        <div className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                    <p className="text-lg mb-4">
                        We are a professional cleaning service dedicated to providing top-notch cleaning solutions for residential and commercial spaces. Our team of experienced cleaners uses eco-friendly products to ensure a safe and healthy environment for you and your loved ones.
                    </p>
                    <p className="text-lg">
                        With years of experience in the industry, we pride ourselves on our attention to detail and commitment to customer satisfaction. Let us take care of the cleaning, so you can focus on what matters most to you.
                    </p>
                </div>
                <div>
                    <img src={aboutImage} alt="About Us" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default About;