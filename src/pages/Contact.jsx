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
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0A3D62] drop-shadow-md">
                            Get In Touch
                        </h1>
                        <p className="text-lg text-[#0A3D62]/80">
                            Have questions or ready to schedule a cleaning service? We're here to help.
                        </p>
                    </div>
                </div>
                
                {/* Frosted glass container */}
                <div className="container mx-auto max-w-6xl">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Left column: Contact form */}
                            <div className="p-8 md:p-12">
                                <div className="flex items-center mb-8">
                                    <FiMessageSquare className="w-6 h-6 text-white mr-3 animate-pulse" />
                                    <h2 className="text-3xl font-bold text-white drop-shadow-lg">Send a Message</h2>
                                </div>
                                
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-white font-medium">Your Name</label>
                                            <div className="relative">
                                                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
                                                <input
                                                    type="text"
                                                    className="w-full bg-white/20 text-white placeholder-white/70 border-0 rounded-lg py-3 px-10 focus:ring-2 focus:ring-[#2CA2B0] transition-all duration-300"
                                                    placeholder="John Smith"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <label className="text-white font-medium">Email Address</label>
                                            <div className="relative">
                                                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
                                                <input
                                                    type="email"
                                                    className="w-full bg-white/20 text-white placeholder-white/70 border-0 rounded-lg py-3 px-10 focus:ring-2 focus:ring-[#2CA2B0] transition-all duration-300"
                                                    placeholder="you@example.com"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="text-white font-medium">Phone Number</label>
                                        <div className="relative">
                                            <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
                                            <input
                                                type="tel"
                                                className="w-full bg-white/20 text-white placeholder-white/70 border-0 rounded-lg py-3 px-10 focus:ring-2 focus:ring-[#2CA2B0] transition-all duration-300"
                                                placeholder="(08) 1234 5678"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="text-white font-medium">Service Required</label>
                                        <select className="w-full bg-white/20 text-white border-0 rounded-lg py-3 px-4 focus:ring-2 focus:ring-[#2CA2B0] transition-all duration-300 appearance-none">
                                            <option value="" className="bg-[#0A3D62] text-white">Select a service</option>
                                            <option value="residential" className="bg-[#0A3D62] text-white">Residential Cleaning</option>
                                            <option value="commercial" className="bg-[#0A3D62] text-white">Commercial Cleaning</option>
                                            <option value="carpet" className="bg-[#0A3D62] text-white">Carpet Cleaning</option>
                                            <option value="window" className="bg-[#0A3D62] text-white">Window Cleaning</option>
                                            <option value="gutter" className="bg-[#0A3D62] text-white">Gutter Cleaning</option>
                                            <option value="pressure" className="bg-[#0A3D62] text-white">High-Pressure Washing</option>
                                        </select>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="text-white font-medium">Your Message</label>
                                        <textarea
                                            rows="4"
                                            className="w-full bg-white/20 text-white placeholder-white/70 border-0 rounded-lg py-3 px-4 focus:ring-2 focus:ring-[#2CA2B0] transition-all duration-300"
                                            placeholder="Tell us about your cleaning needs..."
                                        ></textarea>
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        className="bg-[#2CA2B0] text-white font-medium py-3 px-8 rounded-lg hover:bg-[#0A3D62] transition-all duration-300 hover:scale-105 transform flex items-center justify-center group"
                                    >
                                        <span>Send Message</span>
                                        <FiSend className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </form>
                            </div>
                            
                            {/* Right column: Contact information */}
                            <div className="bg-gradient-to-br from-[#0A3D62] to-[#2CA2B0] p-8 md:p-12">
                                <div className="flex items-center mb-8">
                                    <FiPhone className="w-6 h-6 text-white mr-3 animate-pulse" />
                                    <h2 className="text-3xl font-bold text-white drop-shadow-lg">Contact Info</h2>
                                </div>
                                
                                <div className="space-y-8">
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 transform cursor-pointer">
                                        <div className="flex items-start">
                                            <div className="p-3 bg-white/20 rounded-full mr-4">
                                                <FiMapPin className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
                                                <p className="text-white/80">123 Cleaning Way, Perth WA 6000, Australia</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 transform cursor-pointer">
                                        <div className="flex items-start">
                                            <div className="p-3 bg-white/20 rounded-full mr-4">
                                                <FiPhone className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-white mb-2">Phone Number</h3>
                                                <p className="text-white/80">(08) 1234 5678</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 transform cursor-pointer">
                                        <div className="flex items-start">
                                            <div className="p-3 bg-white/20 rounded-full mr-4">
                                                <FiMail className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-white mb-2">Email Address</h3>
                                                <p className="text-white/80">info@sparkwise-cleaning.com.au</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 transform cursor-pointer">
                                        <div className="flex items-start">
                                            <div className="p-3 bg-white/20 rounded-full mr-4">
                                                <FiClock className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                                                <p className="text-white/80">Monday - Friday: 8:00 AM - 6:00 PM</p>
                                                <p className="text-white/80">Saturday: 9:00 AM - 4:00 PM</p>
                                                <p className="text-white/80">Sunday: Closed</p>
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