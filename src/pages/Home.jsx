import React from "react";

import "./Home.css";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import HowItWorks from "./HowItWorks";
import WhatWeBuy from "./WhatWeBuy";
import WhyWastix from "./WhyWastix";
import Testimonials from "../components/testimonials";

const Home = () => {
  return <>
    <div className="frontPage">
      <Header />
    </div>
    <WhyWastix />
      <HowItWorks />
      <WhatWeBuy />
      <Testimonials />
      <Footer />
    </>
};

export default Home;
