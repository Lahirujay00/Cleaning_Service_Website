import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
    FiCalendar, 
    FiStar,
    FiDroplet,
    FiHome,
    FiArrowRight,
    FiCheck,
    FiTool,
    FiChevronDown,
    FiShield,
    FiPhone,
    FiMail,
    FiAward,
    FiClipboard,
    FiThermometer,
    FiUsers,
    FiTarget,
    FiPackage,
    FiList,
    FiClock
} from 'react-icons/fi';
import residentialCleaningHero from '../assets/images/res hero.jpg';
import dustingImage from '../assets/images/Dusting & Wiping.jpg';
import floorCleaningImage from '../assets/images/Floor Cleaning.jpg';
import kitchenCleaningImage from '../assets/images/Kitchen Cleaning.jpg';
import bathroomCleaningImage from '../assets/images/Bathroom Cleaning.jpg';
import livingAreasImage from '../assets/images/Living Areas.jpg';
import regularCleaningImage from '../assets/images/Regular Home Cleaning.jpg';

const ResidentialCleaning = () => {
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

    // Services data array
    const servicesData = [
        {
            image: dustingImage,
            title: "Dusting & Wiping",
            description: "Thorough dusting and wiping of all surfaces, including furniture, shelves, and decorative items."
        },
        {
            image: floorCleaningImage,
            title: "Floor Cleaning",
            description: "Complete vacuuming and mopping of all floor surfaces, including hardwood, tile, and carpet."
        },
        {
            image: kitchenCleaningImage,
            title: "Kitchen Cleaning",
            description: "Deep cleaning of benchtops, stovetops, and exterior of all kitchen appliances."
        },
        {
            image: bathroomCleaningImage,
            title: "Bathroom Cleaning",
            description: "Thorough cleaning of toilets, showers, bathtubs, mirrors, and all bathroom fixtures."
        },
        {
            image: livingAreasImage,
            title: "Living Areas",
            description: "Comprehensive cleaning and tidying of bedrooms and living areas for a fresh look."
        },
        {
            image: regularCleaningImage,
            title: "Regular Home Cleaning",
            description: "Comprehensive cleaning services to keep your home spotless and fresh.",
            link: "#"
        }
    ];

    // Ideal for data array
    const idealForData = [
        {
            icon: (
                <svg className="w-24 h-24" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* House Base */}
                    <path d="M20 48L48 20L76 48V80H20V48Z" fill="#E6F7FF"/>
                    <path d="M20 48L48 20L76 48V80H20V48Z" stroke="#2CA2B0" strokeWidth="2"/>
                    
                    {/* Windows */}
                    <rect x="30" y="52" width="12" height="12" fill="white" stroke="#2CA2B0" strokeWidth="2"/>
                    <rect x="54" y="52" width="12" height="12" fill="white" stroke="#2CA2B0" strokeWidth="2"/>
                    
                    {/* Door */}
                    <path d="M44 80V64H52V80" fill="white" stroke="#2CA2B0" strokeWidth="2"/>
                    
                    {/* Cleaning Elements */}
                    <circle cx="36" y="58" r="2" fill="#2CA2B0" fillOpacity="0.5"/>
                    <circle cx="60" y="58" r="2" fill="#2CA2B0" fillOpacity="0.5"/>
                    
                    {/* Calendar Elements */}
                    <rect x="28" y="30" width="40" height="6" fill="#2CA2B0" rx="2"/>
                    <rect x="28" y="36" width="40" height="30" fill="white" stroke="#2CA2B0" strokeWidth="2"/>
                    <path d="M35 42V62M48 42V62M61 42V62" stroke="#2CA2B0" strokeWidth="1" strokeDasharray="2 2"/>
                    <path d="M32 48H64M32 54H64" stroke="#2CA2B0" strokeWidth="1" strokeDasharray="2 2"/>
                    
                    {/* Checkmark */}
                    <circle cx="70" cy="26" r="10" fill="#2CA2B0" fillOpacity="0.2"/>
                    <path d="M65 26L69 30L75 24" stroke="#2CA2B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Regular Home Maintenance",
            description: "Keep your home consistently clean with scheduled cleaning services on a weekly, bi-weekly, or monthly basis.",
            color: "#2CA2B0"
        },
        {
            icon: (
                <svg className="w-24 h-24" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Room Layout */}
                    <rect x="16" y="16" width="64" height="64" rx="4" fill="#E6F7FF"/>
                    
                    {/* Deep Clean Elements */}
                    {/* Vacuum Lines */}
                    <path d="M24 40C32 32 40 32 48 40C56 48 64 48 72 40" 
                          stroke="#2CA2B0" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
                    <path d="M24 50C32 42 40 42 48 50C56 58 64 58 72 50" 
                          stroke="#2CA2B0" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2"/>
                    
                    {/* Cleaning Tools */}
                    {/* Spray Bottle */}
                    <path d="M30 24H38V28C38 29.1 37.1 30 36 30H32C30.9 30 30 29.1 30 28V24Z" fill="#2CA2B0"/>
                    <rect x="32" y="20" width="4" height="4" fill="#2CA2B0"/>
                    
                    {/* Brush */}
                    <rect x="50" y="20" width="16" height="4" rx="2" fill="#2CA2B0"/>
                    <path d="M52 24V28M56 24V28M60 24V28M64 24V28" stroke="#2CA2B0" strokeWidth="1"/>
                    
                    {/* Sparkles */}
                    <circle cx="28" cy="60" r="2" fill="#2CA2B0" fillOpacity="0.6"/>
                    <circle cx="48" cy="70" r="2" fill="#2CA2B0" fillOpacity="0.6"/>
                    <circle cx="68" cy="65" r="2" fill="#2CA2B0" fillOpacity="0.6"/>
                    
                    {/* Magnifying Glass */}
                    <circle cx="70" cy="26" r="8" stroke="#2CA2B0" strokeWidth="2"/>
                    <path d="M76 32L80 36" stroke="#2CA2B0" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ),
            title: "Spring/Deep Cleans",
            description: "Comprehensive top-to-bottom cleaning to refresh your home and target areas that need special attention.",
            color: "#0A3D62"
        },
        {
            icon: (
                <svg className="w-24 h-24" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Moving Box Stack */}
                    <rect x="20" y="50" width="30" height="30" fill="#E6F7FF" stroke="#2CA2B0" strokeWidth="2"/>
                    <rect x="25" y="55" width="20" height="4" fill="#2CA2B0"/>
                    <path d="M30 64H40M30 70H40" stroke="#2CA2B0" strokeWidth="2"/>
                    
                    <rect x="46" y="40" width="25" height="25" fill="#E6F7FF" stroke="#2CA2B0" strokeWidth="2"/>
                    <rect x="50" y="44" width="17" height="4" fill="#2CA2B0"/>
                    <path d="M54 52H62M54 57H62" stroke="#2CA2B0" strokeWidth="2"/>
                    
                    {/* House Outline */}
                    <path d="M16 30L48 16L80 30V36H16V30Z" fill="#E6F7FF" stroke="#2CA2B0" strokeWidth="2"/>
                    <path d="M24 36V46M72 36V46" stroke="#2CA2B0" strokeWidth="2"/>
                    
                    {/* Cleaning Elements */}
                    <circle cx="32" cy="24" r="2" fill="#2CA2B0" fillOpacity="0.5"/>
                    <circle cx="48" cy="20" r="2" fill="#2CA2B0" fillOpacity="0.5"/>
                    <circle cx="64" cy="24" r="2" fill="#2CA2B0" fillOpacity="0.5"/>
                    
                    {/* Arrow Indicating Movement */}
                    <path d="M75 65L85 65" stroke="#2CA2B0" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M80 60L85 65L80 70" stroke="#2CA2B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
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
            <Header className="bg-white shadow-sm z-50" />

            {/* New Modern Hero Section */}
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
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold 
                                             bg-[#2CA2B0] text-black shadow-lg">
                                    <FiShield className="mr-2" />
                                    Trusted by 1000+ Homeowners
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
                                    Living Space
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-xl text-gray-700 leading-relaxed max-w-xl font-medium"
                            >
                                Experience the perfect blend of professional cleaning expertise 
                                and personalized care. We don't just clean houses – we create 
                                healthier, happier homes.
                            </motion.p>

                            {/* Features List */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="grid grid-cols-2 gap-6"
                            >
                                {[
                                    "Eco-Friendly Products",
                                    "Trained Professionals",
                                    "100% Satisfaction",
                                    "Flexible Scheduling"
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
                                    className="bg-cyan hover:bg-cyan/90 text-white px-8 py-4 rounded-lg 
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
                                    src={residentialCleaningHero}
                                    alt="Professional Home Cleaning"
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                            What's Included in Our{" "}
                            <span className="text-cyan">Residential Cleaning</span>
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
                                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 
                                         hover:shadow-2xl transition-all duration-300 group w-full"
                            >
                                <div className="relative w-full h-64 mb-6 overflow-hidden rounded-xl">
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className="w-full h-full object-cover object-center transform 
                                                 group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-2">
                                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
                            Ideal For Your <span className="text-cyan">Cleaning Needs</span>
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
                            <h2 className="text-3xl font-bold text-[#333333] mb-6">Our Professional Standards</h2>
                            <p className="text-gray-700">
                                At the heart of our service is a commitment to excellence. Our cleaning professionals undergo rigorous training in the latest cleaning techniques, safety protocols, and customer service standards. Each team member is carefully vetted and certified to ensure your home receives the highest quality care.
                            </p>
                            
                            <p className="text-gray-700 my-4">
                                We follow a systematic approach to cleaning, using a detailed checklist customized for each room. This ensures consistent quality and attention to detail, from dusting high corners to sanitizing frequently touched surfaces. Our team uses color-coded cleaning materials to prevent cross-contamination between different areas of your home.
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
                                        description: "Thorough evaluation of your home's specific cleaning needs and requirements."
                                    },
                                    {
                                        title: "Custom Cleaning Plan",
                                        description: "Development of a tailored cleaning strategy based on your preferences and priorities."
                                    },
                                    {
                                        title: "Professional Execution",
                                        description: "Systematic cleaning following our detailed room-by-room checklist."
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
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9InJnYmEoMCwwLDAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-5"></div>
                
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
                                    <span className="text-sm font-medium text-cyan">Trusted by 1000+ Homeowners</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                    Ready for a{' '}
                                    <span className="text-cyan">
                                        Cleaner Home
                                    </span>
                                    ?
                                </h2>

                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Contact us today for a free quote and experience the difference professional cleaning makes.
                                </p>

                                {/* Features Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: <FiCalendar />, text: "Flexible Scheduling" },
                                        { icon: <FiShield />, text: "Insured & Bonded" },
                                        { icon: <FiStar />, text: "5-Star Service" },
                                        { icon: <FiDroplet />, text: "Eco-Friendly" }
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
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center bg-cyan text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all group"
                                    >
                                        Book Your Cleaning
                                        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </motion.div>
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
                                            "The cleaning service was exceptional! They transformed my home and their attention to detail was impressive."
                                        </p>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-cyan/20 rounded-full flex items-center justify-center">
                                                <span className="text-cyan font-semibold">SJ</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">Sarah Johnson</p>
                                                <p className="text-sm text-gray-500">Verified Customer</p>
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

            {/* Contact Details Footer Banner */}
            <div className="bg-cyan/5 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                        <a href="tel:0413636785" className="flex items-center space-x-2 text-gray-600 hover:text-cyan">
                            <FiPhone className="text-cyan" />
                            <span>Call/WhatsApp: 0413 636 785</span>
                        </a>
                        <a href="mailto:sparkwisecleaning@gmail.com" className="flex items-center space-x-2 text-gray-600 hover:text-cyan">
                            <FiMail className="text-cyan" />
                            <span>sparkwisecleaning@gmail.com</span>
                        </a>
                        <a 
                            href="https://www.facebook.com/SparkWise8?mibextid=ZbWKwL" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-600 hover:text-cyan"
                        >
                            <svg className="w-4 h-4 text-cyan" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                            <span>Follow us on Facebook</span>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ResidentialCleaning;
