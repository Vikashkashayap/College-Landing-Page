import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    country: '',
    course: '',
    intake: '',
    gre: '',
    gmat: '',
    sat: '',
    ielts: '',
    toefl: '',
    pte: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="hero-container">
      {/* Left Column - Promotional Section */}
      <div className="promotional-section">
        {/* Event Details */}
        <div className="event-details">
          <div className="event-info">
            <div className="info-item">
              <span className="icon">📅</span>
              <span>11th Aug</span>
            </div>
            <div className="info-item">
              <span className="icon">📍</span>
              <span>Taj, MG Road, Bengaluru</span>
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="floating-icons">
          <div className="floating-icon icon-1">🎓</div>
          <div className="floating-icon icon-2">✈️</div>
          <div className="floating-icon icon-3">🌍</div>
          <div className="floating-icon icon-4">💼</div>
          <div className="floating-icon icon-5">📚</div>
          <div className="floating-icon icon-6">🎯</div>
        </div>

        {/* Avatar and shapes */}
        <div className="hero-image-container">
          <div className="abstract-shapes">
            <div className="shape pink-semicircle"></div>
            <div className="shape blue-blob"></div>
            <div className="shape beige-quarter"></div>
            <div className="shape green-circle"></div>
            <div className="shape purple-triangle"></div>
            <div className="shape orange-diamond"></div>
          </div>
          <div className="hero-person">
            <div className="person-avatar">👨‍💼</div>
          </div>
        </div>

        {/* Benefits Card with overlap animation */}
        <div className="benefits-card-container">
          <div className="benefits-card">
            <h3>Get Your Global Ticket</h3>
            <ul>
              <li>1:1 Live Counselling</li>
              <li>On Spot Application</li>
              <li>0 Visa Fees</li>
              <li>15L in scholarships</li>
            </ul>
          </div>
        </div>

        {/* Additional animated elements */}
        <div className="pulse-circles">
          <div className="pulse-circle circle-1"></div>
          <div className="pulse-circle circle-2"></div>
          <div className="pulse-circle circle-3"></div>
        </div>

        {/* Success indicators */}
        <div className="success-indicators">
          <div className="indicator">
            <span className="indicator-number">500+</span>
            <span className="indicator-text">Students Placed</span>
          </div>
          <div className="indicator">
            <span className="indicator-number">50+</span>
            <span className="indicator-text">Universities</span>
          </div>
          <div className="indicator">
            <span className="indicator-number">95%</span>
            <span className="indicator-text">Success Rate</span>
          </div>
        </div>
      </div>

      {/* Right Column - Registration Section */}
      <div className="registration-section">
        <div className="form-container">
          <h1 className="main-title">India's Biggest Study Abroad Expo</h1>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Name*" value={formData.name} onChange={handleInputChange} required />
            </div>

            <div className="form-group">
              <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleInputChange} required />
            </div>

            <div className="form-group phone-group">
              <select className="country-code">
                <option value="91">+91</option>
                <option value="1">+1</option>
                <option value="44">+44</option>
              </select>
              <input type="tel" name="phone" placeholder="Phone Number*" value={formData.phone} onChange={handleInputChange} required />
            </div>

            <div className="form-row-group">
              <div className="form-group half-width">
                <select name="state" value={formData.state} onChange={handleInputChange} required>
                  <option value="">Current State*</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="delhi">Delhi</option>
                  <option value="tamilnadu">Tamil Nadu</option>
                </select>
              </div>
              <div className="form-group half-width">
                <select name="city" value={formData.city} onChange={handleInputChange} required>
                  <option value="">Current City*</option>
                  <option value="bengaluru">Bengaluru</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="chennai">Chennai</option>
                </select>
              </div>
            </div>

            <div className="form-row-group">
              <div className="form-group half-width">
                <select name="country" value={formData.country} onChange={handleInputChange} required>
                  <option value="">Country Preference*</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                </select>
              </div>
              <div className="form-group half-width">
                <select name="course" value={formData.course} onChange={handleInputChange} required>
                  <option value="">Course*</option>
                  <option value="ms">MS</option>
                  <option value="mba">MBA</option>
                  <option value="phd">PhD</option>
                  <option value="bachelors">Bachelors</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <select name="intake" value={formData.intake} onChange={handleInputChange} required>
                <option value="">Intake Preference*</option>
                <option value="fall2024">Fall 2024</option>
                <option value="spring2025">Spring 2025</option>
                <option value="fall2025">Fall 2025</option>
              </select>
            </div>

            {/* Score Fields */}
            <div className="scores-section">
              <h4>Enter scores for exams if given, else leave blank:</h4>
              <div className="scores-grid">
                <div className="form-group">
                  <input type="text" name="gre" placeholder="GRE Score" value={formData.gre} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <input type="text" name="gmat" placeholder="GMAT Score" value={formData.gmat} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <input type="text" name="sat" placeholder="SAT Score" value={formData.sat} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <input type="text" name="ielts" placeholder="IELTS Score" value={formData.ielts} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <input type="text" name="toefl" placeholder="TOEFL Score" value={formData.toefl} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <input type="text" name="pte" placeholder="PTE Score" value={formData.pte} onChange={handleInputChange} />
                </div>
              </div>
            </div>

            <button type="submit" className="submit-btn">Submit Registration</button>
          </form>

          <button className="secondary-btn">Click here</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
