import React, { useState, useEffect } from 'react';
import Form from './Form';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const heroElement = document.querySelector('.hero-container');
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  const benefits = [
    { text: "1:1 Live Counselling", icon: "🎯" },
    { text: "On Spot Application", icon: "⚡" },
    { text: "0 Visa Fees", icon: "💰" },
    { text: "15L in scholarships", icon: "🎓" }
  ];

  return (
    <div className={`hero-container min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      {/* Background decorative elements - Responsive sizing */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-4 sm:left-8 md:left-16 lg:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-120px)]">
          
          {/* Left Column - Event Content */}
          <div className={`space-y-4 sm:space-y-6 ${isVisible ? 'animate-fade-in-left' : ''}`}>
            {/* Main Title */}
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight px-2 sm:px-0">
                India's Biggest Study Abroad Expo
              </h1>
            </div>

            {/* Promotional Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100 mx-2 sm:mx-0">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img 
                    src="/image.png" 
                    alt="Study Abroad Expo" 
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-full shadow-lg"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center sm:text-left">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-3 sm:mb-4 w-full sm:w-auto">
                    Get Your Global Ticket
                  </button>
                  
                  {/* Benefits List */}
                  <div className="space-y-1 sm:space-y-2">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700 justify-center sm:justify-start">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                        <span className="text-xs sm:text-sm lg:text-base">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className={`order-first lg:order-last ${isVisible ? 'animate-fade-in-right' : ''}`}>
            <div className="mx-2 sm:mx-0">
              <Form />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button - Responsive positioning */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
        title="Back to top"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default HeroSection;
