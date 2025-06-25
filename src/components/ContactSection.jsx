import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#333333]">Contact Us</h2>
          <div className="h-1 w-24 bg-[#2CA2B0] mx-auto mb-6"></div>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            Have questions or ready to get started? Reach out to us for a free quote or more information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-[#333333] font-medium mb-3">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2CA2B0]"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#333333] font-medium mb-3">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2CA2B0]"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#333333] font-medium mb-3">Message</label>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2CA2B0] h-40"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#2CA2B0] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#218393] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="bg-[#F0F9FF] rounded-xl p-8" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-6 text-[#333333]">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#2CA2B0] p-3 rounded-full text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-[#333333]">Our Location</h4>
                  <p className="text-[#6B7280]">123 Cleaning St, Suite 100<br />City, State 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#2CA2B0] p-3 rounded-full text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-[#333333]">Call Us</h4>
                  <p className="text-[#6B7280]">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#2CA2B0] p-3 rounded-full text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-[#333333]">Email Us</h4>
                  <p className="text-[#6B7280]">info@cleaningservice.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;