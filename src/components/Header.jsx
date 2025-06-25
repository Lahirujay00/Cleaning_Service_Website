import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <span className={`text-2xl font-bold ${isScrolled ? 'text-[#0A3D62]' : 'text-white'}`}>
            CleanPro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-[#333333] hover:text-[#2CA2B0]' 
                  : 'text-white hover:text-[#2CA2B0]'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className={`px-5 py-2 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-lg ${
              isScrolled
                ? 'bg-[#2CA2B0] text-white hover:bg-[#218393]'
                : 'bg-white text-[#0A3D62] hover:bg-[#F0F9FF]'
            }`}
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            className={`w-6 h-6 ${isScrolled ? 'text-[#0A3D62]' : 'text-white'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
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
          {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-[#333333] hover:text-[#2CA2B0] font-medium border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="block mt-4 text-center py-3 bg-[#2CA2B0] text-white rounded-md hover:bg-[#218393]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;