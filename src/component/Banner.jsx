import React from 'react';
import './Banner.css';

const Banner = () => {
  const stats = [
    { label: 'Students', value: '30M+' },
    { label: 'Successful Connect', value: '100k+' },
    { label: 'Local Experts', value: '2,500+' },
    { label: 'User Satisfaction', value: '92%' }
  ];

  return (
    <div className="banner-container">
      {/* Visa Fee Section */}
      <div className="banner-section visa-section">
        <div className="content-wrapper">
          <div className="text-content">
            <h2>Save upto 60,000</h2>
            <p>On Visa Fee</p>
            <button className="register-btn">Register Now</button>
          </div>
          <div className="icon-wrapper">
            <img src="/megaphone-icon.svg" alt="Megaphone" className="megaphone-icon" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="banner-section stats-section">
        <h3 className="stats-title">The Numbers Speak</h3>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h4>{stat.value}</h4>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="stats-note">Get ahead in your career with Collegehai, do not miss this golden chance for Jan'23 intake</p>
      </div>

      {/* Scholarship Section */}
      <div className="banner-section scholarship-section">
        <div className="content-wrapper">
          <div className="text-content">
            <h2>Get scholarships worth</h2>
            <p>INR 15L</p>
            <button className="apply-btn">Apply Now</button>
          </div>
          <div className="icon-wrapper">
            <img src="/graduation-cap.svg" alt="Graduation Cap" className="cap-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
