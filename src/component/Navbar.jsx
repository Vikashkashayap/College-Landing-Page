import React, { useState } from 'react'
import RegistrationForm from './RegistrationForm'
import Sponser from './Sponser'
import './Navbar.css'

const Navbar = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleRegisterClick = () => {
    setIsRegistrationOpen(true);
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
      <div className="navbar-wrapper">
        {/* Sponser component at the top */}
        <Sponser />
        
        {/* Navbar below the sponsor */}
        <nav className="navbar">
          {/* Left: Logo + Study Abroad */}
          <div className="navbar-left">
            {/* Logo */}
            <span className="navbar-logo">🧑‍🎓</span>
            {/* Text and button stacked */}
            <div className="navbar-brand">
              <span className="navbar-brand-text">
                collegedunia
                <span className="navbar-brand-domain">.com</span>
              </span>
              <button className="study-abroad-btn">Study Abroad</button>
            </div>
          </div>

          {/* Center: Heading - Hidden on mobile */}
          <div className="navbar-center">
            <span className="navbar-heading">
              Assured Admit{' '}
              <span className="navbar-heading-gradient">
                For Studying Abroad
              </span>
            </span>
          </div>

          {/* Right: Register Now - Hidden on mobile */}
          <div className="navbar-right">
            <button 
              onClick={handleRegisterClick}
              className="register-btn"
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-btn">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
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
              >
                Register Now
              </button>
            </div>
          </div>
        )}
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
