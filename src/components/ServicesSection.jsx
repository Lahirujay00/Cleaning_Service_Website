import React from 'react';
import officeCleaningImage from '../assets/images/office-cleaning.jpg';

const ServiceCard = ({ title, description, index, image }) => {
    return (
        <div 
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 hover:scale-[1.02]"
            data-aos="fade-up" 
            data-aos-delay={index * 150}
            data-aos-duration="800"
            data-aos-offset="200"
        >
            <div className="bg-[#2CA2B0] h-2 w-0 group-hover:w-full transition-all duration-700"></div>
            
            {/* Add image with enhanced hover animation */}
            {image && (
                <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                </div>
            )}
            
            <div className="p-6 relative overflow-hidden">
                {/* Animated accent line */}
                <div className="absolute -left-10 top-0 h-[1px] w-0 bg-gradient-to-r from-transparent via-[#2CA2B0] to-transparent group-hover:w-[150%] transition-all duration-1000 ease-in-out"></div>
                
                {/* Title with reveal animation */}
                <h3 className="text-2xl font-bold mb-2 text-[#333333] relative transform transition-all duration-500 group-hover:translate-x-2">
                    {title}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#2CA2B0] group-hover:w-3/4 transition-all duration-500 ease-out"></span>
                </h3>
                
                <p className="text-[#6B7280] mb-8 text-base transition-all duration-500 group-hover:text-[#4B5563] relative">
                    {description}
                </p>
                
                {/* Button with reveal animation */}
                <a
                    href={`#${title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block border border-gray-300 text-[#2CA2B0] font-medium py-2 px-6 rounded transition-all duration-300 hover:border-[#2CA2B0] hover:bg-[#2CA2B0]/5 relative overflow-hidden group-hover:pl-7"
                >
                    <span className="absolute left-0 w-0 group-hover:w-5 transition-all duration-300 overflow-hidden opacity-0 group-hover:opacity-100">
                        &rarr;
                    </span>
                    <span className="relative transition-all duration-300">Learn more</span>
                </a>
                
                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-t-0 border-r-0 border-b-[25px] border-l-0 border-b-transparent group-hover:border-b-[#2CA2B0]/10 group-hover:border-l-[25px] transition-all duration-700 ease-out"></div>
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
                {/* Add animated underline for heading */}
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#333333] relative inline-block">
                        Our Premium Services
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2CA2B0] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </h2>
                    <div className="h-[2px] w-32 mx-auto mb-6 bg-gradient-to-r from-transparent via-[#2CA2B0] to-transparent" data-aos="zoom-in" data-aos-delay="200"></div>
                    <p className="text-[#6B7280] max-w-2xl mx-auto">
                        We offer a variety of professional cleaning services tailored to meet your specific needs.
                    </p>
                </div>
                {/* Replace perspective-1000 with reveal-cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-cards">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;