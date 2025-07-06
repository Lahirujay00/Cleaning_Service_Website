import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiInstagram, FiLinkedin, FiChevronUp } from 'react-icons/fi'; // Added Instagram and LinkedIn icons

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    return (
        <footer className="bg-[#f0f8ff] text-gray-700 py-16 relative"> {/* Changed background to a very light blue to match image */}
            {/* Back to Top Button */}
            <button 
                onClick={scrollToTop} 
                className="absolute top-0 right-8 -mt-6 bg-[#0D7D8A] p-3 rounded-full shadow-lg hover:bg-[#0A6D75] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#0D7D8A] z-10"
                aria-label="Back to top"
            >
                <FiChevronUp className="w-6 h-6 text-white" />
            </button>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info & About Us */}
                    <div className="space-y-5">
                        <h3 className="text-4xl font-extrabold text-gray-800 mb-4">SparkWise</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Your trusted partner for professional cleaning services. We make your spaces shine, ensuring a healthier and happier environment.
                        </p>
                        <div className="flex space-x-5 mt-4">
                            <a 
                                href="https://www.facebook.com/SparkWise8?mibextid=ZbWKwL" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-600 hover:text-[#0D7D8A] transition-transform transform hover:scale-110 duration-300" 
                                aria-label="Facebook"
                            >
                                <FiFacebook className="w-6 h-6" />
                            </a>
                            <a 
                                href="https://www.instagram.com/sparkwise_cleaning/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-600 hover:text-[#0D7D8A] transition-transform transform hover:scale-110 duration-300"
                                aria-label="Instagram"
                            >
                                <FiInstagram className="w-6 h-6" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/company/sparkwise-cleaning/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-600 hover:text-[#0D7D8A] transition-transform transform hover:scale-110 duration-300"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="space-y-5">
                        <h4 className="text-xl font-semibold mb-4 border-b-2 border-[#0D7D8A] pb-2 inline-block text-gray-700">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-600 hover:text-[#0D7D8A] transition-colors duration-300 text-base">Home</Link></li>
                            <li><Link to="/about" className="text-gray-600 hover:text-[#0D7D8A] transition-colors duration-300 text-base">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-600 hover:text-[#0D7D8A] transition-colors duration-300 text-base">Contact</Link></li>
                        </ul>
                    </div>
                    
                    {/* Our Services */}
                    <div className="space-y-5">
                        <h4 className="text-xl font-semibold mb-4 border-b-2 border-[#0D7D8A] pb-2 inline-block text-gray-700">Our Services</h4>
                        <ul className="space-y-3">
                            <li><Link to="/residential-cleaning" className="text-gray-600 hover:text-[#0D7D8A] transition-colors duration-300 text-base">Residential Cleaning</Link></li>
                            <li><Link to="/office-cleaning" className="text-gray-600 hover:text-[#0D7D8A] transition-colors duration-300 text-base">Office Cleaning</Link></li>
                            <li><Link to="/carpet-cleaning" className="text-gray-600 hover:text-[#0D7D8A] transition-colors duration-300 text-base">Carpet Cleaning</Link></li>
                            <li><Link to="/window-cleaning" className="text-gray-600 hover:text-[#0D7D8A] transition-colors duration-300 text-base">Window Cleaning</Link></li>
                            <li><Link to="/gutter-cleaning" className="text-gray-600 hover:text-[#0D7D8A] transition-colors duration-300 text-base">Gutter Cleaning</Link></li>
                            <li><Link to="/high-pressure-washing" className="text-gray-600 hover:text-[#0D7D8A] transition-colors duration-300 text-base">High Pressure Washing</Link></li>
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="space-y-5">
                        <h4 className="text-xl font-semibold mb-4 border-b-2 border-[#0D7D8A] pb-2 inline-block text-gray-700">Get in Touch</h4>
                        <address className="space-y-4 not-italic">
                            <p className="flex items-start text-gray-600 text-base">
                                <FiMapPin className="w-5 h-5 mr-3 flex-shrink-0 text-[#0D7D8A]" />
                                123 Cleaning Way, Perth WA 6000, Australia
                            </p>
                            <a href="tel:0413636785" className="flex items-start text-gray-600 hover:text-[#0D7D8A] transition-colors duration-300 text-base">
                                <FiPhone className="w-5 h-5 mr-3 flex-shrink-0 text-[#0D7D8A]" />
                                0413 636 785
                            </a>
                            <a href="mailto:sparkwisecleaning@gmail.com" className="flex items-start text-gray-600 hover:text-[#0D7D8A] transition-colors duration-300 text-base">
                                <FiMail className="w-5 h-5 mr-3 flex-shrink-0 text-[#0D7D8A]" />
                                sparkwisecleaning@gmail.com
                            </a>
                        </address>
                    </div>
                </div>
                
                {/* Copyright */}
                <div className="border-t border-gray-200 mt-16 pt-8 text-center">
                    <p className="text-gray-500 text-sm">&copy; {currentYear} SparkWise Cleaning. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
