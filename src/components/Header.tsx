'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - NOT Fixed */}
      <div className="bg-yellow-700 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>📞 +91 96286 79606</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden md:block">📍 55, Pattharkata Chauraha, Civil Lines, Fatehpur, Uttar Pradesh 212601</span>
            <button className="bg-white text-yellow-700 px-3 py-1 rounded text-xs font-semibold hover:bg-gray-100 transition-colors">
              CALL NOW
            </button>
          </div>
        </div>
      </div>

      {/* Main Header - Fixed */}
      <header className={`fixed w-full z-40 top-10 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-700 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">☀️</span>
              </div>
              <div>
                <h1 className="text-xl font-black text-yellow-700 tracking-wider">RAM ENTERPRISES</h1>
                <p className="text-xs text-gray-600 font-medium">Solar Energy Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-yellow-700 font-medium transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-yellow-700 font-medium transition-colors">
                About Us
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-yellow-700 font-medium transition-colors">
                Services
              </Link>
              <Link href="#why-choose" className="text-gray-700 hover:text-yellow-700 font-medium transition-colors">
                Why Choose Us
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-yellow-700 font-medium transition-colors">
                Contact
              </Link>
              
              <div className="flex items-center space-x-3">
                <a
                  href="tel:+919628679606"
                  className="bg-yellow-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-800 transition-colors"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919628679606"
                  className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 animate-fadeInUp">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-700 hover:text-yellow-700 font-medium py-2">
                  Home
                </Link>
                <Link href="#about" className="text-gray-700 hover:text-yellow-700 font-medium py-2">
                  About Us
                </Link>
                <Link href="#services" className="text-gray-700 hover:text-yellow-700 font-medium py-2">
                  Services
                </Link>
                <Link href="#why-choose" className="text-gray-700 hover:text-yellow-700 font-medium py-2">
                  Why Choose Us
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-yellow-700 font-medium py-2">
                  Contact
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <a
                    href="tel:+919628679606"
                    className="bg-yellow-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-800 transition-colors text-center"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919628679606"
                    className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors text-center"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
