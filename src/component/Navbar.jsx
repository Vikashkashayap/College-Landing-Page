import React, { useState, useEffect } from 'react'
import RegistrationForm from './RegistrationForm'
import Sponser from './Sponser'
import './Navbar.css'

const Navbar = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.navbar-wrapper')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const handleRegisterClick = () => {
    setIsRegistrationOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu when registering
  };

  const handleCloseRegistration = () => {
    setIsRegistrationOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Wrapper div containing both Sponser and Navbar */}
      <div className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        {/* Sponser component at the top */}
        <Sponser />
        
        {/* Navbar below the sponsor */}
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          {/* Left: Logo + Study Abroad */}
          <div className="navbar-left">
            {/* Logo */}
            <span className="navbar-logo" role="img" aria-label="Student">🎓</span>
            {/* Text and button stacked */}
            <div className="navbar-brand">
              <button className="study-abroad-btn">Explore Opportunities</button>
            </div>
          </div>

          {/* Center: Heading - Hidden on mobile */}
          <div className="navbar-center">
            <span className="navbar-heading">
            Study Abroad{' '}
              <span className="navbar-heading-gradient">
              Admission Guarantee
              </span> 
            </span>
          </div>

          {/* Right: Register Now - Hidden on mobile */}
          <div className="navbar-right">
            <button 
              onClick={handleRegisterClick}
              className="register-btn"
              aria-label="Register Now"
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn">
            <button 
              onClick={toggleMobileMenu}
              className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {/* Mobile Heading */}
          <div className="mobile-heading">
            <span className="mobile-heading-text">
              Assured Admit{' '}
              <span className="navbar-heading-gradient">
                For Studying Abroad
              </span>
            </span>
          </div>

          {/* Mobile Register Button */}
          <div className="mobile-register-container">
            <button 
              onClick={handleRegisterClick}
              className="mobile-register-btn"
              aria-label="Register Now"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Registration Form Modal */}
      <RegistrationForm 
        isOpen={isRegistrationOpen} 
        onClose={handleCloseRegistration} 
      />
    </>
  )
}

export default Navbar
