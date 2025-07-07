import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

    // Text colors are now fixed for solid header
    const textColor = 'text-gray-600';
    const activeTextColor = 'text-[#0A3D62] font-semibold';
    
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
                    <span 
                        // Text color fixed for solid header
                        className={`text-2xl font-bold text-[#0A3D62]`}
                    >
                        SparkWise
                    </span>
                </Link>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <div 
                            key={item.path} 
                            className="relative group"
                            onMouseEnter={() => item.subItems && setIsServicesDropdownOpen(true)}
                            onMouseLeave={() => item.subItems && setIsServicesDropdownOpen(false)}
                        >
                            {item.subItems ? (
                                <div // Changed from Link to div
                                    className={`relative inline-block py-2 cursor-pointer ${
                                        isActiveRoute(item.path) ? activeTextColor : textColor
                                    } hover:text-[#0A3D62] transition-colors`}
                                >
                                    <span className="flex items-center">
                                        {item.label}
                                        <svg 
                                            className={`w-4 h-4 ml-1 transition-transform ${
                                                isServicesDropdownOpen ? 'rotate-180' : '' // Use new state
                                            }`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0A3D62] transition-all group-hover:w-full ${
                                        isActiveRoute(item.path) ? 'w-full' : ''
                                    }`}></span>
                                </div>
                            ) : (
                                <Link 
                                    to={item.path}
                                    className={`header-nav relative inline-block py-2 ${
                                        isActiveRoute(item.path) ? activeTextColor : textColor
                                    } hover:text-[#0A3D62] transition-colors`}
                                    style={{ outline: 'none !important', boxShadow: 'none !important', border: 'none !important' }}
                                >
                                    <span className="flex items-center">
                                        {item.label}
                                    </span>
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0A3D62] transition-all group-hover:w-full ${
                                        isActiveRoute(item.path) ? 'w-full' : ''
                                    }`}></span>
                                </Link>
                            )}
                            {item.subItems && (
                                <div className={`absolute left-0 mt-2 w-64 ${
                                    isServicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible' // Use new state
                                } transition-all duration-300`}>
                                    <div className="py-2 mt-2 bg-white rounded-xl shadow-xl border border-gray-100">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.path}
                                                to={subItem.path}
                                                className={`header-nav block px-4 py-2.5 text-sm ${
                                                    location.pathname === subItem.path
                                                        ? 'text-[#0A3D62] bg-gray-50 font-semibold' 
                                                        : 'text-gray-600'
                                                } hover:text-[#0A3D62] hover:bg-gray-50 transition-colors rounded-lg pl-3`}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    style={{ outline: 'none !important', boxShadow: 'none !important', border: 'none !important' }}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
                
                {/* Mobile Menu Button */}
                <motion.button 
                    className="md:hidden p-2 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Toggle menu"
                >
                    <svg 
                        className={`w-6 h-6 text-gray-600`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </motion.button>
            </div>
            
            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white shadow-lg border-t border-gray-100"
                    >
                        <nav className="flex flex-col space-y-2 p-4">
                            {navItems.map((item) => (
                                <div key={item.path}>
                                    <Link 
                                        to={item.path}
                                        className={`header-nav block py-2 ${
                                            isActiveRoute(item.path)
                                                ? 'text-[#0A3D62] font-semibold' 
                                                : 'text-gray-600'
                                        } hover:text-[#0A3D62] transition-colors`}
                                        onClick={() => !item.subItems && setIsMobileMenuOpen(false)}
                                        style={{ outline: 'none !important', boxShadow: 'none !important', border: 'none !important' }}
                                    >
                                        {item.label}
                                    </Link>
                                    {item.subItems && (
                                        <div className="pl-4 space-y-1 mt-1">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.path}
                                                    to={subItem.path}
                                                    className={`block py-2.5 text-sm focus:outline-none ${
                                                        location.pathname === subItem.path
                                                            ? 'text-[#0A3D62] bg-gray-50 font-semibold' 
                                                            : 'text-gray-600'
                                                    } hover:text-[#0A3D62] hover:bg-gray-50 transition-colors rounded-lg pl-3`}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
