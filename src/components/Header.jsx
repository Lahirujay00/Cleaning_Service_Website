import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    
    const isHomePage = location.pathname === '/';
    
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

    const isActiveRoute = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };
    
    const handleAnchorClick = (e, target) => {
        if (!isHomePage && target.startsWith('#')) {
            e.preventDefault();
            window.location.href = `/${target}`;
            return;
        }
        
        if (isHomePage && target.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(target);
            if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: offsetTop - 80,
                    behavior: 'smooth'
                });
                setIsMobileMenuOpen(false);
            }
        }
    };

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services', subItems: [
            { path: '/residential-cleaning', label: 'Residential Cleaning' },
            { path: '/office-cleaning', label: 'Office Cleaning' },
            { path: '/carpet-cleaning', label: 'Carpet Cleaning' },
            { path: '/window-cleaning', label: 'Window Cleaning' },
            { path: '/gutter-cleaning', label: 'Gutter Cleaning' },
            { path: '/high-pressure-washing', label: 'High Pressure Washing' }
        ]},
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact', isButton: true }
    ];
    
    const textColor = isHomePage && !isScrolled ? 'text-white' : 'text-[#333333]';
    const activeTextColor = 'text-[#2CA2B0]';
    
    return (
        <header 
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                isScrolled || !isHomePage ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center group">
                    <motion.span 
                        className={`text-2xl font-bold ${isScrolled || !isHomePage ? 'text-[#0A3D62]' : 'text-white'}`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        SparkWise
                    </motion.span>
                </Link>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <div key={item.path} className="relative group">
                            {item.isButton ? (
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link 
                                        to={item.path}
                                        className={`inline-flex items-center justify-center bg-[#2CA2B0] text-white px-6 py-2.5 rounded-full hover:bg-[#218393] transition-all shadow-md hover:shadow-lg ${
                                            isActiveRoute(item.path) ? 'bg-[#218393]' : ''
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ) : (
                                <>
                                    <Link 
                                        to={item.path}
                                        className={`relative group inline-block py-2 ${
                                            isActiveRoute(item.path) ? activeTextColor : textColor
                                        } hover:text-[#2CA2B0] transition-colors`}
                                    >
                                        <span className="flex items-center">
                                            {item.label}
                                            {item.subItems && (
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </span>
                                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2CA2B0] transition-all group-hover:w-full ${
                                            isActiveRoute(item.path) ? 'w-full' : ''
                                        }`}></span>
                                    </Link>
                                    {item.subItems && (
                                        <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                            <div className="py-2 mt-2 bg-white rounded-xl shadow-xl border border-gray-100">
                                                {item.subItems.map((subItem) => (
                                                    <Link
                                                        key={subItem.path}
                                                        to={subItem.path}
                                                        className={`block px-4 py-2.5 text-sm ${
                                                            isActiveRoute(subItem.path) ? 'text-[#2CA2B0] bg-gray-50' : 'text-gray-700'
                                                        } hover:text-[#2CA2B0] hover:bg-gray-50 transition-colors`}
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>
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
                        className={`w-6 h-6 ${textColor}`} 
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
            
            {/* Mobile Navigation */}
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
                                    {item.isButton ? (
                                        <Link 
                                            to={item.path}
                                            className={`bg-[#2CA2B0] text-white py-2.5 px-6 rounded-lg hover:bg-[#218393] transition-colors inline-block w-full text-center shadow-md ${
                                                isActiveRoute(item.path) ? 'bg-[#218393]' : ''
                                            }`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <>
                                            <Link 
                                                to={item.path}
                                                className={`block py-2 ${
                                                    isActiveRoute(item.path) ? 'text-[#2CA2B0]' : 'text-gray-700'
                                                } hover:text-[#2CA2B0] transition-colors`}
                                                onClick={() => !item.subItems && setIsMobileMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                            {item.subItems && (
                                                <div className="pl-4 space-y-1 mt-1">
                                                    {item.subItems.map((subItem) => (
                                                        <Link
                                                            key={subItem.path}
                                                            to={subItem.path}
                                                            className={`block py-2.5 text-sm ${
                                                                isActiveRoute(subItem.path) ? 'text-[#2CA2B0] bg-gray-50' : 'text-gray-600'
                                                            } hover:text-[#2CA2B0] hover:bg-gray-50 transition-colors rounded-lg pl-3`}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
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