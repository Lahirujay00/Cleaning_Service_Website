import React from 'react';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#F0F9FF]">
            <Header />
            <div className="flex-grow pt-20">
                <div className="py-20 px-4 bg-white">
                    <div className="max-w-7xl mx-auto text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#333333]">Contact Us</h1>
                        <div className="h-1 w-24 bg-[#2CA2B0] mx-auto mb-6"></div>
                        <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                            We'd love to hear from you! Reach out for a quote or to learn more about our cleaning services.
                        </p>
                    </div>
                    <ContactSection />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;