import React from 'react'

const TopCollege = () => {
  const universities = {
    row1: [
      { 
        name: "New Jersey Institute of Technology", 
        logo: "https://futuretechnologies.njit.edu/sites/futuretechnologies/files/njit%20logo_0.png",
        logoStyle: "njit-logo",
        isImage: true
      },
      { 
        name: "New York Institute of Technology", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Nyit_logo.gif",
        logoStyle: "nyit-logo",
        isImage: true
      },
      { 
        name: "Pace University", 
        logo: "https://images.seeklogo.com/logo-png/35/1/pace-university-logo-png_seeklogo-353312.png",
        logoStyle: "pace-logo",
        isImage: true
      },
      { 
        name: "Stevens Institute of Technology", 
        logo: "https://i.pinimg.com/736x/fe/1e/32/fe1e323165ef4f5b8267458d29dc2fc8.jpg",
        logoStyle: "stevens-logo",
        isImage: true
      },
      { 
        name: "The University of Alabama at Birmingham", 
        logo: "https://i.pinimg.com/736x/df/68/59/df685953fa5032787b489ace8880f8be.jpg",
        logoStyle: "uab-logo",
        isImage: true
      },
      { 
        name: "University of Illinois Springfield", 
        logo: "https://logos-world.net/wp-content/uploads/2025/01/UIUC-Logo.jpg",
        logoStyle: "uis-logo",
        isImage: true
      },
      { 
        name: "UMass Boston", 
        logo: "https://pbs.twimg.com/profile_images/1557035515211264000/UnXW29Lm_400x400.jpg",
        logoStyle: "umass-logo",
        isImage: true
      },
      { 
        name: "University of Illinois Chicago", 
        logo: "https://i.ytimg.com/vi/A44VZfzlgJM/maxresdefault.jpg",
        logoStyle: "uic-logo",
        isImage: true
      },
      { 
        name: "Arizona State University", 
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRu7UGLPvLhiN9XaeTGyD4vsHTM1UeIjUIg&s",
        logoStyle: "asu-logo",
        isImage: true
      },
      { 
        name: "University of New Haven", 
        logo: "https://www.neche.org/wp-content/uploads/2023/06/unh_sig_seal_stacked_288.webp",
        logoStyle: "unh-logo",
        isImage:true
      },
      { 
        name: "University of Massachusetts Lowell", 
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ymzN2O0J2-GYV0SVImavDsmhoQJJYQfbGg&s",
        logoStyle: "umass-lowell-logo",
        isImage:true
      },
      { 
        name: "University of Central Florida", 
        logo: "data:image/png;base64,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",
        logoStyle: "ucf-logo",
       isImage:true
      },
      { 
        name: "University of South Florida", 
        logo: "https://logos-world.net/wp-content/uploads/2022/01/University-of-South-Florida-Logo.jpg",
        logoStyle: "usf-logo",
        isImage:true
      },
      { 
        name: "University of North Texas", 
        logo: "https://untalumni.com/wp-content/uploads/2024/12/forever-north-texas-ring-logo.jpg",
        logoStyle: "unt-logo",
        isImage:true
      },
      { 
        name: "University of Texas Arlington", 
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqwfemUVxeCxUVn2-uATnbbzcNG7paBFQyg&s",
        logoStyle: "uta-logo",
        isImage:true
      }
    ],
    row2: [
      { 
        name: "University of Birmingham", 
        logo: "https://assets.studies-overseas.com/University_of_Birmingham_Desktop_U_Niversity_Logo_d8a6747304.webp",
        logoStyle: "birmingham-logo",
        isImage:true
      },
      { 
        name: "University of Surrey", 
        logo: "https://assets.studies-overseas.com/University_of_Surrey_Desktop_U_Niversity_Logo_c84b7db400.webp",
        logoStyle: "surrey-logo",
        isImage:true
      },
      { 
        name: "University of Aberdeen", 
        logo: "https://assets.studies-overseas.com/University_of_Aberdeen_Aberdeen_Scotland_b5a8a2ca34.jpg",
        logoStyle: "aberdeen-logo",
        isImage:true
      },
      { 
        name: "Aston University Birmingham UK", 
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYPgNv-ubuTbyEMm1ls1BLHIt3qrhv-UifA&s",
        logoStyle: "aston-logo",
        isImage:true
      },
      { 
        name: "Durham University", 
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuUJeQaBWduoS44JheW9iryKo2YaeuqF1fEg&s",
        logoStyle: "durham-logo",
        isImage:true
      },
      { 
        name: "University of Cambridge", 
        logo: "https://www.neaspec.com/assets/cambridge-university-logo.jpg",
        logoStyle: "cambridge-logo",
        isImage:true
      },
      { 
        name: "The University of Adelaide", 
        logo: "https://www.adelaide.edu.au/brand/sites/default/files/media/editor-images/2021-07/uoa-logo-col-vert.gif",
        logoStyle: "adelaide-logo",
        isImage:true
      },
      { 
        name: "Oxford Brookes University", 
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFWIW_DNq-uEHJXdelEKdNaswtNywrAAGS50Z-qlVjJ21gi7bwZ01r1u9cRihF38tFL6U&usqp=CAU",
        logoStyle: "oxford-brookes-logo",
       isImage:true
      },
      { 
        name: "University of Glasgow", 
        logo: "https://images.seeklogo.com/logo-png/14/1/university-of-glasgow-logo-png_seeklogo-145972.png",
        logoStyle: "glasgow-logo",
       isImage:true
      },
      { 
        name: "The University of Edinburgh", 
        logo: "https://www.drupal.org/files/styles/grid-4-2x/public/UoE_Stacked%20Logo_Black.png?itok=-QLpNy5t",
        logoStyle: "edinburgh-logo",
        isImage:true
      },
      { 
        name: "University of Manchester", 
        logo: "https://storage.googleapis.com/cos-osf-prod-cdn-us/assets/uom-banner.png",
        logoStyle: "manchester-logo",
        isImage:true
      },
      { 
        name: "University of Leeds", 
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Y2_rXBAPvK_vC-8lG1HeclfHbBxw3Ol1jQ&s",
        logoStyle: "leeds-logo",
       isImage:true
      },
      { 
        name: "University of Bristol", 
        logo: "https://assets.studies-overseas.com/University_of_Bristol_Desktop_U_Niversity_Logo_71c31f2c4c.webp",
        logoStyle: "bristol-logo",
        isImage:true
      },
      { 
        name: "University of Sheffield", 
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5r4grJFF5HqZuuiB_vc41znhULk4Kf2BDQw&s",
        logoStyle: "sheffield-logo",
        isImage:true
      },
      { 
        name: "University of Nottingham", 
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTYdWkPbTkaKDZjVWqR2Af-Y-nattvgABmg&s",
        logoStyle: "nottingham-logo",
        isImage:true
      }
    ]
  }

  return (
    <div className="bg-white overflow-hidden w-full px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-12">
      <div className="text-center mb-3 sm:mb-6 lg:mb-10">
        <h2 className="text-orange-500 text-xs sm:text-base lg:text-lg font-semibold uppercase mb-1 sm:mb-2 lg:mb-3">
          ON SPOT ADMIT FOR JAN '25
        </h2>
        <h1 className="text-gray-800 text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase">
          In Top Universities
        </h1>
      </div>
      
      <div className="relative mt-3 sm:mt-6 lg:mt-8">
        {/* First row - moves from left to right */}
        <div className="flex gap-2 sm:gap-4 lg:gap-8 animate-[slideLeftToRight_100s_linear_infinite] w-max py-2 sm:py-4 lg:py-6">
          {/* First set of universities */}
          {universities.row1.map((university, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 flex items-center justify-center p-1 sm:p-2 lg:p-4 transition-transform duration-300 hover:scale-110">
              <div className="flex flex-col items-center justify-center min-h-[50px] sm:min-h-[60px] lg:min-h-[80px]">
                {university.isImage ? (
                  <img 
                    src={university.logo} 
                    alt={university.name} 
                    className="max-w-[90px] max-h-[70px] sm:max-w-[100px] sm:max-h-[80px] lg:max-w-[120px] lg:max-h-[100px] w-auto h-auto object-contain block mx-auto" 
                  />
                ) : (
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-center">{university.logo}</div>
                )}
                {university.subtitle && !university.isImage && (
                  <div className="text-xs sm:text-sm font-medium leading-tight text-center">{university.subtitle}</div>
                )}
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {universities.row1.map((university, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 flex items-center justify-center p-1 sm:p-2 lg:p-4 transition-transform duration-300 hover:scale-110">
              <div className="flex flex-col items-center justify-center min-h-[50px] sm:min-h-[60px] lg:min-h-[80px]">
                {university.isImage ? (
                  <img 
                    src={university.logo} 
                    alt={university.name} 
                    className="max-w-[90px] max-h-[70px] sm:max-w-[100px] sm:max-h-[80px] lg:max-w-[120px] lg:max-h-[100px] w-auto h-auto object-contain block mx-auto" 
                  />
                ) : (
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-center">{university.logo}</div>
                )}
                {university.subtitle && !university.isImage && (
                  <div className="text-xs sm:text-sm font-medium leading-tight text-center">{university.subtitle}</div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Second row - moves from right to left */}
        <div className="flex gap-2 sm:gap-4 lg:gap-8 animate-[slideRightToLeft_100s_linear_infinite] w-max py-2 sm:py-4 lg:py-6">
          {/* First set of universities */}
          {universities.row2.map((university, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 flex items-center justify-center p-1 sm:p-2 lg:p-4 transition-transform duration-300 hover:scale-110">
              <div className="flex flex-col items-center justify-center min-h-[50px] sm:min-h-[60px] lg:min-h-[80px]">
                {university.isImage ? (
                  <img 
                    src={university.logo} 
                    alt={university.name} 
                    className="max-w-[90px] max-h-[70px] sm:max-w-[100px] sm:max-h-[80px] lg:max-w-[120px] lg:max-h-[100px] w-auto h-auto object-contain block mx-auto" 
                  />
                ) : (
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-center">{university.logo}</div>
                )}
                {university.subtitle && !university.isImage && (
                  <div className="text-xs sm:text-sm font-medium leading-tight text-center">{university.subtitle}</div>
                )}
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {universities.row2.map((university, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 flex items-center justify-center p-1 sm:p-2 lg:p-4 transition-transform duration-300 hover:scale-110">
              <div className="flex flex-col items-center justify-center min-h-[50px] sm:min-h-[60px] lg:min-h-[80px]">
                {university.isImage ? (
                  <img 
                    src={university.logo} 
                    alt={university.name} 
                    className="max-w-[90px] max-h-[70px] sm:max-w-[100px] sm:max-h-[80px] lg:max-w-[120px] lg:max-h-[100px] w-auto h-auto object-contain block mx-auto" 
                  />
                ) : (
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-center">{university.logo}</div>
                )}
                {university.subtitle && !university.isImage && (
                  <div className="text-xs sm:text-sm font-medium leading-tight text-center">{university.subtitle}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideLeftToRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slideRightToLeft {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-\[slideLeftToRight_100s_linear_infinite\]:hover {
          animation-play-state: paused;
        }

        .animate-\[slideRightToLeft_100s_linear_infinite\]:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default TopCollege
