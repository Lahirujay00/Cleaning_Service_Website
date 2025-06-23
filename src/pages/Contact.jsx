import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
            <p className="text-center mb-8">We'd love to hear from you! Please fill out the form below.</p>
            <ContactForm />
        </div>
    );
};

export default Contact;