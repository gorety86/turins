import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../Images/logoImage.avif' 

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'maroon',
    color: 'white',
    padding: '1rem 0',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '2px',
  };
  return (
    <nav style={navStyle}>
       {/* Logo */}
       <div>
        <img src={logoImage} alt="Logo" style={{ width: '50px', height: '50px' }} />
      </div>
      <ul style={{ listStyleType: 'none', display: 'flex', padding: 0 }}>
        <li className="nav-item">
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about-us" style={linkStyle}>About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/our-services" style={linkStyle}> Our Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" style={linkStyle}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;