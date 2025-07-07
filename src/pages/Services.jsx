import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

const servicesData = [
    {
        id: 1,
        iconPath: '/src/assets/images/service-icons/residential.svg',
        title: 'Residential Cleaning',
        description: 'Thorough cleaning services for your home, ensuring a spotless environment for you and your family.',
        link: '/residential-cleaning'
    },
    {
        id: 2,
        iconPath: '/src/assets/images/service-icons/commercial.svg',
        title: 'Commercial Cleaning',
        description: 'Professional cleaning solutions for offices and commercial spaces, tailored to your business needs.',
        link: '/office-cleaning'
    },
    {
        id: 3,
        iconPath: '/src/assets/images/service-icons/specialized.svg',
        title: 'Specialized Cleaning',
        description: 'Custom cleaning services for unique situations, including post-construction and deep cleaning.',
        link: '/carpet-cleaning' // Assuming specialized cleaning links to carpet for now, adjust as needed
    }
];

const Services = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {servicesData.map(service => (
                    <Link to={service.link} key={service.id} className="block">
                        <ServiceCard iconPath={service.iconPath} title={service.title} description={service.description} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Services;
