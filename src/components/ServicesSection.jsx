import React from 'react';
import officeCleaningImage from '../assets/images/office-cleaning.jpg';

const ServiceCard = ({ title, description, index, image }) => {
    return (
        <div 
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 hover:scale-[1.02] animate-fadeIn"
            style={{ animationDelay: `${index * 0.2}s` }}
        >
            <div className="bg-[#2CA2B0] h-2 w-0 group-hover:w-full transition-all duration-700"></div>
            
            {/* Add image if provided */}
            {image && (
                <div className="h-48 overflow-hidden">
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </div>
            )}
            
            <div className="p-6">
                {/* Title should match exact styling from image */}
                <h3 className="text-2xl font-bold mb-2 text-[#333333]">{title}</h3>
                <p className="text-[#6B7280] mb-8 text-base">{description}</p>
                
                {/* Button should be styled to match the image - appears to be a subtle outline button */}
                <a
                    href={`#${title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block border border-gray-300 text-[#2CA2B0] font-medium py-2 px-4 rounded transition-all duration-300 hover:border-[#2CA2B0] hover:bg-white"
                >
                    Learn more
                </a>
            </div>
        </div>
    );
};

const ServicesSection = () => {
    const services = [
        {
            title: "Residential Cleaning",
            description: "Comprehensive cleaning services for homes of all sizes, tailored to your specific needs.",
            image: officeCleaningImage // Added image for Residential Cleaning card
        },
        {
            title: "Commercial Cleaning",
            description: "Professional cleaning solutions for offices, retail spaces, and commercial properties.",
        },
        {
            title: "Deep Cleaning",
            description: "Intensive cleaning service that tackles even the most stubborn dirt and grime.",
        },
        {
            title: "Move In/Out Cleaning",
            description: "Specialized cleaning for when you're moving into a new home or leaving your current one.",
        }
    ];

    return (
        <section id="services" className="py-20 px-4 bg-[#F0F9FF]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#333333]">Our Premium Services</h2>
                    <div className="h-1 w-24 bg-[#2CA2B0] mx-auto mb-6"></div>
                    <p className="text-[#6B7280] max-w-2xl mx-auto">
                        We offer a variety of professional cleaning services tailored to meet your specific needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;