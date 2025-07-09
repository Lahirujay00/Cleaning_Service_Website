import React from 'react';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#333333]">Our Service Area</h2>
          <div className="h-1 w-24 bg-[#2CA2B0] mx-auto mb-6"></div>
          <p className="text-[#6B7280] max-w-2xl mx-auto flex items-center justify-center gap-2">
            <span className="text-xl"></span> Proudly Serving Perth and surrounding suburbs with prompt, professional cleaning you can count on.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Service area information */}
          <div 
            className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue">Areas We Serve</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-lightgreen p-2 rounded-lg mr-3 shadow-sm">
                  <svg className="w-5 h-5 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[#6B7280] leading-relaxed">
                    We provide professional cleaning services throughout Perth metropolitan area and surrounding suburbs including Joondalup, Scarborough, Fremantle, Rockingham, and more.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-lightgreen p-2 rounded-lg mr-3 shadow-sm">
                  <svg className="w-5 h-5 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[#6B7280] leading-relaxed">
                    Our team arrives promptly within your scheduled time slot, respecting your time and property.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href="#contact" 
                className="inline-flex items-center px-5 py-3 bg-[#2CA2B0] text-white rounded-lg hover:bg-[#0A3D62] transition-colors duration-300"
              >
                <span className="mr-2">Schedule a Service</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Google Map */}
          <div 
            className="lg:col-span-3 rounded-xl overflow-hidden shadow-lg h-[400px] min-h-[300px]"
            data-aos="fade-left"
          >
            {/* Replace this with actual Google Map integration */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218309.49667022656!2d115.71930826146102!3d-31.967195496385543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32966cdb47733d%3A0x304f0b535df55d0!2sPerth%20WA%2C%20Australia!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Perth Service Area Map"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
