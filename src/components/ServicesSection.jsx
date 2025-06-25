import React from 'react';

const ServiceCard = ({ icon, title, description, index }) => {
    return (
        <div 
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={100 * index}
        >
            <div className="bg-[#2CA2B0] h-2 w-full group-hover:bg-[#218393] transition-colors duration-300"></div>
            <div className="p-6">
                <div className="bg-[#F0F9FF] rounded-full p-3 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#F0F9FF] transition-colors duration-300">
                    <div className="text-[#0A3D62]">{icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#333333]">{title}</h3>
                <p className="text-[#6B7280] mb-6">{description}</p>
                <button
                    className="inline-flex items-center text-[#2CA2B0] hover:text-[#218393] font-medium focus:outline-none"
                    onClick={() => window.location.href = `#${title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                    Learn more
                    <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

const ServicesSection = () => {
    const services = [
        {
            title: "Residential Cleaning",
            description: "Comprehensive cleaning services for homes of all sizes, tailored to your specific needs.",
            icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
        },
        {
            title: "Commercial Cleaning",
            description: "Professional cleaning solutions for offices, retail spaces, and commercial properties.",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
        },
        {
            title: "Deep Cleaning",
            description: "Intensive cleaning service that tackles even the most stubborn dirt and grime.",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
        },
        {
            title: "Move In/Out Cleaning",
            description: "Specialized cleaning for when you're moving into a new home or leaving your current one.",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
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