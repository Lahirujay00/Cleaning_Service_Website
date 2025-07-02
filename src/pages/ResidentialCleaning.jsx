import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiCheck, FiHome, FiCalendar, FiBox, FiTool, FiDroplet, FiSun, FiArrowRight } from 'react-icons/fi';
import residentialCleaningHero from '../assets/images/residential-cleaning-hero.jpg';

const ResidentialCleaning = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    // Services data array
    const servicesData = [
        {
            icon: <FiDroplet className="h-8 w-8 text-[#2CA2B0]" />,
            title: "Dusting & Wiping",
            description: "Thorough dusting and wiping of all surfaces, including furniture, shelves, and decorative items."
        },
        {
            icon: <FiTool className="h-8 w-8 text-[#2CA2B0]" />,
            title: "Floor Cleaning",
            description: "Complete vacuuming and mopping of all floor surfaces, including hardwood, tile, and carpet."
        },
        {
            icon: <FiHome className="h-8 w-8 text-[#2CA2B0]" />,
            title: "Kitchen Cleaning",
            description: "Deep cleaning of benchtops, stovetops, and exterior of all kitchen appliances."
        },
        {
            icon: <FiDroplet className="h-8 w-8 text-[#2CA2B0]" />,
            title: "Bathroom Cleaning",
            description: "Thorough cleaning of toilets, showers, bathtubs, mirrors, and all bathroom fixtures."
        },
        {
            icon: <FiHome className="h-8 w-8 text-[#2CA2B0]" />,
            title: "Living Areas",
            description: "Comprehensive cleaning and tidying of bedrooms and living areas for a fresh look."
        },
        {
            icon: <FiSun className="h-8 w-8 text-[#2CA2B0]" />,
            title: "Additional Cleaning",
            description: "Window sills, skirting boards, and light switches cleaned upon request."
        }
    ];

    // Ideal for data array
    const idealForData = [
        {
            icon: <FiHome />,
            title: "Regular Home Maintenance",
            description: "Keep your home consistently clean with scheduled cleaning services on a weekly, bi-weekly, or monthly basis.",
            color: "#2CA2B0"
        },
        {
            icon: <FiCalendar />,
            title: "Spring/Deep Cleans",
            description: "Comprehensive top-to-bottom cleaning to refresh your home and target areas that need special attention.",
            color: "#0A3D62"
        },
        {
            icon: <FiBox />,
            title: "Move-in/Move-out Cleaning",
            description: "Leave your old place spotless or start fresh in your new home with our specialized moving services.",
            color: "#2CA2B0"
        }
    ];

    // Features data array
    const featuresData = [
        {
            title: "Regular Maintenance Cleaning",
            description: "Weekly, bi-weekly, or monthly cleaning services to keep your home consistently clean and tidy."
        },
        {
            title: "Deep Cleaning",
            description: "Intensive cleaning that reaches areas often missed during regular cleaning sessions."
        },
        {
            title: "Custom Cleaning Plans",
            description: "Tailor-made cleaning solutions focusing on the areas that matter most to you."
        },
        {
            title: "Eco-Friendly Products",
            description: "Safe, environmentally responsible cleaning products that are gentle on your home and family."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            {/* Hero Section with Parallax */}
            <motion.section 
                className="relative w-full min-h-screen flex items-center overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Parallax Background */}
                <motion.div 
                    className="absolute inset-0 z-0"
                    style={{ scale, opacity }}
                >
                    <div className="relative h-full">
                        <img 
                            src={residentialCleaningHero} 
                            alt="Residential Cleaning Services" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62]/95 via-[#0A3D62]/85 to-transparent"></div>
                    </div>
                </motion.div>
                
                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-4 pt-32">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-3xl"
                    >
                        <motion.div 
                            className="inline-block bg-[#2CA2B0] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            RESIDENTIAL SERVICES
                        </motion.div>
                        <motion.h1 
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <span className="text-white drop-shadow-lg">Professional</span>{" "}
                            <span className="text-[#2CA2B0] drop-shadow-lg">Home</span>{" "}
                            <span className="text-white drop-shadow-lg">Cleaning</span>
                        </motion.h1>
                        <motion.p 
                            className="text-xl text-white leading-relaxed mb-10 max-w-2xl drop-shadow-lg font-medium"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Experience the difference of professional cleaning services tailored to your home's specific needs. 
                            We ensure every corner shines with meticulous care and attention to detail.
                        </motion.p>
                        <motion.div 
                            className="flex flex-wrap gap-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact-us"
                                className="bg-[#2CA2B0] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2CA2B0]/90 transition-all shadow-lg inline-flex items-center text-lg group"
                            >
                                Book Now
                                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#services"
                                className="bg-white text-[#0A3D62] px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg inline-flex items-center text-lg group"
                            >
                                Our Services
                                <FiCheck className="ml-2 group-hover:scale-110 transition-transform" />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
                
                {/* Scroll Indicator */}
                <motion.div 
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
                        <motion.div 
                            className="w-1 h-2 bg-white rounded-full mt-2"
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </motion.section>

            {/* Services Section with Grid Layout */}
            <section id="services" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#333333]">
                            What's Included in Our{" "}
                            <span className="text-[#2CA2B0]">Residential Cleaning</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Our professional cleaning team delivers comprehensive cleaning services, 
                            ensuring your home is spotless and fresh with meticulous attention to every detail.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    >
                        {servicesData.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="bg-[#F0F9FF] p-4 inline-block rounded-xl mb-6 group-hover:bg-[#2CA2B0] transition-colors">
                                    <div className="transform group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-[#333333]">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* Ideal For Section */}
            <section className="py-20 bg-[#F0F9FF]">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold mb-6 text-[#333333]"
                        >
                            Ideal For Your <span className="text-[#2CA2B0]">Cleaning Needs</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-600"
                        >
                            Our residential cleaning services adapt to your specific needs, whether it's regular maintenance,
                            deep cleaning, or preparing for a move.
                        </motion.p>
                    </div>
                    
                    <div className="max-w-5xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {idealForData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-xl shadow-lg p-8 text-center relative overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-2" style={{ backgroundColor: item.color }}></div>
                                    <div className="rounded-full bg-[#F0F9FF] p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6 text-[#2CA2B0]">
                                        <span className="text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-[#333333]">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* Original content section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="prose max-w-none"
                        >
                            <h2 className="text-3xl font-bold text-[#333333] mb-6">Comprehensive Home Cleaning Solutions</h2>
                            <p className="text-gray-700">
                                Our residential cleaning services are designed to give you more time to enjoy the things you love while we take care of keeping your home spotless. Whether you need a one-time deep clean or regular maintenance, our team of trained professionals delivers exceptional results every time.
                            </p>
                            
                            <p className="text-gray-700 my-4">
                                We understand that every home is unique, which is why we offer customized cleaning solutions tailored to your specific requirements. Our thorough approach ensures that no corner goes untouched, from kitchens and bathrooms to living spaces and bedrooms.
                            </p>
                            
                            <p className="text-gray-700">
                                Using eco-friendly cleaning products and state-of-the-art equipment, we provide a healthier environment for your family while achieving outstanding cleanliness that you can see and feel.
                            </p>
                            
                            <div className="mt-8">
                                <a href="#contact-us" className="bg-[#2CA2B0] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2CA2B0]/90 transition-all inline-block">Get a Free Quote</a>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-[#F0F9FF] p-8 rounded-2xl shadow-lg"
                        >
                            <h3 className="text-2xl font-bold text-[#333333] mb-6">Our Cleaning Features</h3>
                            <div className="space-y-6">
                                {featuresData.map((feature, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex gap-4"
                                    >
                                        <div className="bg-white rounded-full p-2 h-fit shadow-md flex items-center justify-center">
                                            <FiCheck className="text-[#2CA2B0] h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#333333] text-lg">{feature.title}</h4>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* Call to Action Section */}
            <section id="contact-us" className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62] to-[#2CA2B0] transform -skew-y-6 origin-top-left"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Ready for a Cleaner Home?
                        </h2>
                        <p className="text-xl text-white/90 mb-10 leading-relaxed">
                            Contact us today for a free quote and experience the difference professional cleaning makes.
                        </p>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-[#0A3D62] px-10 py-4 rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg inline-flex items-center text-lg group"
                        >
                            Book Your Cleaning
                            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ResidentialCleaning;
