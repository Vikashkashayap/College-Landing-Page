import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h3 className="subtitle">HOW IT WORKS</h3>
          <h2 className="title">Your Study Abroad Journey</h2>
        </div>
        
        <div className="steps-container">
          <div className="step">
            <div className="step-image">
              <div className="image-wrapper step-1-bg">
                <div className="step-number">01</div>
                <div className="image-overlay">
                  <img 
                    src="https://img.freepik.com/free-photo/writers-scene-concept_23-2151931194.jpg?semt=ais_hybrid&w=740&q=80" 
                    alt="Professional woman at desk" 
                    className="step-image-content"
                  />
                  <div className="image-text-overlay"> STUDY ABROAD</div>
                </div>
              </div>
            </div>
            <div className="step-content">
              <h4 className="step-title">Step 1</h4>
              <p className="step-description">Register for the fair</p>
              <p className="step-highlight">First 100 registrations get FREE entry.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-image">
              <div className="image-wrapper step-2-bg">
                <div className="step-number">02</div>
                <div className="image-overlay">
                  <img 
                    src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-01/24/full/1579808966-883.jpg?im=FeatureCrop,size=(826,465)" 
                    alt="Team of professionals" 
                    className="step-image-content"
                  />
                  <div className="image-text-overlay">Meet the Experts</div>
                </div>
              </div>
            </div>
            <div className="step-content">
              <h4 className="step-title">Step 2</h4>
              <p className="step-description">Meet the experts who will pave the way for your dreams, with the right choice for your study abroad options.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-image">
              <div className="image-wrapper step-3-bg">
                <div className="step-number">03</div>
                <div className="image-overlay">
                  <img 
                    src="https://t4.ftcdn.net/jpg/02/54/39/33/360_F_254393324_feP93EMl8lUvITiEWWWwWmxXfTHQTK2y.jpg" 
                    alt="Professional man with laptop" 
                    className="step-image-content"
                  />
                  <div className="image-text-overlay">Apply & Get Offers</div>
                </div>
              </div>
            </div>
            <div className="step-content">
              <h4 className="step-title">Step 3</h4>
              <p className="step-description">Apply & get on spot offer.</p>
              <p className="step-highlight">PS: you might even win a fully funded masters!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
