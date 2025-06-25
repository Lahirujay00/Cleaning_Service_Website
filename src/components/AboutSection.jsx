import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333333]">
                            Professional Cleaning Service You Can Trust
                        </h2>
                        <div className="h-1 w-24 bg-[#2CA2B0] mb-8"></div>
                        <p className="text-lg text-[#6B7280] mb-6">
                            With over 10 years of experience, our team of trained professionals delivers 
                            exceptional cleaning services for homes and businesses. We use eco-friendly 
                            products that are safe for your family, pets, and the environment.
                        </p>
                        <p className="text-lg text-[#6B7280] mb-8">
                            Our attention to detail and commitment to quality have earned us the 
                            trust of thousands of satisfied customers throughout the area.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center">
                                <div className="bg-[#F0F9FF] p-3 rounded-full mr-4">
                                    <svg className="w-8 h-8 text-[#2CA2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <span className="font-medium text-[#333333]">Trained Professionals</span>
                            </div>
                            <div className="flex items-center">
                                <div className="bg-[#F0F9FF] p-3 rounded-full mr-4">
                                    <svg className="w-8 h-8 text-[#2CA2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <span className="font-medium text-[#333333]">Eco-Friendly Products</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 relative">
                        <div className="bg-[#2CA2B0] rounded-tl-[100px] rounded-br-[100px] h-80 w-80 absolute -z-10 -bottom-10 -right-10"></div>
                        <div className="bg-[#F0F9FF] rounded-tr-[80px] rounded-bl-[80px] p-6">
                            <img 
                                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                                alt="Cleaning Team" 
                                className="rounded-tr-[70px] rounded-bl-[70px] shadow-lg h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
