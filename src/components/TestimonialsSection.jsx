import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
    {
        name: "John Doe",
        review: "Clearview Cleaning provided exceptional service! My home has never looked better.",
        rating: 5
    },
    {
        name: "Jane Smith",
        review: "Professional and thorough. Highly recommend their commercial cleaning services.",
        rating: 4
    },
    {
        name: "Emily Johnson",
        review: "Fantastic experience! The team was friendly and did a great job.",
        rating: 5
    }
];

const TestimonialsSection = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-300">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-8">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard 
                            key={index} 
                            name={testimonial.name} 
                            review={testimonial.review} 
                            rating={testimonial.rating} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;