import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaCogs, FaBlog, FaEnvelope, FaSignInAlt } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return <>
  
    <nav>
        <Link to="/"><img src="/assets/logo.png" alt="logo" className="logo" /></Link>
        <ul>
          <li><Link to="/"><FaHome />Home</Link></li>
          <li><Link to="/About"><FaInfoCircle />About</Link></li>
          <li><Link to="/Services"><FaCogs />Services</Link></li>
          <li><Link to="/Blog"><FaBlog />Blog</Link></li>
          <li><Link to="/Contact"><FaEnvelope />Contact</Link></li>
          <li><Link to="/Login"><FaSignInAlt />Login</Link></li>
        </ul>
      </nav>
      
  </>
}

export default Header;