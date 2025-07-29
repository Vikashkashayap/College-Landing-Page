import React, { useState, useEffect, useRef } from 'react';
import './UniversityTeachers.css';

const UniversityTeachers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const teachers = [
    {
      id: 1,
      name: "Maitri Nagar",
      university: "The University of Tulsa",
      image: "https://img.freepik.com/free-photo/senior-male-professor-holding-notebook-standing-against-blackboard_23-2148200961.jpg?semt=ais_hybrid&w=740",
      bgColor: "linear-gradient(135deg, #4F46E5, #7C3AED)"
    },
    {
      id: 2,
      name: "Akshayitree",
      university: "Florida Atlantic University - Studygroup (11)",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bgColor: "linear-gradient(135deg, #EC4899, #8B5CF6)"
    },
    {
      id: 3,
      name: "Rajat Garg",
      university: "Arizona State University - Kaplan (4)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bgColor: "linear-gradient(135deg, #F59E0B, #EF4444)"
    },
    {
      id: 4,
      name: "Musarrat Jahan",
      university: "University of East Anglia",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      bgColor: "linear-gradient(135deg, #3B82F6, #1E40AF)"
    },
    {
      id: 5,
      name: "Dr. Sarah Johnson",
      university: "University of California, Berkeley",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      bgColor: "linear-gradient(135deg, #10B981, #059669)"
    },
    {
      id: 6,
      name: "Prof. Michael Chen",
      university: "Stanford University",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bgColor: "linear-gradient(135deg, #8B5CF6, #7C3AED)"
    }
  ];

  const slidesPerView = 4;
  const totalSlides = Math.ceil(teachers.length / slidesPerView);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 50000); // 50 seconds
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isAutoPlaying, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const getCurrentTeachers = () => {
    const startIndex = currentSlide * slidesPerView;
    return teachers.slice(startIndex, startIndex + slidesPerView);
  };

  return (
    <section className="university-teachers">
      <div className="container">
        <div className="section-header">
          <h2>
            <span className="highlight">CONNECT 1:1</span> With University Delegates
          </h2>
        </div>

        <div className="carousel-container">
          <button 
            className="nav-arrow nav-arrow-left" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="carousel-track">
            <div 
              className="carousel-slide" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {getCurrentTeachers().map((teacher) => (
                <div key={teacher.id} className="teacher-card">
                  <div className="teacher-image-container">
                    <div 
                      className="teacher-background" 
                      style={{ background: teacher.bgColor }}
                    ></div>
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className="teacher-image"
                    />
                  </div>
                  <div className="teacher-info">
                    <h3 className="teacher-name">{teacher.name}</h3>
                    <p className="teacher-university">{teacher.university}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="nav-arrow nav-arrow-right" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        <div className="pagination">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="auto-play-controls">
          <button 
            className={`auto-play-btn ${isAutoPlaying ? 'active' : ''}`}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          >
            {isAutoPlaying ? 'Pause Auto-play' : 'Start Auto-play'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniversityTeachers;
