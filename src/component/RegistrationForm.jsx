import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    countryCode: '91',
    currentState: '',
    currentCity: '',
    countryPreference: '',
    courseInterested: '',
    intakePreference: '',
    greScore: '',
    gmatScore: '',
    satScore: '',
    ieltsScore: '',
    toeflScore: '',
    pteScore: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2 className="modal-title">
            <span className="title-highlight">You Are One Step Closer...</span>
            <br />
            <span className="title-main">To Your Study Abroad Dream</span>
          </h2>
          <p className="modal-subtitle">Fill the form below to confirm your spot!</p>
        </div>

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-section">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number*</label>
                <div className="phone-input-container">
                
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone Number*"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="currentState">Current State*</label>
                <select
                  id="currentState"
                  name="currentState"
                  value={formData.currentState}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select State</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="delhi">Delhi</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                  <option value="telangana">Telangana</option>
                  <option value="gujarat">Gujarat</option>
                  <option value="west-bengal">West Bengal</option>
                  <option value="rajasthan">Rajasthan</option>
                  <option value="uttar-pradesh">Uttar Pradesh</option>
                  <option value="andhra-pradesh">Andhra Pradesh</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="currentCity">Current City*</label>
                <select
                  id="currentCity"
                  name="currentCity"
                  value={formData.currentCity}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select City</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="ahmedabad">Ahmedabad</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="pune">Pune</option>
                  <option value="jaipur">Jaipur</option>
                  <option value="lucknow">Lucknow</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="countryPreference">Country Preference*</label>
                <select
                  id="countryPreference"
                  name="countryPreference"
                  value={formData.countryPreference}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Country</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                  <option value="ireland">Ireland</option>
                  <option value="new-zealand">New Zealand</option>
                  <option value="singapore">Singapore</option>
                  <option value="netherlands">Netherlands</option>
                  <option value="sweden">Sweden</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="courseInterested">Course Interested In*</label>
                <select
                  id="courseInterested"
                  name="courseInterested"
                  value={formData.courseInterested}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Course</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="business-administration">Business Administration</option>
                  <option value="engineering">Engineering</option>
                  <option value="data-science">Data Science</option>
                  <option value="artificial-intelligence">Artificial Intelligence</option>
                  <option value="finance">Finance</option>
                  <option value="marketing">Marketing</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="law">Law</option>
                  <option value="arts">Arts & Design</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="intakePreference">Intake Preference*</label>
                <select
                  id="intakePreference"
                  name="intakePreference"
                  value={formData.intakePreference}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Intake</option>
                  {/* <option value="fall-2024">Fall 2024</option> */}
                  <option value="spring-2025">Spring 2025</option>
                  <option value="fall-2025">Fall 2025</option>
                  <option value="spring-2026">Spring 2026</option>
                  <option value="summer-2025">Summer 2025</option>
                </select>
              </div>
            </div>
          </div>

          {/* <div className="form-section">
            <h3 className="section-title">Enter scores for exams if given, else leave blank:</h3>
            
            <div className="scores-grid">
              <div className="form-group">
                <label htmlFor="greScore">GRE Score</label>
                <input
                  type="text"
                  id="greScore"
                  name="greScore"
                  value={formData.greScore}
                  onChange={handleInputChange}
                  placeholder="e.g., 320"
                />
              </div>

              <div className="form-group">
                <label htmlFor="gmatScore">GMAT Score</label>
                <input
                  type="text"
                  id="gmatScore"
                  name="gmatScore"
                  value={formData.gmatScore}
                  onChange={handleInputChange}
                  placeholder="e.g., 700"
                />
              </div>

              <div className="form-group">
                <label htmlFor="satScore">SAT Score</label>
                <input
                  type="text"
                  id="satScore"
                  name="satScore"
                  value={formData.satScore}
                  onChange={handleInputChange}
                  placeholder="e.g., 1400"
                />
              </div>

              <div className="form-group">
                <label htmlFor="ieltsScore">IELTS Score</label>
                <input
                  type="text"
                  id="ieltsScore"
                  name="ieltsScore"
                  value={formData.ieltsScore}
                  onChange={handleInputChange}
                  placeholder="e.g., 7.5"
                />
              </div>

              <div className="form-group">
                <label htmlFor="toeflScore">TOEFL Score</label>
                <input
                  type="text"
                  id="toeflScore"
                  name="toeflScore"
                  value={formData.toeflScore}
                  onChange={handleInputChange}
                  placeholder="e.g., 100"
                />
              </div>

              <div className="form-group">
                <label htmlFor="pteScore">PTE Score</label>
                <input
                  type="text"
                  id="pteScore"
                  name="pteScore"
                  value={formData.pteScore}
                  onChange={handleInputChange}
                  placeholder="e.g., 65"
                />
              </div>
            </div>
          </div> */}

          <button type="submit" className="submit-button">
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
