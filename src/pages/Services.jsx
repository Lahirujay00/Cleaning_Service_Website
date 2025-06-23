import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { ReactComponent as ResidentialIcon } from '../assets/images/service-icons/residential.svg';
import { ReactComponent as CommercialIcon } from '../assets/images/service-icons/commercial.svg';
import { ReactComponent as SpecializedIcon } from '../assets/images/service-icons/specialized.svg';

const servicesData = [
    {
        id: 1,
        icon: <ResidentialIcon className="w-16 h-16 mb-4" />,
        title: 'Residential Cleaning',
        description: 'Thorough cleaning services for your home, ensuring a spotless environment for you and your family.'
    },
    {
        id: 2,
        icon: <CommercialIcon className="w-16 h-16 mb-4" />,
        title: 'Commercial Cleaning',
        description: 'Professional cleaning solutions for offices and commercial spaces, tailored to your business needs.'
    },
    {
        id: 3,
        icon: <SpecializedIcon className="w-16 h-16 mb-4" />,
        title: 'Specialized Cleaning',
        description: 'Custom cleaning services for unique situations, including post-construction and deep cleaning.'
    }
];

const Services = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {servicesData.map(service => (
                    <ServiceCard key={service.id} icon={service.icon} title={service.title} description={service.description} />
                ))}
            </div>
        </div>
    );
};

export default Services;