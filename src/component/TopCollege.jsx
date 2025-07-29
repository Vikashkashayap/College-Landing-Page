import React from 'react'
import './TopCollege.css'

const TopCollege = () => {
  const universities = {
    row1: [
      { 
        name: "Stevens Institute of Technology", 
        logo: "STEVENS",
        logoStyle: "stevens-logo",
        subtitle: "INSTITUTE OF TECHNOLOGY"
      },
      { 
        name: "New York Institute of Technology", 
        logo: "NEW YORK INSTITUTE OF TECHNOLOGY",
        logoStyle: "nyit-logo",
        subtitle: ""
      },
      { 
        name: "Pace University", 
        logo: "PACE",
        logoStyle: "pace-logo",
        subtitle: "UNIVERSITY"
      },
      { 
        name: "The University of Alabama at Birmingham", 
        logo: "UAB",
        logoStyle: "uab-logo",
        subtitle: "THE UNIVERSITY OF ALABAMA AT BIRMINGHAM"
      },
      { 
        name: "University of Illinois Springfield", 
        logo: "UNIVERSITY OF ILLINOIS",
        logoStyle: "uis-logo",
        subtitle: "SPRINGFIELD"
      },
      { 
        name: "UMass Boston", 
        logo: "UMass Boston",
        logoStyle: "umass-logo",
        subtitle: ""
      },
      { 
        name: "University of Illinois Chicago", 
        logo: "UIC",
        logoStyle: "uic-logo",
        subtitle: "UNIVERSITY OF ILLINOIS CHICAGO"
      },
      { 
        name: "New Jersey Institute of Technology", 
        logo: "NJIT",
        logoStyle: "njit-logo",
        subtitle: "New Jersey Institute of Technology"
      },
      { 
        name: "Arizona State University", 
        logo: "ASU",
        logoStyle: "asu-logo",
        subtitle: "Arizona State University"
      },
      { 
        name: "University of New Haven", 
        logo: "University of New Haven",
        logoStyle: "unh-logo",
        subtitle: ""
      },
      { 
        name: "University of Massachusetts Lowell", 
        logo: "UMass Lowell",
        logoStyle: "umass-lowell-logo",
        subtitle: ""
      },
      { 
        name: "University of Central Florida", 
        logo: "UCF",
        logoStyle: "ucf-logo",
        subtitle: "UNIVERSITY OF CENTRAL FLORIDA"
      },
      { 
        name: "University of South Florida", 
        logo: "USF",
        logoStyle: "usf-logo",
        subtitle: "UNIVERSITY OF SOUTH FLORIDA"
      },
      { 
        name: "University of North Texas", 
        logo: "UNT",
        logoStyle: "unt-logo",
        subtitle: "UNIVERSITY OF NORTH TEXAS"
      },
      { 
        name: "University of Texas Arlington", 
        logo: "UTA",
        logoStyle: "uta-logo",
        subtitle: "UNIVERSITY OF TEXAS ARLINGTON"
      }
    ],
    row2: [
      { 
        name: "University of Birmingham", 
        logo: "UNIVERSITY OF BIRMINGHAM",
        logoStyle: "birmingham-logo",
        subtitle: ""
      },
      { 
        name: "University of Surrey", 
        logo: "UNIVERSITY OF SURREY",
        logoStyle: "surrey-logo",
        subtitle: ""
      },
      { 
        name: "University of Aberdeen", 
        logo: "UNIVERSITY OF ABERDEEN",
        logoStyle: "aberdeen-logo",
        subtitle: ""
      },
      { 
        name: "Aston University Birmingham UK", 
        logo: "Aston University",
        logoStyle: "aston-logo",
        subtitle: "BIRMINGHAM UK"
      },
      { 
        name: "Durham University", 
        logo: "Durham University",
        logoStyle: "durham-logo",
        subtitle: ""
      },
      { 
        name: "University of Cambridge", 
        logo: "UNIVERSITY OF CAMBRIDGE",
        logoStyle: "cambridge-logo",
        subtitle: ""
      },
      { 
        name: "The University of Adelaide", 
        logo: "THE UNIVERSITY of ADELAIDE",
        logoStyle: "adelaide-logo",
        subtitle: ""
      },
      { 
        name: "Oxford Brookes University", 
        logo: "OXFORD BROOKES UNIVERSITY",
        logoStyle: "oxford-brookes-logo",
        subtitle: ""
      },
      { 
        name: "University of Glasgow", 
        logo: "University of Glasgow",
        logoStyle: "glasgow-logo",
        subtitle: ""
      },
      { 
        name: "The University of Edinburgh", 
        logo: "THE UNIVERSITY OF EDINBURGH",
        logoStyle: "edinburgh-logo",
        subtitle: ""
      },
      { 
        name: "University of Manchester", 
        logo: "UNIVERSITY OF MANCHESTER",
        logoStyle: "manchester-logo",
        subtitle: ""
      },
      { 
        name: "University of Leeds", 
        logo: "UNIVERSITY OF LEEDS",
        logoStyle: "leeds-logo",
        subtitle: ""
      },
      { 
        name: "University of Bristol", 
        logo: "UNIVERSITY OF BRISTOL",
        logoStyle: "bristol-logo",
        subtitle: ""
      },
      { 
        name: "University of Sheffield", 
        logo: "UNIVERSITY OF SHEFFIELD",
        logoStyle: "sheffield-logo",
        subtitle: ""
      },
      { 
        name: "University of Nottingham", 
        logo: "UNIVERSITY OF NOTTINGHAM",
        logoStyle: "nottingham-logo",
        subtitle: ""
      }
    ]
  }

  return (
    <div className="top-college-container">
      <div className="header-section">
        <h2 className="admit-text">ON SPOT ADMIT FOR JAN '25</h2>
        <h1 className="main-title">In Top Universities</h1>
      </div>
      
      <div className="universities-section">
        {/* First row - moves from left to right */}
        <div className="university-row row1">
          {universities.row1.map((university, index) => (
            <div key={index} className="university-card">
              <div className={`university-logo ${university.logoStyle}`}>
                <div className="logo-text">{university.logo}</div>
                {university.subtitle && (
                  <div className="logo-subtitle">{university.subtitle}</div>
                )}
              </div>
              <div className="university-name">{university.name}</div>
            </div>
          ))}
        </div>
        
        {/* Second row - moves from right to left */}
        <div className="university-row row2">
          {universities.row2.map((university, index) => (
            <div key={index} className="university-card">
              <div className={`university-logo ${university.logoStyle}`}>
                <div className="logo-text">{university.logo}</div>
                {university.subtitle && (
                  <div className="logo-subtitle">{university.subtitle}</div>
                )}
              </div>
              <div className="university-name">{university.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopCollege
