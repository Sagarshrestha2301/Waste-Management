import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-info">
          <p>
            We believe in Smart Sustainability: The practice of living a
            sustainable life while spreading awareness to the local community
            about sustainable living at the same time.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>OUR COMPANY</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>SERVICES</h3>
          <ul>
            <li><a href="#">Shredding</a></li>
            <li><a href="#">Composting</a></li>
            <li><a href="#">E-waste</a></li>
            <li><a href="#">Tours and Workshops</a></li>
          </ul>
        </div>
        
       
      </div>
      <div className="footerImg">
        
      </div>
    </footer>
  );
};

export default Footer;