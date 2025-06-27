import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            
            {/* Gradient background container */}
            <div className="relative w-full bg-gradient-to-br from-[#F0F9FF] to-[#E0F7FA] pt-32 pb-24 px-4">
                {/* Title section */}
                <div className="container mx-auto mb-16">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#333333]">
                            Get In Touch
                        </h1>
                        <p className="text-lg text-[#555555]">
                            Have questions or ready to schedule a cleaning service? We're here to help.
                        </p>
                    </div>
                </div>
                
                {/* Contact container with proper visibility */}
                <div className="container mx-auto max-w-6xl">
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
                                                placeholder="(08) 1234 5678"
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
                                                <p className="text-[#333333]">(08) 1234 5678</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Email Address - No circular background */}
                                    <div className="rounded-xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-md">
                                        <div className="flex items-start">
                                            <FiMail className="h-8 w-8 text-[#333333] mr-4 flex-shrink-0" stroke="#333333" strokeWidth={1.5} />
                                            <div>
                                                <h3 className="text-xl font-semibold text-[#333333] mb-2">Email Address</h3>
                                                <p className="text-[#333333]">info@sparkwise-cleaning.com.au</p>
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
            </div>
            
            <Footer />
        </div>
    );
};

export default Contact;