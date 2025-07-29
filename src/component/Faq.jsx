import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "What kind of documents should I bring along?",
      answer: "Digital copies of your 10th & 12th mark sheets, Passport, CV, Graduation certificate, graduation mark sheets or transcripts, Sop and Lor!"
    },
    {
      question: "How long does it take to get the offer letter?",
      answer: "The processing time for offer letters typically ranges from 2-8 weeks depending on the university and program. Some universities may provide faster responses for certain programs."
    },
    {
      question: "Are there any kind of charges?",
      answer: "Yes, there are various charges including application fees, visa fees, and service charges. The exact amount varies by university and country. We provide transparent pricing with no hidden costs."
    },
    {
      question: "What is the referral policy?",
      answer: "Our referral policy allows students to earn rewards by referring friends. For every successful referral, both the referrer and referee receive benefits including application fee waivers and additional support services."
    },
    {
      question: "How much funds will I need to study abroad?",
      answer: "The required funds vary by country and program. Generally, you'll need to show proof of funds covering tuition fees, living expenses, and other costs. This typically ranges from $15,000 to $50,000+ depending on the destination and duration."
    },
    {
      question: "What is the service fee that Collegedunia - Study Abroad charges for doing an application?",
      answer: "Our service fees are competitive and transparent. We offer different packages starting from basic application support to comprehensive services including visa guidance, accommodation assistance, and pre-departure support."
    },
    {
      question: "How many University/College options can I apply through Collegedunia?",
      answer: "You can apply to multiple universities through our platform. We recommend applying to 3-5 universities to maximize your chances of acceptance. Our counselors help you select the best mix of dream, target, and safety schools."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-label">FAQ</span>
          <h2 className="faq-title">Let's Answer Some Queries</h2>
        </div>
        
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="question-text">{faq.question}</span>
                <span className="chevron-icon">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M6 9L12 15L18 9" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              
              <div 
                className="faq-answer-wrapper"
                id={`faq-answer-${index}`}
                aria-hidden={activeIndex !== index}
              >
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
