import React, { useState, useEffect } from 'react';
import './Testnomial.css';

const Testnomial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      university: "Stanford University",
      program: "Computer Science",
      text: "CollegeHai helped me navigate the complex application process. Their guidance was invaluable in securing my dream university admission.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      university: "MIT",
      program: "Engineering",
      text: "The personalized counseling and scholarship guidance from CollegeHai made all the difference. I received a 50% scholarship!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      university: "University of Toronto",
      program: "Business Administration",
      text: "From profile evaluation to visa guidance, CollegeHai provided end-to-end support. Highly recommended for international students.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="testimonials-section">
      {/* Testimonials Section */}
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">TESTIMONIALS</h2>
          <h3 className="testimonials-subtitle">Let's Hear From Our Students</h3>
          
          <div className="testimonials-navigation">
            <button className="nav-btn prev-btn" onClick={prevTestimonial}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="nav-btn next-btn" onClick={nextTestimonial}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="testimonials-content">
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
            </div>
            <div className="testimonial-details">
              <div className="testimonial-stars">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                <p className="author-details">
                  {testimonials[currentTestimonial].program} • {testimonials[currentTestimonial].university}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-pagination">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>

      {/* Advertisement Section */}
      <div className="advertisement-section">
        <div className="ad-decoration">
          <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
            <path d="M10 20 Q30 10 50 20 T90 20 L110 20" stroke="#ff6b35" strokeWidth="3" strokeLinecap="round"/>
            <polygon points="105,15 110,20 105,25" fill="#ff6b35"/>
          </svg>
        </div>
        
        <div className="ad-card">
          <div className="ad-content">
            <h2 className="ad-headline">Upto 7,777 Off</h2>
            <h3 className="ad-subheadline">On GRE & TOEFL</h3>
            <p className="ad-description">
              Get exclusive discount for GRE and TOEFL if you visit the event!
            </p>
            <button className="ad-cta-btn">Register Now</button>
          </div>
          
          <div className="ad-illustration">
            <div className="laptop">
              <div className="laptop-screen">
                <div className="search-bar">
                  <span className="search-text">TOEFL</span>
                  <div className="search-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="airplane">
              <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                <path d="M10 15 L50 15 L45 10 L50 15 L45 20 Z" fill="#ff8c42"/>
                <circle cx="15" cy="15" r="2" fill="#ff6b35"/>
                <circle cx="25" cy="15" r="2" fill="#ff6b35"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testnomial;
