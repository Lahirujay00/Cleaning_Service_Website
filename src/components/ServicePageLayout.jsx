import React from 'react';
import Header from './Header';
import ContactSection from './ContactSection';

const ServicePageLayout = ({ service }) => {
    const { title, description, image, content, features } = service;
    
    return (
        <div className="bg-[#F0F9FF] min-h-screen flex flex-col">
            <Header />
            
            {/* Hero section */}
            <section className="relative pt-20 pb-10">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[#0A3D62]/80"></div>
                    {image && (
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    )}
                </div>
                
                <div className="container mx-auto px-4 pt-16 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-shadow-lg">{title}</h1>
                        <div className="h-1 w-32 bg-[#2CA2B0] mx-auto mb-6"></div>
                        <p className="text-xl text-white/90 text-shadow">{description}</p>
                    </div>
                </div>
            </section>
            
            {/* Content section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                            <h2 className="text-3xl font-bold mb-6 text-[#0A3D62]">About Our {title} Service</h2>
                            
                            <div className="prose prose-lg max-w-none">
                                {content}
                            </div>
                        </div>
                        
                        {/* Features */}
                        {features && features.length > 0 && (
                            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                                <h2 className="text-3xl font-bold mb-6 text-[#0A3D62]">Service Features</h2>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="flex-shrink-0 bg-[#F0F9FF] p-3 rounded-full mr-4">
                                                <svg className="w-6 h-6 text-[#2CA2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-[#333333] mb-2">{feature.title}</h3>
                                                <p className="text-[#6B7280]">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {/* CTA */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-6 text-[#333333]">Ready to Get Started?</h2>
                            <a 
                                href="#contact" 
                                className="btn-primary inline-block"
                            >
                                Get a Free Quote
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
            <ContactSection />
        </div>
    );
};

export default ServicePageLayout;
