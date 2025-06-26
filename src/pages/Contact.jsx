import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            
            {/* Simple hero section */}
            <div className="bg-[#0A3D62] pt-32 pb-16 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl text-white/90">
                            We're here to help with all your cleaning needs
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Contact section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Form section */}
                            <div className="p-8 md:p-12">
                                <h2 className="text-2xl font-bold mb-6 text-[#0A3D62]">Send Us a Message</h2>
                                
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2CA2B0] focus:border-[#2CA2B0]"
                                                placeholder="John Smith"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2CA2B0] focus:border-[#2CA2B0]"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2CA2B0] focus:border-[#2CA2B0]"
                                            placeholder="(08) 1234 5678"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Service Required</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2CA2B0] focus:border-[#2CA2B0] appearance-none bg-white">
                                            <option value="">Select a service</option>
                                            <option value="residential">Residential Cleaning</option>
                                            <option value="commercial">Commercial Cleaning</option>
                                            <option value="carpet">Carpet Cleaning</option>
                                            <option value="window">Window Cleaning</option>
                                            <option value="gutter">Gutter Cleaning</option>
                                            <option value="pressure">High-Pressure Washing</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                                        <textarea
                                            rows="4"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2CA2B0] focus:border-[#2CA2B0]"
                                            placeholder="Tell us about your requirements..."
                                        ></textarea>
                                    </div>
                                    
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full bg-[#2CA2B0] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#0A3D62] transition-colors duration-300"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                            
                            {/* Contact information */}
                            <div className="bg-[#0A3D62] p-8 md:p-12 text-white">
                                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                                
                                <div className="space-y-8">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-[#2CA2B0] p-3 rounded-full mr-4">
                                            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">Our Location</h3>
                                            <p className="text-white/80">123 Cleaning Way, Perth WA 6000, Australia</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-[#2CA2B0] p-3 rounded-full mr-4">
                                            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                                            <p className="text-white/80">(08) 1234 5678</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-[#2CA2B0] p-3 rounded-full mr-4">
                                            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                                            <p className="text-white/80">info@sparkwise-cleaning.com.au</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-[#2CA2B0] p-3 rounded-full mr-4">
                                            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">Business Hours</h3>
                                            <p className="text-white/80">Monday - Friday: 8:00 AM - 6:00 PM</p>
                                            <p className="text-white/80">Saturday: 9:00 AM - 4:00 PM</p>
                                            <p className="text-white/80">Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Social media links */}
                                <div className="mt-12 pt-6 border-t border-white/20">
                                    <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                                    <div className="flex space-x-4">
                                        <a 
                                            href="https://facebook.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-[#2CA2B0] p-3 rounded-full hover:bg-white/20 transition-colors"
                                        >
                                            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                                            </svg>
                                        </a>
                                        <a 
                                            href="https://instagram.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-[#2CA2B0] p-3 rounded-full hover:bg-white/20 transition-colors"
                                        >
                                            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default Contact;