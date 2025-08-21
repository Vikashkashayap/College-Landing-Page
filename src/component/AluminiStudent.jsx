import React, { useEffect, useState } from 'react';
import './AluminiStudent.css';

const AluminiStudent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.alumni-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const alumniData = [
    {
      id: 1,
      name: "Dr. Vasundha Balure",
      university: "Swansea University, UK",
      image: "https://www.shutterstock.com/image-photo/beautiful-young-indian-woman-student-600nw-2435890489.jpg"
    },
    {
      id: 2,
      name: "Aryan Dhingra",
      university: "University of Lethbridge, Canada",
      image: "https://bunny-wp-pullzone-3xue3q6yzy.b-cdn.net/wp-content/uploads/2024/11/EM-BLOG-study-abroad-benefits-1185326263.png"
    },
    {
      id: 3,
      name: "Prajwal Deb",
      university: "Monash University, Australia",
      image: "https://i.pinimg.com/1200x/1c/05/71/1c05715a6538b962d5d870b95c887a03.jpg"
    },
    {
      id: 4,
      name: "Kamini Bhavsar",
      university: "De Montfort University - Leicester, UK",
      image: "https://media.istockphoto.com/id/2060275708/photo/portrait-of-female-college-student-stock-photo.jpg?s=612x612&w=0&k=20&c=AYj3fKWYKtmfLCO8AgNfhISB3iNCeXzoeOUtlvKquYE="
    },
    {
      id: 5,
      name: "Aishwarya Thorve",
      university: "University of Surrey, UK",
      image: "https://media.istockphoto.com/id/2189752247/photo/indian-female-student-on-isolated-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=_U2Ux1exVPF8Ec7QlYJ4jMSjageGb65S-y1jRmFHoik="
    },
    {
      id: 6,
      name: "Saurabh Dhapola",
      university: "University of New Brunswick, Canada",
      image: "https://media.istockphoto.com/id/1068662118/photo/college-boy.jpg?s=612x612&w=0&k=20&c=QFXQGnz8UWhd_bHQAUQfustT3NS5JzfOgmy8wKo4WL4="
    },
    {
      id: 7,
      name: "Rachit Singh",
      university: "Coventry University, UK",
      image: "https://media.istockphoto.com/id/1216248776/photo/young-man-at-white-background-stock-images.jpg?s=612x612&w=0&k=20&c=Q_oDMMppfTbRgiC7jZ_QQB0JILptNs3AYRV0zLh3bBo="
    },
    {
      id: 8,
      name: "Prabhpreet Negi",
      university: "Massey University, New Zealand",
      image: "https://media.istockphoto.com/id/514452074/photo/handsome-east-asian-businessman.jpg?s=612x612&w=0&k=20&c=eLh1hW_zmG-UgI9Gr1RUAwuJBiid3A8I4UkLBYMmWgU="
    },
    {
      id: 9,
      name: "Divya Beeresha",
      university: "University of Greenwich, UK",
      image: "https://media.istockphoto.com/id/2148390216/photo/portrait-of-female-college-student-stock-photo.jpg?s=612x612&w=0&k=20&c=l5DxmwTdKs7nXOzA7oU6xMOD2cFVtSnepl4ZJvOB6OA="
    },
    {
      id: 10,
      name: "Amit Kumar",
      university: "University of Essex, UK",
      image: "https://media.istockphoto.com/id/1157889922/photo/young-bearded-indian-man-against-white-background.jpg?s=612x612&w=0&k=20&c=W5vwFSIXVIWyLaXNyz0EBc4UL84OkwUmLK5fGGsMSyI="
    },
    {
      id: 11,
      name: "Tirtharaj Das",
      university: "Nipissing University, Canada",
      image: "https://media.istockphoto.com/id/1217905988/photo/casual-man-standing-on-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=-1qMMpdXRwtDvveaf3-lGMJFb7VCmmVsrMRltJSBriE="
    },
    {
      id: 12,
      name: "Harsh Patel",
      university: "University of Ottawa, Canada",
      image: "https://media.istockphoto.com/id/1068662118/photo/college-boy.jpg?s=612x612&w=0&k=20&c=QFXQGnz8UWhd_bHQAUQfustT3NS5JzfOgmy8wKo4WL4="
    }
  ];

  // Duplicate data for seamless infinite scroll
  const duplicatedData = [...alumniData, ...alumniData];

  return (
    <section className={`alumni-section ${isVisible ? 'animate-in' : ''}`}>
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
          {/* First row - moves left */}
          <div className="alumni-row alumni-row-left">
            {duplicatedData.slice(0, 12).map((alumni, index) => (
              <div 
                key={`${alumni.id}-${index}`} 
                className="alumni-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
          
          {/* Second row - moves right */}
          <div className="alumni-row alumni-row-right">
            {duplicatedData.slice(6, 18).map((alumni, index) => (
              <div 
                key={`${alumni.id}-${index + 6}`} 
                className="alumni-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
    </section>
  );
};

export default AluminiStudent;
