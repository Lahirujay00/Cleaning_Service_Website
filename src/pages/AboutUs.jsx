import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    FiUsers, 
    FiAward, 
    FiHeart, 
    FiCheck,
    FiStar,
    FiShield,
    FiTarget,
    FiTrendingUp,
    FiClock,
    FiZap,
    FiEye,
    FiArrowRight
} from 'react-icons/fi';
import teamImage from '../assets/images/team.jpeg';
import mythree from '../assets/images/mythree.jpg';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const values = [
        { 
            icon: <FiHeart />,
            title: "Excellence First",
            description: "We pursue perfection in every detail, treating each space as our masterpiece.",
            color: "from-red-100 to-pink-100"
        },
        { 
            icon: <FiShield />,
            title: "Trust & Reliability",
            description: "Consistent, dependable service you can count on, every single time.",
            color: "from-blue-100 to-cyan-100"
        },
        { 
            icon: <FiZap />,
            title: "Innovation",
            description: "Latest techniques and eco-friendly solutions for superior results.",
            color: "from-yellow-100 to-orange-100"
        },
        { 
            icon: <FiEye />,
            title: "Attention to Detail",
            description: "No corner unturned, no surface overlooked in our meticulous approach.",
            color: "from-green-100 to-emerald-100"
        }
    ];

    const milestones = [
        { year: '2018', title: 'Company Founded', description: 'Started with a vision to revolutionize cleaning services' },
        { year: '2020', title: 'Team Expansion', description: 'Grew to 15+ professional cleaning specialists' },
        { year: '2022', title: 'Commercial Success', description: 'Expanded into commercial and office cleaning services' },
        { year: '2025', title: 'Industry Leader', description: 'Recognized as the premier cleaning service in the region' }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-neutral-light" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/gplay.png')" }}>
            {/* Hero Section - Redesigned */}
            <section className="relative bg-primary text-white py-40">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/images/about-image.jpg')" }}></div>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
                            About SparkWise Cleaning
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-light leading-relaxed max-w-3xl mx-auto mb-8">
                            Your trusted partner in creating clean, healthy, and inspiring environments.
                        </p>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-cyan text-white font-medium px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                        >
                            Get a Free Quote <FiArrowRight />
                        </motion.a>
                    </motion.div>
                </div>
            </section>


            {/* Our Story Section - Modern Design */}
            <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark leading-tight">
                                    Built on <span className="text-primary">Excellence</span>
                                </h2>
                                <div className="w-20 h-1 bg-secondary rounded-full"></div>
                            </div>
                            
                            <div className="space-y-6 text-neutral leading-relaxed">
                                <p className="text-lg">
                                    Founded in 2018, SparkWise Cleaning emerged from a simple yet powerful vision: to revolutionize 
                                    the cleaning industry through unwavering commitment to excellence and innovation.
                                </p>
                                <p>
                                    What started as a small local operation has transformed into the region's most trusted cleaning 
                                    service. Our growth isn't measured just in numbers, but in the countless smiles of satisfied 
                                    clients and the pristine spaces we create every day.
                                </p>
                                <p>
                                    Today, we proudly serve over 500 homes and businesses, maintaining the personal touch and 
                                    attention to detail that has been our hallmark from day one.
                                </p>
                            </div>

                            {/* Mission & Vision Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                    <div className="text-primary mb-3">
                                        <FiTarget size={24} />
                                    </div>
                                    <h3 className="font-bold text-neutral-dark mb-2">Our Mission</h3>
                                    <p className="text-neutral text-sm">Creating spotless spaces that enhance lives and productivity.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                    <div className="text-primary mb-3">
                                        <FiEye size={24} />
                                    </div>
                                    <h3 className="font-bold text-neutral-dark mb-2">Our Vision</h3>
                                    <p className="text-neutral text-sm">To be the most trusted name in professional cleaning services.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl p-8">
                                    <img 
                                        src={mythree} 
                                        alt="Our Founder" 
                                        className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
                                    />
                                </div>
                                
                                {/* Floating Quote Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-8 shadow-2xl max-w-xs border border-gray-100"
                                >
                                    <div className="text-primary text-4xl mb-4 font-serif">"</div>
                                    <p className="text-neutral italic mb-6 leading-relaxed">
                                        Excellence isn't just our standard—it's our promise. Every clean should exceed expectations.
                                    </p>
                                    <div className="flex items-center border-t border-gray-100 pt-4">
                                        <div>
                                            <span className="font-bold text-neutral-dark block">Mythree</span>
                                            <span className="text-primary text-sm">Founder & CEO</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            
                            {/* Background Decorations */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-200 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values Section - Enhanced */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-50 to-blue-50 rounded-full -translate-y-48 translate-x-48"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-50 to-blue-50 rounded-full translate-y-48 -translate-x-48"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider">Our Values</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark">
                                What <span className="text-primary">Drives</span> Us
                            </h2>
                            <p className="text-xl text-neutral leading-relaxed">
                                Our core values shape every interaction, every service, and every relationship we build
                            </p>
                        </motion.div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ y: -8 }}
                                className="group cursor-pointer"
                            >
                                <div className={`bg-gradient-to-br ${value.color} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-white/50`}>
                                    <div className="bg-white p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                        <span className="text-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                                            {value.icon}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-neutral-dark text-center">
                                        {value.title}
                                    </h3>
                                    <p className="text-neutral text-center leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider">Our Journey</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark">
                                Milestones of <span className="text-primary">Growth</span>
                            </h2>
                        </motion.div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    <div className="flex-1">
                                        <div className={`bg-white rounded-2xl p-8 shadow-lg ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                            <div className="text-primary text-3xl font-bold mb-2">{milestone.year}</div>
                                            <h3 className="text-xl font-bold text-neutral-dark mb-3">{milestone.title}</h3>
                                            <p className="text-neutral leading-relaxed">{milestone.description}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex-shrink-0">
                                        <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping opacity-20"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex-1"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section - Enhanced */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1 relative"
                        >
                            <div className="relative z-10">
                                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl p-8 relative">
                                    <img 
                                        src={teamImage}
                                        alt="Our Team" 
                                        className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
                                    />
                                    {/* Floating Statistics */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
                                    >
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-primary mb-1">98%</div>
                                            <div className="text-sm text-neutral">Client Satisfaction</div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                            
                            {/* Background Decorations */}
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-200 rounded-full opacity-20 animate-pulse"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8 order-1 lg:order-2"
                        >
                            <div className="space-y-4">
                                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider">Our Team</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark leading-tight">
                                    Meet the <span className="text-primary">Experts</span>
                                </h2>
                                <div className="w-20 h-1 bg-secondary rounded-full"></div>
                            </div>
                            
                            <div className="space-y-6 text-neutral leading-relaxed">
                                <p className="text-lg">
                                    Our team consists of carefully selected professionals who share our passion for excellence. 
                                    Each member brings unique skills and dedication to creating exceptional results.
                                </p>
                                <p>
                                    We invest heavily in training and development, ensuring our team stays current with the latest 
                                    cleaning techniques, safety protocols, and eco-friendly practices.
                                </p>
                            </div>

                            {/* Team Features */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-cyan-100 p-2 rounded-lg">
                                        <FiCheck className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-neutral-dark mb-1">Fully Trained</h4>
                                        <p className="text-neutral text-sm">Comprehensive training programs</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="bg-cyan-100 p-2 rounded-lg">
                                        <FiShield className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-neutral-dark mb-1">Insured & Bonded</h4>
                                        <p className="text-neutral text-sm">Complete protection & peace of mind</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="bg-cyan-100 p-2 rounded-lg">
                                        <FiUsers className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-neutral-dark mb-1">Experienced</h4>
                                        <p className="text-neutral text-sm">Years of professional experience</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="bg-cyan-100 p-2 rounded-lg">
                                        <FiHeart className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-neutral-dark mb-1">Passionate</h4>
                                        <p className="text-neutral text-sm">Genuine care for quality results</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Modern Cards */}
            <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark">
                                The <span className="text-primary">SparkWise</span> Advantage
                            </h2>
                            <p className="text-xl text-neutral leading-relaxed">
                                Discover what sets us apart in the cleaning industry
                            </p>
                        </motion.div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: <FiAward />,
                                title: "Award-Winning Service",
                                description: "Recognized for excellence with multiple industry awards and certifications.",
                                gradient: "from-yellow-400 to-orange-500"
                            },
                            {
                                icon: <FiHeart />,
                                title: "Customer-Centric Approach",
                                description: "Your satisfaction is our priority, with personalized service for every client.",
                                gradient: "from-pink-400 to-red-500"
                            },
                            {
                                icon: <FiShield />,
                                title: "Eco-Friendly Solutions",
                                description: "Safe, green cleaning products that protect your family and the environment.",
                                gradient: "from-green-400 to-emerald-500"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                whileHover={{ y: -8 }}
                                className="group cursor-pointer"
                            >
                                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                                    <div className={`bg-gradient-to-r ${item.gradient} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <span className="text-2xl text-white">
                                            {item.icon}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-neutral-dark">
                                        {item.title}
                                    </h3>
                                    <p className="text-neutral leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Redesigned */}
            <section className="py-24 bg-primary">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Ready to Experience Excellence?
                        </h2>
                        <p className="text-xl text-neutral-light mt-4 mb-8">
                            Join hundreds of satisfied clients who trust SparkWise Cleaning.
                        </p>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-cyan text-white font-medium px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                        >
                            Get Free Quote
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
