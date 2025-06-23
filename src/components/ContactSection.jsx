import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-300">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-white text-center mb-8">Get in Touch</h2>
                <p className="text-lg text-white text-center mb-12">We'd love to hear from you! Fill out the form below to get started.</p>
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactSection;