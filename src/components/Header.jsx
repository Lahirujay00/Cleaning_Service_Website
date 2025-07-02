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

    const textColor = isHomePage && !isScrolled ? 'text-white' : 'text-gray-600';
    const activeTextColor = isHomePage && !isScrolled 
        ? 'text-white font-semibold' 
        : 'text-[#0A3D62] font-semibold';
    
    const isActiveRoute = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        
        if (path === '/services') {
            return location.pathname.includes('cleaning');
        }
        
        return location.pathname === path;
    };

    const isActiveSubRoute = (path) => {
        return location.pathname === path;
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
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                isScrolled || !isHomePage ? 'bg-white shadow-lg' : 'bg-transparent'
            } py-3`}
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
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <div key={item.path} className="relative group">
                            <Link 
                                to={item.path}
                                className={`relative group inline-block py-2 ${
                                    isActiveRoute(item.path) ? activeTextColor : textColor
                                } hover:${isHomePage && !isScrolled ? 'text-white/80' : 'text-[#0A3D62]'} transition-colors`}
                            >
                                <span className="flex items-center">
                                    {item.label}
                                    {item.subItems && (
                                        <svg 
                                            className={`w-4 h-4 ml-1 transition-transform ${
                                                isActiveRoute(item.path) ? 'rotate-180' : ''
                                            }`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </span>
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                                    isHomePage && !isScrolled ? 'bg-white' : 'bg-[#0A3D62]'
                                } transition-all group-hover:w-full ${
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
                                                    location.pathname === subItem.path
                                                        ? 'text-[#0A3D62] bg-gray-50 font-semibold' 
                                                        : 'text-gray-600'
                                                } hover:text-[#0A3D62] hover:bg-gray-50 transition-colors`}
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
                        className={`w-6 h-6 ${isHomePage && !isScrolled ? 'text-white' : 'text-gray-600'}`} 
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
                                        className={`block py-2 ${
                                            isActiveRoute(item.path)
                                                ? 'text-[#0A3D62] font-semibold' 
                                                : 'text-gray-600'
                                        } hover:text-[#0A3D62] transition-colors`}
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