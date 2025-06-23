import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
    {
        icon: '/assets/images/service-icons/residential.svg',
        title: 'Residential Cleaning',
        description: 'We provide thorough residential cleaning services to keep your home sparkling clean.'
    },
    {
        icon: '/assets/images/service-icons/commercial.svg',
        title: 'Commercial Cleaning',
        description: 'Our commercial cleaning services ensure a clean and professional environment for your business.'
    },
    {
        icon: '/assets/images/service-icons/specialized.svg',
        title: 'Specialized Cleaning',
        description: 'We offer specialized cleaning services tailored to your unique needs.'
    }
];

const ServicesSection = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-300">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-8">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard 
                            key={index} 
                            icon={service.icon} 
                            title={service.title} 
                            description={service.description} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;