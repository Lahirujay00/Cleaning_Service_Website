import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    
    // Determine if we're on the home page for proper styling
    const isHomePage = location.pathname === '/';
    
    // Handle scroll event to change header style
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        
        // Initial check
        handleScroll();
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Handle anchor links
    const handleAnchorClick = (e, target) => {
        if (!isHomePage && target.startsWith('#')) {
            e.preventDefault();
            // Navigate to home page with the anchor
            window.location.href = `/${target}`;
            return;
        }
        
        if (isHomePage && target.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(target);
            if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: offsetTop - 80, // Offset for header height
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                setIsMobileMenuOpen(false);
            }
        }
    };
    
    // Determine text color based on page and scroll position
    const textColor = isHomePage && !isScrolled ? 'text-white' : 'text-[#333333]';
    
    return (
        <header 
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                isScrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <span className={`text-2xl font-bold ${isScrolled || !isHomePage ? 'text-[#0A3D62]' : 'text-white'}`}>
                        SparkWise
                    </span>
                </Link>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link 
                        to="/" 
                        className={`${textColor} hover:text-[#2CA2B0] transition-colors`}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/#services" 
                        onClick={(e) => handleAnchorClick(e, '#services')}
                        className={`${textColor} hover:text-[#2CA2B0] transition-colors`}
                    >
                        Services
                    </Link>
                    <Link 
                        to="/#about" 
                        onClick={(e) => handleAnchorClick(e, '#about')}
                        className={`${textColor} hover:text-[#2CA2B0] transition-colors`}
                    >
                        About
                    </Link>
                    <Link 
                        to="/contact" 
                        className="bg-[#2CA2B0] text-white py-2 px-6 rounded-lg hover:bg-[#218393] transition-colors"
                    >
                        Contact Us
                    </Link>
                </nav>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-2xl p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                </button>
            </div>
            
            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white py-4 px-4 shadow-lg">
                    <nav className="flex flex-col space-y-4">
                        <Link 
                            to="/" 
                            className="text-[#333333] hover:text-[#2CA2B0] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/#services" 
                            onClick={(e) => {
                                handleAnchorClick(e, '#services');
                                setIsMobileMenuOpen(false);
                            }}
                            className="text-[#333333] hover:text-[#2CA2B0] transition-colors"
                        >
                            Services
                        </Link>
                        <Link 
                            to="/#about" 
                            onClick={(e) => {
                                handleAnchorClick(e, '#about');
                                setIsMobileMenuOpen(false);
                            }}
                            className="text-[#333333] hover:text-[#2CA2B0] transition-colors"
                        >
                            About
                        </Link>
                        <Link 
                            to="/contact" 
                            className="bg-[#2CA2B0] text-white py-2 px-4 rounded-lg hover:bg-[#218393] transition-colors inline-block"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;