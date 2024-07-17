import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import HowItWorks from "./HowItWorks";
import WhatWeBuy from "./WhatWeBuy";
import WhyWastix from "./WhyWastix";
import Testimonials from "../components/testimonials";




const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/RecyclingForm');
  };

  return (
    <>
      <div className="frontPage">
        <Header />
        <div className="welcome-content">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fadeIn">
            Welcome to Wastix
          </h1>
          <p className="text-xl text-white mb-8 animate-slideUp">
            Revolutionizing waste management for a cleaner, greener future!
          </p>
          <button 
            className="bg-[#00a86b] text-white font-bold py-3 px-6 rounded-full hover:bg-[#008c5a] transition-colors duration-300 animate-scaleIn"
            onClick={handleGetStarted}
          >
            Get Started Now
          </button>
        </div>
      </div>
      <WhyWastix />
      <HowItWorks />
      <WhatWeBuy />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;