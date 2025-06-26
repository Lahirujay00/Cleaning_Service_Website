import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333333] relative" data-aos="fade-right" data-aos-duration="800">
                            Why Choose SparkWise Cleaning Services?
                            <span className="absolute -bottom-2 left-0 h-1 w-0 bg-[#2CA2B0] transition-all duration-1000" 
                                  data-aos="width" 
                                  data-aos-delay="400"
                                  data-aos-duration="800"
                                  style={{width: '0%'}}
                                  data-aos-width="6rem"></span>
                        </h2>
                        <div className="h-1 w-24 bg-[#2CA2B0] mb-8 transform origin-left scale-x-0 transition-transform" 
                             data-aos="scale-x" 
                             data-aos-duration="800"></div>
                        
                        <p className="text-lg text-[#6B7280] mb-8">
                            Whether it's a one-off deep clean, regular upkeep, or a full end-of-lease job, 
                            SparkWise is your trusted partner for spotless results across Perth. From driveways 
                            to interiors, we bring the sparkle back—every time.
                        </p>
                        
                        {/* Modern professional feature list with animations */}
                        <div className="space-y-6 mb-8">
                            <div className="flex items-start transform opacity-0 translate-y-4 transition duration-700 ease-out" 
                                 data-aos="fade-up" 
                                 data-aos-delay="100"
                                 data-aos-duration="700">
                                <div className="flex-shrink-0 bg-[#F0F9FF] p-2.5 rounded-lg mr-4 shadow-sm hover:bg-[#2CA2B0]/10 hover:shadow transition-all duration-300">
                                    <svg className="w-5 h-5 text-[#2CA2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#333333] mb-1">Customized Solutions</h4>
                                    <p className="text-[#6B7280]">
                                        We deliver tailored cleaning services for homes, offices, and commercial spaces
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start transform opacity-0 translate-y-4 transition duration-700 ease-out" 
                                 data-aos="fade-up" 
                                 data-aos-delay="200"
                                 data-aos-duration="700">
                                <div className="flex-shrink-0 bg-[#F0F9FF] p-2.5 rounded-lg mr-4 shadow-sm hover:bg-[#2CA2B0]/10 hover:shadow transition-all duration-300">
                                    <svg className="w-5 h-5 text-[#2CA2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#333333] mb-1">Transparent Pricing</h4>
                                    <p className="text-[#6B7280]">
                                        We provide honest, upfront quotes with no hidden fees — just great value
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start transform opacity-0 translate-y-4 transition duration-700 ease-out" 
                                 data-aos="fade-up" 
                                 data-aos-delay="300"
                                 data-aos-duration="700">
                                <div className="flex-shrink-0 bg-[#F0F9FF] p-2.5 rounded-lg mr-4 shadow-sm hover:bg-[#2CA2B0]/10 hover:shadow transition-all duration-300">
                                    <svg className="w-5 h-5 text-[#2CA2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#333333] mb-1">Eco-Friendly Approach</h4>
                                    <p className="text-[#6B7280]">
                                        We use safe, environmentally responsible products for a healthier space
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start transform opacity-0 translate-y-4 transition duration-700 ease-out" 
                                 data-aos="fade-up" 
                                 data-aos-delay="400"
                                 data-aos-duration="700">
                                <div className="flex-shrink-0 bg-[#F0F9FF] p-2.5 rounded-lg mr-4 shadow-sm hover:bg-[#2CA2B0]/10 hover:shadow transition-all duration-300">
                                    <svg className="w-5 h-5 text-[#2CA2B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-medium text-[#333333] mb-1">Trusted Professionals</h4>
                                    <p className="text-[#6B7280]">
                                        We employ fully insured staff with verified security clearances
                                    </p>
                                </div>
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
