import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); // Single state for tracking hover

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = ['Home', 'Services', 'About', 'Testimonials', 'Contact'];

  // Custom text rendering to eliminate white outline
  const NavText = ({ children, isActive = false }) => {
    const baseStyle = {
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 500,
      letterSpacing: '0.01em',
      backgroundColor: isScrolled ? 'transparent' : 'transparent',
      color: isScrolled ? '#333333' : '#FFFFFF',
      padding: '2px 4px',
      borderRadius: '2px',
      transition: 'color 0.3s ease',
      transform: 'translateZ(0)',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
      textShadow: 'none',
      outline: 'none',
      boxShadow: 'none'
    };

    const hoverStyle = {
      color: '#2CA2B0',
    };

    return (
      <span 
        style={isActive ? { ...baseStyle, ...hoverStyle } : baseStyle}
        className="nav-text"
      >
        {children}
      </span>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span 
            className="text-2xl font-bold"
            style={{
              color: isScrolled ? '#0A3D62' : '#FFFFFF',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility',
              textShadow: 'none'
            }}
          >
            CleanPro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="font-medium py-1"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ border: 'none', outline: 'none' }}
            >
              <NavText isActive={hoveredItem === item}>{item}</NavText>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className={`px-5 py-2 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-lg ${
              isScrolled
                ? 'bg-[#2CA2B0] hover:bg-[#218393]'
                : 'bg-white hover:bg-[#F0F9FF]'
            }`}
            style={{
              color: isScrolled ? '#FFFFFF' : '#0A3D62',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textShadow: 'none',
              outline: 'none',
              boxShadow: 'none',
              border: 'none'
            }}
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ 
            color: isScrolled ? '#0A3D62' : '#FFFFFF',
            outline: 'none',
            border: 'none'
          }}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {!isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          {navItems.map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-[#333333] hover:text-[#2CA2B0] font-medium border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                outline: 'none',
                border: 'none'
              }}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="block mt-4 text-center py-3 bg-[#2CA2B0] text-white rounded-md hover:bg-[#218393]"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              outline: 'none'
            }}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;