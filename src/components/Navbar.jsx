import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWrench, faRecycle, faInfoCircle, faSignInAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const[menu,setMenu]=useState("home");
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="" alt="wastix Logo" className='logo' />
      </div>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>
          <Link to="/"><FontAwesomeIcon icon={faHome} /> HOME</Link>
        </li>
        <li onClick={()=>setMenu("services")} className={menu==="services"?"active":""}>
          <Link to="/services"><FontAwesomeIcon icon={faWrench} /> Services</Link>
        </li>
        <li onClick={()=>setMenu("what-we-buy")} className={menu=== "what-we-buy"?"active":""}>
          <Link to="/what-we-buy"><FontAwesomeIcon icon={faRecycle} /> WHAT WE BUY</Link>
        </li>
        <li onClick={()=>setMenu("About")} className={menu==="About"?"active":""}>
          <Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> About</Link>
        </li>
        <li onClick={()=>setMenu("login")} className={menu==="login"?"active":""}>
          <Link to="/auth"><FontAwesomeIcon icon={faSignInAlt} /> LOGIN</Link>
        </li>
      </ul>
      <div className="navbar-hamburger">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;