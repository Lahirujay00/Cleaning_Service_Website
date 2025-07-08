import React from 'react';
import Header from '../components/Header';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            
            {/* Modern Hero Section with Shapes */}
            <div className="relative w-full bg-gradient-to-br from-[#FFFFFF] to-[#E0F7FA] pt-32 pb-32 overflow-hidden">
                {/* Floating shapes for modern look */}
                <div className="absolute top-1/3 left-[5%] w-64 h-64 rounded-full bg-[#2CA2B0]/10 animate-pulse"></div>
                <div className="absolute top-1/4 right-[15%] w-32 h-32 rounded-full bg-[#0A3D62]/5"></div>
                <div className="absolute bottom-1/4 right-[5%] w-40 h-40 rounded-full bg-[#2CA2B0]/5"></div>
                <div className="absolute -bottom-10 left-[15%] w-52 h-52 rounded-full bg-[#0A3D62]/10"></div>
                
                {/* Content */}
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0A3D62] leading-tight">
                            Let's Start a <span className="text-[#2CA2B0]">Conversation</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[#555555] mb-8 max-w-2xl mx-auto">
                            Our friendly team would love to hear from you and help with any questions about our cleaning services.
                        </p>
                        
                        {/* Quick contact links */}
                        <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
                            <a href="tel:0413636785" className="flex items-center justify-center gap-2 py-3 px-6 bg-white rounded-full shadow-md hover:shadow-lg transition-all">
                                <FiPhone className="text-[#2CA2B0]" />
                                <span className="text-[#333333] font-medium">0413 636 785</span>
                            </a>
                            <a href="mailto:sparkwisecleaning@gmail.com" className="flex items-center justify-center gap-2 py-3 px-6 bg-white rounded-full shadow-md hover:shadow-lg transition-all">
                                <FiMail className="text-[#2CA2B0]" />
                                <span className="text-[#333333] font-medium">sparkwisecleaning@gmail.com</span>
                            </a>
                            <a 
                                href="https://www.facebook.com/SparkWise8?mibextid=ZbWKwL" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center justify-center gap-2 py-3 px-6 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                            >
                                <svg className="w-5 h-5 text-[#2CA2B0]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                                <span className="text-[#333333] font-medium">Facebook</span>
                            </a>
                        </div>
                        
                        {/* Scroll down indicator */}
                        <div className="hidden md:block animate-bounce mt-12">
                            <svg className="w-6 h-6 mx-auto text-[#2CA2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Contact container with proper visibility */}
            <div className="container mx-auto max-w-6xl px-4 -mt-16 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left column: Contact form with fixed icon alignment */}
                        <div className="p-8 md:p-12 bg-white">
                            <div className="flex items-center mb-8">
                                <FiMessageSquare className="w-6 h-6 text-[#333333] mr-3" />
                                <h2 className="text-3xl font-bold text-[#333333]">Send a Message</h2>
                            </div>
                            
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-[#333333] font-medium">Your Name</label>
                                        <div className="relative flex items-center">
                                            <FiUser className="absolute left-3 text-[#555555] w-5 h-5" />
                                            <input
                                                type="text"
                                                className="w-full bg-gray-50 text-[#333333] placeholder-[#999999] border border-gray-200 rounded-lg py-3 px-10 focus:ring-2 focus:ring-[#2CA2B0] transition-all duration-300"
                                                placeholder="John Smith"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="block text-[#333333] font-medium">Email Address</label>
                                        <div className="relative flex items-center">
                                            <FiMail className="absolute left-3 text-[#555555] w-5 h-5" />
                                            <input
                                                type="email"
                                                className="w-full bg-gray-50 text-[#333333] placeholder-[#999999] border border-gray-200 rounded-lg py-3 px-10 focus:ring-2 focus:ring-[#2CA2B0] transition-all duration-300"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="block text-[#333333] font-medium">Phone Number</label>
                                    <div className="relative flex items-center">
                                        <FiPhone className="absolute left-3 text-[#555555] w-5 h-5" />
                                        <input
                                            type="tel"
                                            className="w-full bg-gray-50 text-[#333333] placeholder-[#999999] border border-gray-200 rounded-lg py-3 px-10 focus:ring-2 focus:ring-[#2CA2B0] transition-all duration-300"
                                            placeholder="0413 636 785"
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="block text-[#333333] font-medium">Service Required</label>
                                    <select className="w-full bg-gray-50 text-[#333333] border border-gray-200 rounded-lg py-3 px-4 focus:ring-2 focus:ring-[#2CA2B0] transition-all duration-300 appearance-none">
                                        <option value="">Select a service</option>
                                        <option value="residential">Residential Cleaning</option>
                                        <option value="commercial">Commercial Cleaning</option>
                                        <option value="carpet">Carpet Cleaning</option>
                                        <option value="window">Window Cleaning</option>
                                        <option value="gutter">Gutter Cleaning</option>
                                        <option value="pressure">High-Pressure Washing</option>
                                    </select>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="block text-[#333333] font-medium">Your Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-gray-50 text-[#333333] placeholder-[#999999] border border-gray-200 rounded-lg py-3 px-4 focus:ring-2 focus:ring-[#2CA2B0] transition-all duration-300"
                                        placeholder="Tell us about your cleaning needs..."
                                    ></textarea>
                                </div>
                                
                                <button
                                    type="submit"
                                    className="bg-[#2CA2B0] text-white font-medium py-3 px-8 rounded-lg hover:bg-[#0A3D62] transition-all duration-300 flex items-center justify-center"
                                >
                                    <span>Send Message</span>
                                    <FiSend className="ml-2" />
                                </button>
                            </form>
                        </div>
                        
                        {/* Right column: Contact information */}
                        <div className="bg-white p-8 md:p-12 border-l border-gray-100">
                            <div className="flex items-center mb-8">
                                <h2 className="text-3xl font-bold text-[#333333]">Contact Info</h2>
                            </div>
                            
                            <div className="space-y-8">
                                {/* Our Location - No circular background */}
                                <div className="rounded-xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-md">
                                    <div className="flex items-start">
                                        <FiMapPin className="h-8 w-8 text-[#333333] mr-4 flex-shrink-0" stroke="#333333" strokeWidth={1.5} />
                                        <div>
                                            <h3 className="text-xl font-semibold text-[#333333] mb-2">Our Location</h3>
                                            <p className="text-[#333333]">123 Cleaning Way, Perth WA 6000, Australia</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Phone Number - No circular background */}
                                <div className="rounded-xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-md">
                                    <div className="flex items-start">
                                        <FiPhone className="h-8 w-8 text-[#333333] mr-4 flex-shrink-0" stroke="#333333" strokeWidth={1.5} />
                                        <div>
                                            <h3 className="text-xl font-semibold text-[#333333] mb-2">Phone Number</h3>
                                            <p className="text-[#333333]">0413 636 785</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Email Address - No circular background */}
                                <div className="rounded-xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-md">
                                    <div className="flex items-start">
                                        <FiMail className="h-8 w-8 text-[#333333] mr-4 flex-shrink-0" stroke="#333333" strokeWidth={1.5} />
                                        <div>
                                            <h3 className="text-xl font-semibold text-[#333333] mb-2">Email Address</h3>
                                            <p className="text-[#333333]">sparkwisecleaning@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Business Hours - No circular background */}
                                <div className="rounded-xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-md">
                                    <div className="flex items-start">
                                        <FiClock className="h-8 w-8 text-[#333333] mr-4 flex-shrink-0" stroke="#333333" strokeWidth={1.5} />
                                        <div>
                                            <h3 className="text-xl font-semibold text-[#333333] mb-2">Business Hours</h3>
                                            <p className="text-[#333333]">Monday - Friday: 8:00 AM - 6:00 PM</p>
                                            <p className="text-[#333333]">Saturday: 9:00 AM - 4:00 PM</p>
                                            <p className="text-[#333333]">Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Map section */}
            <div className="container mx-auto max-w-6xl px-4 py-16">
                <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.5485024391497!2d115.8604796!3d-31.9529234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bad2c6e49b9b%3A0x91e592516f6e652!2sPerth%20WA%206000%2C%20Australia!5e0!3m2!1sen!2sus!4v1652252649345!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy"
                        title="Our Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
