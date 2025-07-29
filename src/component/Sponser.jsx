import React, { useState } from 'react'
import './Sponser.css'
import RegistrationForm from './RegistrationForm'

const Sponser = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleBannerClick = () => {
    setIsRegistrationOpen(true);
  };

  const handleCloseRegistration = () => {
    setIsRegistrationOpen(false);
  };

  return (
    <div className="sponser-container">
      <div className="moving-banner" onClick={handleBannerClick} style={{ cursor: 'pointer' }}>
        <div className="banner-content">
          <span className="banner-item">Scholarships Upto 15L</span>
          <span className="banner-separator">-</span>
          <span className="banner-item">Click To Register</span>
          <span className="banner-separator">-</span>
          <span className="banner-item">1:1 Live Counselling</span>
          <span className="banner-separator">-</span>
          <span className="banner-item">On Spot Application</span>
          <span className="banner-separator">-</span>
          <span className="banner-item">0 Visa Fee</span>
          <span className="banner-separator">-</span>
          <span className="banner-item">Scholarships Upto 15L</span>
          <span className="banner-separator">-</span>
          <span className="banner-item">Click To Register</span>
          <span className="banner-separator">-</span>
          <span className="banner-item">1:1 Live Counselling</span>
          <span className="banner-separator">-</span>
          <span className="banner-item">On Spot Application</span>
          <span className="banner-separator">-</span>
          <span className="banner-item">0 Visa Fee</span>
        </div>
      </div>
      
      <RegistrationForm 
        isOpen={isRegistrationOpen} 
        onClose={handleCloseRegistration} 
      />
    </div>
  )
}

export default Sponser

