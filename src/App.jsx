import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from "./component/HeroSection";
import TopCollege from "./component/TopCollege";
import OfferCta from './component/OfferCta';
import UniversityTeachers from './component/UniversityTeachers';
import HowItWorks from './component/HowItWorks';
import Banner from './component/Banner';
import AluminiStudent from './component/AluminiStudent';
import Testnomial from './component/Testnomial';
import Faq from './component/Faq';
import Footer from './component/Footer';
import GetWes from './component/GetWes';
import Sponser from './component/Sponser';
function App() {
  return (
    <>
    <Sponser/>  
      <Navbar/>
      
      <div className="main-content"> 
         <HeroSection />
        <TopCollege/>
        <OfferCta/>
        <UniversityTeachers/>
        <HowItWorks/>
        <Banner/>
        <AluminiStudent/>
        <Testnomial/>
        <Faq/>
        <GetWes/>
      </div>
      <Footer/>
    </>
  );
}

export default App
