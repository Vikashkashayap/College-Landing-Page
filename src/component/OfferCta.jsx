import React, { useState, useEffect } from 'react'
import './OfferCta.css'

const OfferCta = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Set target date (example: 30 days from now)
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const benefits = [
    {
      icon: "🏆",
      text: "Apply to top universities with 0 application fee and 0 visa fee"
    },
    {
      icon: "👥",
      text: "Get 1:1 profile evaluation and counselling"
    },
    {
      icon: "🏛️",
      text: "Explore 500+ Universities open for Jan'25 Intake"
    },
    {
      icon: "🎓",
      text: "Get scholarships upto INR 15L"
    }
  ]

  return (
    <div className="offer-cta">
      <div className="benefits-section">
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <div className="benefit-text">{benefit.text}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="countdown-section">
        <div className="countdown-timer">
          <div className="timer-item">
            <div className="timer-value">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="timer-label">Days</div>
          </div>
          <div className="timer-item">
            <div className="timer-value">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="timer-label">Hours</div>
          </div>
          <div className="timer-item">
            <div className="timer-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="timer-label">Minutes</div>
          </div>
          <div className="timer-item">
            <div className="timer-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="timer-label">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferCta
