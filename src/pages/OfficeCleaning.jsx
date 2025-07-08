import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { 
    FiCalendar,
    FiStar,
    FiArrowRight,
    FiCheck,
    FiChevronDown,
    FiShield,
    FiPhone,
    FiMail,
    FiClock,
    FiUsers,
    FiClipboard,
    FiAward,
    FiThermometer
} from 'react-icons/fi';
import officeCleaningHero from '../assets/images/office cleaning.jpeg';
import deskSanitizationImage from '../assets/images/Desk and Surface Sanitisation.jpeg';
import wasteManagementImage from '../assets/images/Waste Management.jpg';
import floorCareImage from '../assets/images/Floor Care.jpeg';
import breakRoomImage from '../assets/images/Break Room Cleaning.jpeg';
import washroomImage from '../assets/images/Washroom Disinfecting.jpg';
import glassCleaningImage from '../assets/images/Glass & Window Cleaning.jpeg';

const OfficeCleaning = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const servicesData = [
        {
            image: deskSanitizationImage,
            title: "Desk and Surface Sanitisation",
            description: "Thorough cleaning and sanitization of all work surfaces, desks, and equipment."
        },
        {
            image: wasteManagementImage,
            title: "Waste Management",
            description: "Regular emptying of bins and restocking of supplies to maintain cleanliness."
        },
        {
            image: floorCareImage,
            title: "Floor Care",
            description: "Professional vacuuming of carpets and mopping of hard floor surfaces."
        },
        {
            image: breakRoomImage,
            title: "Break Room Cleaning",
            description: "Complete cleaning of kitchenette and break room areas for employee comfort."
        },
        {
            image: washroomImage,
            title: "Washroom Disinfecting",
            description: "Thorough cleaning and sanitization of all washroom facilities."
        },
        {
            image: glassCleaningImage,
            title: "Glass & Window Cleaning",
            description: "Interior window and glass surface cleaning for a professional appearance."
        }
    ];

    const idealForData = [
        {
            icon: (
                <svg className="w-24 h-24" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Calendar with Clock Icon */}
                    <rect x="20" y="20" width="56" height="56" rx="4" fill="#E6F7FF" stroke="#2CA2B0" strokeWidth="2"/>
                    <path d="M20 30h56" stroke="#2CA2B0" strokeWidth="2"/>
                    <circle cx="48" cy="53" r="15" fill="white" stroke="#2CA2B0" strokeWidth="2"/>
                    <path d="M48 45v8l5 5" stroke="#2CA2B0" strokeWidth="2"/>
                    <circle cx="28" cy="25" r="2" fill="#2CA2B0"/>
                    <circle cx="36" cy="25" r="2" fill="#2CA2B0"/>
                </svg>
            ),
            title: "Flexible Scheduling",
            description: "Choose from daily, weekly, or custom cleaning schedules that fit your business needs.",
            color: "#2CA2B0"
        },
        {
            icon: (
                <svg className="w-24 h-24" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Building Size Icon */}
                    <rect x="20" y="40" width="20" height="36" fill="#E6F7FF" stroke="#2CA2B0" strokeWidth="2"/>
                    <rect x="38" y="30" width="20" height="46" fill="#E6F7FF" stroke="#2CA2B0" strokeWidth="2"/>
                    <rect x="56" y="20" width="20" height="56" fill="#E6F7FF" stroke="#2CA2B0" strokeWidth="2"/>
                    <path d="M25 50h10M43 40h10M61 30h10" stroke="#2CA2B0" strokeWidth="2"/>
                </svg>
            ),
            title: "All Space Sizes",
            description: "Suitable for small offices to large commercial spaces, with customized cleaning solutions.",
            color: "#0A3D62"
        },
        {
            icon: (
                <svg className="w-24 h-24" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Time Flexibility Icon */}
                    <circle cx="48" cy="48" r="30" fill="#E6F7FF" stroke="#2CA2B0" strokeWidth="2"/>
                    <path d="M48 28v20l15 15" stroke="#2CA2B0" strokeWidth="2"/>
                    <path d="M28 48h40" stroke="#2CA2B0" strokeWidth="2" strokeDasharray="2 2"/>
                    <circle cx="48" cy="48" r="3" fill="#2CA2B0"/>
                </svg>
            ),
            title: "Flexible Hours",
            description: "Available for after-hours or early-morning service to minimize business disruption.",
            color: "#2CA2B0"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#E2E8F0] to-[#CBD5E1]">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9InJnYmEoMCwwLDAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>

                {/* Content Container */}
                <div className="relative container mx-auto px-4 h-screen flex items-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-cyan text-white shadow-lg">
                                    <FiShield className="mr-2" />
                                    Professional Office Cleaning
                                </span>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-5xl lg:text-6xl font-bold leading-tight"
                            >
                                Transform Your <br />
                                <span className="text-cyan">
                                    Workspace
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-xl text-gray-700 leading-relaxed max-w-xl"
                            >
                                Professional office cleaning services tailored to your business needs. 
                                Create a clean, healthy, and productive environment for your team.
                            </motion.p>

                            {/* Features List */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="grid grid-cols-2 gap-6"
                            >
                                {[
                                    "Daily or Weekly Service",
                                    "Professional Team",
                                    "Flexible Hours",
                                    "Custom Solutions"
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-2 bg-cyan/10 rounded-lg p-3">
                                        <FiCheck className="text-cyan text-xl" />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex flex-wrap gap-4"
                            >
                                <a
                                    href="#contact-us"
                                    className="bg-cyan text-white hover:bg-darkgreen hover:text-white px-8 py-4 rounded-lg 
                                             font-semibold transition-all flex items-center group shadow-lg hover:shadow-xl"
                                >
                                    Get Free Quote
                                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="#services"
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-lg 
                                             font-semibold transition-all border border-gray-200 
                                             shadow-lg hover:shadow-xl"
                                >
                                    View Services
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Right Content - Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="hidden lg:block"
                        >
                            <div className="relative">
                                <img
                                    src={officeCleaningHero}
                                    alt="Professional Office Cleaning"
                                    className="rounded-2xl shadow-2xl w-full object-cover h-[600px]"
                                />
                                {/* Floating Stats Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 }}
                                    className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-cyan/10 p-3 rounded-lg">
                                            <FiStar className="text-cyan text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900">4.9/5 Rating</h4>
                                            <p className="text-sm text-gray-600">From 500+ Reviews</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 flex flex-col items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    })}
                >
                    <span className="text-sm font-medium">Explore More</span>
                    <FiChevronDown className="text-2xl animate-bounce" />
                </motion.div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                            What's Included in Our{" "}
                            <span className="text-cyan">Office Cleaning</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Comprehensive cleaning services designed to maintain a professional and 
                            healthy work environment for your business.
                        </p>
                    </motion.div>
                    
                    {/* Services Grid */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {servicesData.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 
                                         hover:shadow-xl transition-all duration-300 w-full cursor-pointer
                                         flex flex-col h-full"
                            >
                                <div className="relative w-full h-[240px] mb-6 overflow-hidden rounded-xl">
                                    <img 
                                        src={service.image} 
                                        alt={service.title}
                                        className="w-full h-full object-cover object-center"
                                        style={{ aspectRatio: '16/9' }}
                                    />
                                </div>
                                <div className="p-2 flex-grow">
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
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
                            Ideal For Your <span className="text-cyan">Business Needs</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-600"
                        >
                            Our office cleaning services adapt to your business schedule and requirements,
                            ensuring minimal disruption to your operations.
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
                            <h2 className="text-3xl font-bold text-[#333333] mb-6">Our Professional Standards</h2>
                            <p className="text-gray-700">
                                At the heart of our service is a commitment to excellence. Our cleaning professionals undergo rigorous training in the latest cleaning techniques, safety protocols, and customer service standards. Each team member is carefully vetted and certified to ensure your office receives the highest quality care.
                            </p>
                            
                            <p className="text-gray-700 my-4">
                                We follow a systematic approach to cleaning, using a detailed checklist customized for each office space. This ensures consistent quality and attention to detail, from sanitizing workstations to maintaining common areas. Our team uses color-coded cleaning materials to prevent cross-contamination between different areas of your workplace.
                            </p>
                            
                            <p className="text-gray-700 mb-6">
                                Quality control is built into every step of our process. Supervisors conduct regular inspections, and we welcome your feedback to continuously improve our service. We stand behind our work with a satisfaction guarantee - if you're not completely satisfied, we'll return to address any concerns at no additional cost.
                            </p>

                            {/* Added Quality Standards Grid */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {[
                                    {
                                        icon: <FiAward className="text-cyan text-xl" />,
                                        title: "Premium Service",
                                        desc: "Excellence guaranteed"
                                    },
                                    {
                                        icon: <FiClipboard className="text-cyan text-xl" />,
                                        title: "Detailed Checklist",
                                        desc: "Thorough methodology"
                                    },
                                    {
                                        icon: <FiThermometer className="text-cyan text-xl" />,
                                        title: "Sanitization",
                                        desc: "Deep disinfection"
                                    },
                                    {
                                        icon: <FiUsers className="text-cyan text-xl" />,
                                        title: "Expert Staff",
                                        desc: "Skilled professionals"
                                    }
                                ].map((standard, index) => (
                                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                        <div className="mt-1">{standard.icon}</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{standard.title}</h4>
                                            <p className="text-sm text-gray-600">{standard.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-lightgreen p-8 rounded-2xl shadow-lg"
                        >
                            <h3 className="text-2xl font-bold text-gry mb-6">Our Quality Process</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Initial Assessment",
                                        description: "Thorough evaluation of your office's specific cleaning needs and requirements."
                                    },
                                    {
                                        title: "Custom Cleaning Plan",
                                        description: "Development of a tailored cleaning strategy based on your business operations and priorities."
                                    },
                                    {
                                        title: "Professional Execution",
                                        description: "Systematic cleaning following our detailed area-by-area checklist."
                                    },
                                    {
                                        title: "Quality Inspection",
                                        description: "Final walkthrough to ensure everything meets our high standards."
                                    }
                                ].map((process, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex gap-4"
                                    >
                                        <div className="bg-white rounded-full p-2 h-8 w-8 shadow-md flex items-center justify-center">
                                            <span className="text-cyan font-semibold">{index + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gry text-lg">{process.title}</h4>
                                            <p className="text-gray-600">{process.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Added Certification Badge */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-cyan/10 rounded-full">
                                        <FiCheck className="text-cyan text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Professional Excellence</h4>
                                        <p className="text-sm text-gray-600">Committed to the highest cleaning standards</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section id="contact-us" className="py-24 bg-gradient-to-br from-white to-cyan/5 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9InJnYmEoMCwwLDAsMC.xKSIgc3Ryb2tlLXwiIHZpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="space-y-8"
                            >
                                {/* Trust Badge */}
                                <div className="inline-flex items-center space-x-2 bg-cyan/10 px-4 py-2 rounded-full">
                                    <FiShield className="text-cyan" />
                                    <span className="text-sm font-medium text-cyan">Trusted by Leading Businesses</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                    Ready for a{' '}
                                    <span className="text-cyan">
                                        Cleaner Office
                                    </span>
                                    ?
                                </h2>

                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Contact us today for a customized quote and experience the difference professional cleaning makes.
                                </p>

                                {/* Features Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: <FiCalendar />, text: "Flexible Scheduling" },
                                        { icon: <FiShield />, text: "Insured & Bonded" },
                                        { icon: <FiUsers />, text: "Expert Team" },
                                        { icon: <FiClock />, text: "24/7 Availability" }
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm">
                                            <div className="text-cyan text-xl">
                                                {feature.icon}
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <a
                                    href="/contact"
                                    className="inline-flex items-center bg-cyan text-white hover:bg-darkgreen hover:text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all group"
                                >
                                    Book Your Cleaning
                                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>

                            {/* Right Content - Contact Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="bg-white rounded-2xl shadow-2xl p-8 relative"
                            >
                                {/* Decorative Elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan/10 rounded-full"></div>
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan/5 rounded-full"></div>

                                {/* Content */}
                                <div className="relative space-y-6">
                                    {/* Review Card */}
                                    <div className="bg-gray-50 rounded-xl p-6 mb-8">
                                        <div className="flex items-center space-x-2 text-yellow-400 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <FiStar key={i} className="fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-gray-600 italic mb-4">
                                            "Their office cleaning service is exceptional! Our workspace has never looked better, and their attention to detail is impressive."
                                        </p>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-cyan/20 rounded-full flex items-center justify-center">
                                                <span className="text-cyan font-semibold">JD</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">John Davidson</p>
                                                <p className="text-sm text-gray-500">Business Owner</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick Contact Options */}
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold text-gray-900">Get in Touch</h3>
                                        <div className="grid gap-4">
                                            <a href="tel:0413636785" className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                                <div className="w-10 h-10 bg-cyan/10 rounded-full flex items-center justify-center text-cyan">
                                                    <FiPhone />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">Call or WhatsApp</p>
                                                    <p className="font-medium text-gray-900">0413 636 785</p>
                                                </div>
                                            </a>
                                            <a href="mailto:sparkwisecleaning@gmail.com" className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                                <div className="w-10 h-10 bg-cyan/10 rounded-full flex items-center justify-center text-cyan">
                                                    <FiMail />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">Email us at</p>
                                                    <p className="font-medium text-gray-900">sparkwisecleaning@gmail.com</p>
                                                </div>
                                            </a>
                                            <a 
                                                href="https://www.facebook.com/SparkWise8?mibextid=ZbWKwL" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                            >
                                                <div className="w-10 h-10 bg-cyan/10 rounded-full flex items-center justify-center text-cyan">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">Follow us on</p>
                                                    <p className="font-medium text-gray-900">Facebook</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default OfficeCleaning;
