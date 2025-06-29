import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-[#0A3D62] text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">SparkWise Cleaning</h3>
                        <p className="mb-4">Professional cleaning services for homes and businesses across Perth.</p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="hover:text-[#2CA2B0] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                                </svg>
                            </a>
                            <a href="https://instagram.com" className="hover:text-[#2CA2B0] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-[#2CA2B0] transition-colors">Home</Link></li>
                            <li><a href="/#services" className="hover:text-[#2CA2B0] transition-colors">Services</a></li>
                            <li><a href="/#about" className="hover:text-[#2CA2B0] transition-colors">About Us</a></li>
                            <li><Link to="/contact" className="hover:text-[#2CA2B0] transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    
                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li><Link to="/residential-cleaning" className="hover:text-[#2CA2B0] transition-colors">Residential Cleaning</Link></li>
                            <li><Link to="/office-cleaning" className="hover:text-[#2CA2B0] transition-colors">Office Cleaning</Link></li>
                            <li><Link to="/carpet-cleaning" className="hover:text-[#2CA2B0] transition-colors">Carpet Cleaning</Link></li>
                            <li><Link to="/window-cleaning" className="hover:text-[#2CA2B0] transition-colors">Window Cleaning</Link></li>
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                        <div className="space-y-3">
                            <p className="flex items-start">
                                <svg className="w-5 h-5 mr-2 mt-1 text-[#2CA2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                Perth, WA
                            </p>
                            <p className="flex items-start">
                                <svg className="w-5 h-5 mr-2 mt-1 text-[#2CA2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                (08) 1234 5678
                            </p>
                            <p className="flex items-start">
                                <svg className="w-5 h-5 mr-2 mt-1 text-[#2CA2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                info@sparkwise-cleaning.com.au
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-white/10 mt-10 pt-6 text-center">
                    <p>&copy; {currentYear} SparkWise Cleaning. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;