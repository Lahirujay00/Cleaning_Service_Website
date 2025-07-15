import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'; // Import icons

// Ensure Tailwind JIT includes these hover classes
// hover:text-white
// hover:text-cyan
// hover:text-blue-700
// hover:bg-blue-50

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const location = useLocation();
    
    const isHomePage = location.pathname === '/'; // Dynamically detect home page
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Scroll threshold for solid background
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        
        handleScroll(); // Set initial state
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Simplified color logic
    const getLogoColor = () => {
        if (isHomePage && !isScrolled) {
            return 'text-white';
        }
        return 'text-cyan';
    };
    const getNavLinkClasses = (itemPath, isMobile = false) => {
        const isActive = isActiveRoute(itemPath);
        let textColorClass;

        if (isHomePage && !isScrolled && !isMobile) {
            textColorClass = isActive ? 'text-cyan font-semibold' : 'text-white';
        } else {
            textColorClass = isActive ? 'text-cyan font-semibold' : 'text-neutral-dark';
        }

        const baseClasses = isMobile
            ? 'block py-2 text-lg font-medium transition-colors duration-200'
            : 'py-2 font-medium transition-colors duration-200 relative inline-block';
        const hoverClass = 'hover:text-cyan';
        const underlineClass = `absolute -bottom-0.5 left-0 h-0.5 bg-cyan transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : 'w-0'}`;

        return {
            text: `${baseClasses} ${textColorClass} ${hoverClass}`,
            underline: underlineClass,
            icon: `${textColorClass} ${hoverClass}`,
        };
    };
    const getSubLinkClasses = (subItemPath) => {
        const isActive = location.pathname === subItemPath;
        return `block px-4 py-2 text-base transition-colors duration-150 rounded-md ${
            isActive ? 'text-cyan bg-neutral-light font-semibold' : 'text-neutral-dark'
        } hover:text-cyan hover:bg-neutral-light`;
    };
    
    const isActiveRoute = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        
        if (path === '/services' && (location.pathname.includes('-cleaning') || location.pathname.includes('-washing'))) {
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
    
    const headerClasses = `
        fixed w-full top-0 z-50 transition-all duration-300 py-4
        ${isHomePage && !isScrolled ? 'bg-transparent' : 'bg-white shadow-lg'}
    `;

    return (
        <header className={headerClasses}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center group">
                    <span className={`text-3xl font-extrabold ${getLogoColor()}`}>
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
                                    className={`${getNavLinkClasses(item.path).text} inline-flex items-center cursor-pointer`}
                                >
                                    <span>{item.label}</span>
                                    <FaChevronDown 
                                        className={`w-3 h-3 ml-1.5 transition-transform duration-200 ${
                                            isServicesDropdownOpen ? 'rotate-180' : ''
                                        } ${getNavLinkClasses(item.path).icon}`} 
                                    />
                                    <span className={getNavLinkClasses(item.path).underline}></span>
                                </div>
                            ) : (
                                <Link 
                                    to={item.path}
                                    className={getNavLinkClasses(item.path).text}
                                >
                                    <span>{item.label}</span>
                                    <span className={getNavLinkClasses(item.path).underline}></span>
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
                                                    className={getSubLinkClasses(subItem.path)}
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
                        <button className="bg-cyan hover:bg-opacity-90 text-white font-bold py-2.5 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg">
                            Get a Free Quote
                        </button>
                    </Link>
                </nav>
                
                {/* Mobile Menu Button */}
                <motion.button 
                    className={`md:hidden p-2 rounded-lg ${getNavLinkClasses(location.pathname, true).text}`}
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
                                        className={getNavLinkClasses(item.path, true).text}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            if (item.subItems) setIsServicesDropdownOpen(!isServicesDropdownOpen);
                                        }}
                                    >
                                        <span className="flex items-center justify-between">
                                            {item.label}
                                            {item.subItems && (
                                                <FaChevronDown 
                                                    className={`w-3 h-3 transition-transform duration-200 ${
                                                        isServicesDropdownOpen ? 'rotate-180' : ''
                                                    } ${getNavLinkClasses(item.path).icon}`} 
                                                />
                                            )}
                                        </span>
                                    </Link>
                                    {item.subItems && isServicesDropdownOpen && (
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
                                                    className={getSubLinkClasses(subItem.path)}
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
                                <button className="w-full bg-cyan hover:bg-opacity-90 text-white font-bold py-2.5 px-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg">
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
