import React from 'react';
import './GetWes.css';

const GetWes = () => {
  return (
    <div className="get-wes-container">
      <div className="get-wes-card">
        <div className="card-content">
          <div className="text-section">
            <h1 className="main-headline">Get WES</h1>
            <h2 className="sub-headline">Evaluation Done</h2>
            <p className="description">
              Get your WES Evaluation done, sign up for the event
            </p>
            <button className="register-btn">Register Now</button>
          </div>
          
          <div className="illustration-section">
            <div className="scroll-document">
              <div className="scroll-content">
                <div className="text-line"></div>
                <div className="text-line"></div>
                <div className="text-line"></div>
                <div className="checkbox checked">
                  <div className="checkmark">✓</div>
                </div>
                <div className="checkbox checked">
                  <div className="checkmark">✓</div>
                </div>
                <div className="checkbox checked">
                  <div className="checkmark">✓</div>
                </div>
              </div>
            </div>
            <div className="magnifying-glass">
              <div className="glass-circle"></div>
              <div className="glass-handle"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="decorative-arrow">
        <svg width="60" height="40" viewBox="0 0 60 40">
          <path 
            d="M10 20 Q20 10 30 20 Q40 30 50 20 L45 15 M50 20 L45 25" 
            stroke="#FF6B35" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default GetWes;
