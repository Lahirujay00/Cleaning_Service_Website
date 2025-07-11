import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'; // Import icons

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); // New state for dropdown
    const location = useLocation();
    
    // isHomePage will now always be false for styling purposes to ensure solid header
    const isHomePage = false; 
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const textColor = 'text-gray-700'; // Adjusted for better contrast
    const activeTextColor = 'text-blue-700 font-semibold'; // Adjusted for modern look
    const hoverTextColor = 'text-blue-500'; // New hover color
    
    const isActiveRoute = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        
        // Check if current path is a sub-item of services
        if (path === '/services' && location.pathname.includes('-cleaning') || location.pathname.includes('-washing')) {
            return true;
        }
        
        return location.pathname === path;
    };

    const navItems = [
        { path: '/', label: 'Home' },
        { 
            path: '/services', 
            label: 'Services',
            subItems: [
                { path: '/residential-cleaning', label: 'Residential Cleaning' },
                { path: '/office-cleaning', label: 'Office Cleaning' },
                { path: '/carpet-cleaning', label: 'Carpet Cleaning' },
                { path: '/window-cleaning', label: 'Window Cleaning' },
                { path: '/gutter-cleaning', label: 'Gutter Cleaning' },
                { path: '/high-pressure-washing', label: 'High Pressure Washing' }
            ]
        },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' }
    ];
    
    return (
        <header 
            // Header is always solid white with shadow
            className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white shadow-lg py-3`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center group">
                    <span className={`text-3xl font-extrabold text-blue-800`}>
                        SparkWise
                    </span>
                </Link>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <div 
                            key={item.path} 
                            className="relative group"
                            onMouseEnter={() => item.subItems && setIsServicesDropdownOpen(true)}
                            onMouseLeave={() => item.subItems && setIsServicesDropdownOpen(false)}
                        >
                            {item.subItems ? (
                                <div 
                                    className={`relative inline-flex items-center py-2 cursor-pointer text-lg font-medium ${
                                        isActiveRoute(item.path) ? activeTextColor : textColor
                                    } hover:${hoverTextColor} transition-colors duration-200`}
                                >
                                    <span>{item.label}</span>
                                    <FaChevronDown 
                                        className={`w-3 h-3 ml-1.5 transition-transform duration-200 ${
                                            isServicesDropdownOpen ? 'rotate-180' : ''
                                        }`} 
                                    />
                                    <span className={`absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                                        isActiveRoute(item.path) ? 'w-full' : ''
                                    }`}></span>
                                </div>
                            ) : (
                                <Link 
                                    to={item.path}
                                    className={`relative inline-block py-2 text-lg font-medium ${
                                        isActiveRoute(item.path) ? activeTextColor : textColor
                                    } hover:${hoverTextColor} transition-colors duration-200`}
                                >
                                    <span>{item.label}</span>
                                    <span className={`absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                                        isActiveRoute(item.path) ? 'w-full' : ''
                                    }`}></span>
                                </Link>
                            )}
                            {item.subItems && (
                                <AnimatePresence>
                                {isServicesDropdownOpen && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 mt-2 w-64 z-50 origin-top-left"
                                    >
                                        <div className="py-2 bg-white rounded-lg shadow-xl border border-gray-100">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.path}
                                                    to={subItem.path}
                                                    className={`block px-4 py-2 text-base ${
                                                        location.pathname === subItem.path
                                                            ? 'text-blue-700 bg-blue-50 font-semibold' 
                                                            : 'text-gray-700'
                                                    } hover:text-blue-700 hover:bg-blue-50 transition-colors duration-150 rounded-md`}
                                                    onClick={() => {
                                                        setIsMobileMenuOpen(false);
                                                        setIsServicesDropdownOpen(false);
                                                    }}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                    {/* CTA Button */}
                    <Link to="/contact" className="ml-6">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                            Get a Free Quote
                        </button>
                    </Link>
                </nav>
                
                {/* Mobile Menu Button */}
                <motion.button 
                    className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <FaTimes className="w-6 h-6" />
                    ) : (
                        <FaBars className="w-6 h-6" />
                    )}
                </motion.button>
            </div>
            
            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white shadow-lg border-t border-gray-100 py-4"
                    >
                        <nav className="flex flex-col space-y-2 px-4">
                            {navItems.map((item) => (
                                <div key={item.path}>
                                    <Link 
                                        to={item.path}
                                        className={`block py-2 text-lg font-medium ${
                                            isActiveRoute(item.path)
                                                ? 'text-blue-700 font-semibold' 
                                                : 'text-gray-700'
                                        } hover:text-blue-500 transition-colors`}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            if (item.subItems) setIsServicesDropdownOpen(!isServicesDropdownOpen); // Toggle dropdown in mobile
                                        }}
                                    >
                                        <span className="flex items-center justify-between">
                                            {item.label}
                                            {item.subItems && (
                                                <FaChevronDown 
                                                    className={`w-3 h-3 transition-transform duration-200 ${
                                                        isServicesDropdownOpen ? 'rotate-180' : ''
                                                    }`} 
                                                />
                                            )}
                                        </span>
                                    </Link>
                                    {item.subItems && isServicesDropdownOpen && ( // Only show if dropdown is open
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="pl-4 space-y-1 mt-1 border-l border-gray-200"
                                        >
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.path}
                                                    to={subItem.path}
                                                    className={`block py-2 text-base ${
                                                        location.pathname === subItem.path
                                                            ? 'text-blue-700 bg-blue-50 font-semibold' 
                                                            : 'text-gray-700'
                                                    } hover:text-blue-700 hover:bg-blue-50 transition-colors rounded-md`}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                            {/* Mobile CTA Button */}
                            <Link to="/contact" className="mt-4 block">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                                    Get a Free Quote
                                </button>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
