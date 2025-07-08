import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    FiUsers, 
    FiAward, 
    FiHeart, 
    FiCheck,
    FiStar,
    FiShield
} from 'react-icons/fi';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const values = [
        { 
            icon: <FiHeart />,
            title: "Care & Commitment",
            description: "We treat every home and office with the utmost care, as if it were our own."
        },
        { 
            icon: <FiAward />,
            title: "Quality Service",
            description: "We maintain the highest standards of cleaning and customer satisfaction."
        },
        { 
            icon: <FiShield />,
            title: "Reliability",
            description: "Count on us to be there when scheduled, with consistent and dependable service."
        },
        { 
            icon: <FiUsers />,
            title: "Customer Focus",
            description: "Your specific needs and preferences are always our top priority."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-br from-[#F8FAFC] via-[#E2E8F0] to-[#CBD5E1]">
                {/* Background Pattern */}
                {/* Removed problematic inline SVG background to fix syntax errors */}
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block bg-cyan text-white px-4 py-1 rounded-full text-sm font-semibold mb-6"
                        >
                            OUR STORY
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800"
                        >
                            About <span className="text-cyan">SparkWise</span> Cleaning
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-gray-700 leading-relaxed mb-8"
                        >
                            Dedicated to creating cleaner, healthier spaces for homes and businesses across the community.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Journey</h2>
                            <div className="h-1 w-20 bg-cyan"></div>
                            <p className="text-gray-700">
                                SparkWise Cleaning was founded in 2018 with a simple mission: to provide exceptional cleaning services that make a real difference in people's lives. What began as a small, local operation has grown into a trusted name in residential and commercial cleaning.
                            </p>
                            <p className="text-gray-700">
                                Our founder, with over 15 years of experience in the cleaning industry, recognized a gap in the market for a service that truly cares about the details. We've built our reputation on thoroughness, reliability, and a genuine commitment to our clients' satisfaction.
                            </p>
                            <p className="text-gray-700">
                                Today, we're proud to serve hundreds of homes and businesses, maintaining the same level of personalized care and attention to detail that defined us from day one.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="bg-gray-100 rounded-2xl p-6 h-[400px] flex items-center justify-center">
                                <img 
                                    src="/my3.jpg" 
                                    alt="Our Founder" 
                                    className="rounded-xl shadow-lg object-cover w-full h-full"
                                />
                            </div>
                            
                            {/* Testimonial quote */}
                            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-6 shadow-xl max-w-xs">
                                <div className="text-cyan text-3xl mb-2">"</div>
                                <p className="text-gray-700 italic mb-4">
                                    "Our goal is to exceed expectations with every clean, making your space shine while giving you more time for what matters most."
                                </p>
                                <div className="flex items-center">
                                    <span className="font-bold text-gray-800">Jane Smith</span>
                                    <span className="mx-2">·</span>
                                    <span className="text-gray-600">Founder</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-20 bg-lightgreen">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
                        >
                            Our <span className="text-cyan">Values</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            The principles that guide everything we do at SparkWise Cleaning
                        </motion.p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
                            >
                                <div className="bg-cyan/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl text-cyan">{value.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="bg-gray-100 rounded-2xl p-6 h-[400px] flex items-center justify-center">
                                <img 
                                    src="/src/assets/images/herobg.JPG" 
                                    alt="Our Team" 
                                    className="rounded-xl shadow-lg object-cover w-full h-full"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6 order-1 lg:order-2"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meet Our Team</h2>
                            <div className="h-1 w-20 bg-cyan"></div>
                            <p className="text-gray-700">
                                Our team consists of dedicated professionals who share our passion for cleanliness and service excellence. Each member undergoes comprehensive training to ensure they deliver consistent, high-quality results.
                            </p>
                            <p className="text-gray-700">
                                We carefully select our cleaning specialists not just for their skills, but also for their attention to detail and customer-oriented mindset. Many of our team members have been with us for years, bringing valuable experience and a deep understanding of our clients' needs.
                            </p>

                            {/* Team Stats */}
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                <div className="bg-lightgreen p-6 rounded-xl">
                                    <div className="text-3xl font-bold text-cyan mb-2">15+</div>
                                    <p className="text-gray-700">Professional Cleaners</p>
                                </div>
                                <div className="bg-lightgreen p-6 rounded-xl">
                                    <div className="text-3xl font-bold text-cyan mb-2">5+</div>
                                    <p className="text-gray-700">Years Experience</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-lightgreen">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
                        >
                            Why Choose <span className="text-cyan">SparkWise</span>
                        </motion.h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Experienced Team",
                                description: "Our professionals have years of experience in providing exceptional cleaning services."
                            },
                            {
                                title: "Customer Satisfaction",
                                description: "We prioritize your happiness, with a satisfaction guarantee on all our services."
                            },
                            {
                                title: "Eco-Friendly Practices",
                                description: "We use environmentally responsible cleaning products and methods."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start mb-4">
                                    <div className="bg-cyan/10 p-2 rounded-full">
                                        <FiCheck className="text-cyan text-xl" />
                                    </div>
                                    <h3 className="text-xl font-bold ml-4 text-gray-800">{item.title}</h3>
                                </div>
                                <p className="text-gray-600 pl-10">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#0A3D62] to-cyan relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold mb-6 text-white"
                        >
                            Ready to Experience the SparkWise Difference?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-xl text-white/90 mb-10"
                        >
                            Contact us today to learn more about our services or to schedule your cleaning.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col sm:flex-row justify-center gap-4"
                        >
                            <a
                                href="/contact"
                                className="bg-white text-[#0A3D62] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-block text-center"
                            >
                                Contact Us
                            </a>
                            <a
                                href="/services"
                                className="bg-transparent border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all shadow-lg inline-block text-center"
                            >
                                Our Services
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
