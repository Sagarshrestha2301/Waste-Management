import React from 'react';
import './ServicesPage.css';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';


const ServicesPage = () => {
  
  const services = [
    {
      title: "Shred and Recycle",
      description: "On-site shredding services for banks, co-operatives, and corporate clients.",
      image: "shred_recycle.jpg"
    },
    {
      title: "Smart Bucket",
      description: "Our new in-house composting solution for all your gardening needs!",
      image: "smart_bucket.jpg"
    },
    {
      title: "E-waste Nepal",
      description: "Nepal's first e-waste recycling online portal.",
      image: "ewaste_nepal.jpg"
    },
    {
      title: "Tara - Sustainability Shop",
      description: "A creative range by wastix Recyclers towards Zero Waste.",
      image: "tara_shop.jpg"
    },
    {
      title: "Waste Education & Awareness Program",
      description: "Workshops for schools, corporate or community groups on waste management.",
      image: "waste_education.jpg"
    },
    {
      title: "Sikaru Saathi",
      description: "Empowering waste workers and promoting sustainable waste management.",
      image: "sikaru_saathi.jpg"
    }
  ];

  return <>
    <Header/>   
     <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
        </>
};

export default ServicesPage;