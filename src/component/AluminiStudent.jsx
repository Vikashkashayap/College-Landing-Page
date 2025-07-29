import React from 'react';
import './AluminiStudent.css';

const AluminiStudent = () => {
  const alumniData = [
    {
      id: 1,
      name: "Dr. Vasundha Balure",
      university: "Swansea University, UK",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Aryan Dhingra",
      university: "University of Lethbridge, Canada",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Prajwal Deb",
      university: "Monash University, Australia",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Kamini Bhavsar",
      university: "De Montfort University - Leicester, UK",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Aishwarya Thorve",
      university: "University of Surrey, UK",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Saurabh Dhapola",
      university: "University of New Brunswick, Canada",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Rachit Singh",
      university: "Coventry University, UK",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Prabhpreet Negi",
      university: "Massey University, New Zealand",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 9,
      name: "Divya Beeresha",
      university: "University of Greenwich, UK",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 10,
      name: "Amit Kumar",
      university: "University of Essex, UK",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 11,
      name: "Tirtharaj Das",
      university: "Nipissing University, Canada",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
    },
    {
      id: 12,
      name: "Harsh Patel",
      university: "University of Ottawa, Canada",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    }
  ];

  return (
    <section className="alumni-section">
      <div className="container">
        <div className="alumni-header">
          <h2 className="alumni-title">ALUMNI NETWORK</h2>
          <h3 className="alumni-subtitle">
            Over 1,00,000 students studying abroad
          </h3>
          <p className="alumni-description">
            in Top Universities through Collegedunia
          </p>
        </div>
        
        <div className="alumni-carousel">
          <div className="alumni-track">
            {/* First row */}
            <div className="alumni-row">
              {alumniData.slice(0, 6).map((alumni) => (
                <div key={alumni.id} className="alumni-card">
                  <div className="alumni-image-container">
                    <img 
                      src={alumni.image} 
                      alt={alumni.name}
                      className="alumni-image"
                    />
                    <div className="alumni-overlay">
                      <h4 className="alumni-name">{alumni.name}</h4>
                      <p className="alumni-university">{alumni.university}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second row */}
            <div className="alumni-row">
              {alumniData.slice(6, 12).map((alumni) => (
                <div key={alumni.id} className="alumni-card">
                  <div className="alumni-image-container">
                    <img 
                      src={alumni.image} 
                      alt={alumni.name}
                      className="alumni-image"
                    />
                    <div className="alumni-overlay">
                      <h4 className="alumni-name">{alumni.name}</h4>
                      <p className="alumni-university">{alumni.university}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AluminiStudent;
