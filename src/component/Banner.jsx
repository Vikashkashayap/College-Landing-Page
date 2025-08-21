import React, { useState } from 'react';
import './Banner.css';
import RegistrationForm from './RegistrationForm';

const Banner = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const stats = [
    { label: 'Students', value: '30M+', description: 'Trusted by millions worldwide' },
    { label: 'Successful Connect', value: '100k+', description: 'Students placed successfully' },
    { label: 'Local Experts', value: '2,500+', description: 'Expert guidance available' },
    { label: 'User Satisfaction', value: '92%', description: 'Highly rated service' }
  ];

  const handleRegisterClick = () => {
    setIsRegistrationOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu when registering
  };

  const handleApplyClick = () => {
    setIsRegistrationOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu when applying
  };

  return (
    <div className="banner-container">
      {/* Visa Fee Section */}
      <div className="banner-section visa-section">
        <div className="content-wrapper">
          <div className="text-content">
            <div className="offer-badge">Limited Time Offer</div>
            <h2>Save upto 60,000</h2>
            <p>On Visa Fee</p>
            <div className="benefits-list">
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Expert visa guidance & documentation</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>100% visa approval rate</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>Fast-track processing available</span>
              </div>
            </div>
            <div className="cta-section">
              <button className="register-btn" onClick={handleRegisterClick}>Register Now</button>
              <div className="trust-indicator">
                <span className="trust-icon">🔒</span>
                <span className="trust-text">Secure & Trusted</span>
              </div>
            </div>
          </div>
          <div className="icon-wrapper">
            <img src="/megaphone-icon.svg" alt="Megaphone" className="megaphone-icon" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="banner-section stats-section">
        <h3 className="stats-title">The Numbers Speak</h3>
        <p className="stats-subtitle">Join thousands of successful students who chose Collegehai for their study abroad journey</p>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h4>{stat.value}</h4>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
        <div className="stats-highlight">
          <div className="highlight-icon">🎯</div>
          <p className="stats-note">Get ahead in your career with Collegehai, do not miss this golden chance for Jan'23 intake</p>
        </div>
      </div>

      {/* Scholarship Section */}
      <div className="banner-section scholarship-section">
        <div className="content-wrapper">
          <div className="text-content">
            <div className="scholarship-badge">Exclusive Offer</div>
            <h2>Get scholarships worth</h2>
            <p>INR 15L</p>
            <div className="scholarship-details">
              <div className="scholarship-feature">
                <span className="feature-icon">🎓</span>
                <span>Merit-based scholarships</span>
              </div>
              <div className="scholarship-feature">
                <span className="feature-icon">💰</span>
                <span>Need-based financial aid</span>
              </div>
              <div className="scholarship-feature">
                <span className="feature-icon">🏆</span>
                <span>Excellence awards</span>
              </div>
            </div>
            <div className="cta-section">
              <button className="apply-btn" onClick={handleApplyClick}>Apply Now</button>
              <div className="scholarship-highlight">
                <span className="highlight-icon">⭐</span>
                <span className="highlight-text">Limited Time Opportunity</span>
              </div>
            </div>
          </div>
          <div className="icon-wrapper">
            <img src="/graduation-cap.svg" alt="Graduation Cap" className="cap-icon" />
          </div>
        </div>
      </div>
      <RegistrationForm isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />
    </div>
  );
};

export default Banner;
