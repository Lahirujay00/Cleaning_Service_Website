import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-500 to-blue-300 text-white py-6">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <h5 className="text-lg font-bold">Cleaning Service</h5>
                    <p>Providing top-notch cleaning services for your home and office.</p>
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="/" className="hover:underline">Home</a>
                    <a href="/about" className="hover:underline">About</a>
                    <a href="/services" className="hover:underline">Services</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                </div>
                <div className="text-sm">
                    <p>&copy; {new Date().getFullYear()} Cleaning Service. All rights reserved.</p>
                    <p>Contact us: info@cleaningservice.com | (123) 456-7890</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;