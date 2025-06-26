import React from 'react';
import officeCleaningImage from '../assets/images/office-cleaning.jpg';
import office from '../assets/images/office.jpg'; // Assuming you have an image for Office Cleaning
import carpetCleaningImage from '../assets/images/CarpetCleaning.jpg'; // Assuming you have an image for Carpet Cleaning
import gutterCleaningImage from '../assets/images/gutter-cleaning.jpg'; // Assuming you have an image for Gutter Cleaning
import HighPressureWashingImage from '../assets/images/high.jpg'; // Assuming you have an image for High Pressure Washing
import windowCleanImage from '../assets/images/window-cleaning.jpg'; // Assuming you have an image for Window Cleaning

const ServiceCard = ({ title, description, index, image }) => {
    return (
        <div 
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 hover:scale-[1.02]"
            data-aos="fade-up" 
            data-aos-delay={index * 150}
            data-aos-duration="800"
            data-aos-offset="200"
        >
            {/* Fix: Moved the accent line inside the image container when image exists */}
            {image ? (
                <div className="relative">
                    {/* Top accent line now positioned absolutely to eliminate white space */}
                    <div className="absolute top-0 left-0 right-0 z-10 bg-[#2CA2B0] h-2 w-0 group-hover:w-full transition-all duration-700"></div>
                    
                    <div className="h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
                        <img 
                            src={image} 
                            alt={title} 
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                        />
                    </div>
                </div>
            ) : (
                // Keep the original accent line for cards without images
                <div className="bg-[#2CA2B0] h-2 w-0 group-hover:w-full transition-all duration-700"></div>
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
                
                {/* Improved button with modern design */}
                <a
                    href={`#${title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center py-2.5 px-6 bg-[#F0F9FF] text-[#2CA2B0] font-medium rounded-lg border border-[#E5E7EB] hover:bg-[#2CA2B0] hover:text-white transition-all duration-300 shadow-sm hover:shadow group/btn"
                >
                    <span className="mr-2">Learn more</span>
                    <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
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
            title: "Office Cleaning",
            description: "Professional cleaning solutions for offices, retail spaces, and commercial properties.",
            image: office // Added image for Office Cleaning card
        },
        {
            title: "Carpet Cleaning",
            description: "Intensive cleaning service that tackles even the most stubborn dirt and grime.",
            image: carpetCleaningImage // Added image for Carpet Cleaning card
        },
        {
            title: "Gutter Cleaning",
            description: "Specialized cleaning for when you're moving into a new home or leaving your current one.",
            image: gutterCleaningImage // Assuming you have an image for Gutter Cleaning
        },
        {
            title: "High-Pressure Washing",
            description: "Thorough cleaning after construction or renovation projects to make your space spotless.",
            image: HighPressureWashingImage // Placeholder for Post-Construction Cleaning card
        },
        {
            title: "Window Cleaning",
            description: "Deep cleaning services to remove dust, debris, and residues after construction or renovation.",
            image: windowCleanImage // Placeholder for Post-Construction Cleaning card
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