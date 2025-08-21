import React, { useState, useEffect } from 'react';
import './Testnomial.css';

const Testnomial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const delegates = [
    {
      name: "Musarrat Jahan",
      university: "University of East Anglia",
      image: "https://media.istockphoto.com/id/1141532396/photo/portrait-of-a-brazilian-girl-using-smartphone-looking-at-you.jpg?s=612x612&w=0&k=20&c=D8lLwVTCsNPh7jM_2NMOF7FgYHEXwnbmWKJ8yZMAFko=",
      backgroundGradient: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)"
    },
    {
      name: "Venugopal Veldi",
      university: "University of Illinois Chicago - Shorelight (6)",
      image: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg"
    },
    {
      name: "Reema Doshi",
      university: "Middle Tennessee State University",
      image: "https://deft360.com/wp-content/uploads/2016/01/Pooja-1-e1622323927868-350x350.jpg",
      backgroundGradient: "linear-gradient(135deg, #ff8c42 0%, #ffd700 100%)"
    },
    {
      name: "Sandra Paul",
      university: "Aston University",
      image: "https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M=",
      backgroundGradient: "linear-gradient(135deg, #ff6b35 0%, #ffa500 100%)"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % delegates.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + delegates.length) % delegates.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">CONNECT 1:1</h2>
          <h3 className="testimonials-subtitle">With University Delegates</h3>
        </div>

        <div className="carousel-container">
          <button className="nav-btn prev-btn" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="carousel-track">
            <div 
              className="carousel-slides" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {delegates.map((delegate, index) => (
                <div key={index} className="delegate-card">
                  <div className="delegate-image-container">
                    <div 
                      className="delegate-background"
                      style={{ background: delegate.backgroundGradient }}
                    >
                      <div className="geometric-shape"></div>
                    </div>
                    <img 
                      src={delegate.image} 
                      alt={delegate.name} 
                      className="delegate-image"
                    />
                  </div>
                  <div className="delegate-info">
                    <h4 className="delegate-name">{delegate.name}</h4>
                    <p className="delegate-university">{delegate.university}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="nav-btn next-btn" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="carousel-pagination">
          {delegates.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testnomial;
