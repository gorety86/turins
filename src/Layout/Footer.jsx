import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container" >
      <div className="footer-section">
        <h3>OFFICE CONTACTS</h3>
        <p>TEL: Mobile: +254702648140<br />
          <br />
          +254 725377929<br />
          <br />
          +254 759236928<br />
          <br />
          <a href="mailto:turinsbylatech@gmail.com">turinsbylatech@gmail.com</a>
        </p>
      </div>
        <div className="copyright-content">
          <p className="left-copyright">&copy; Turins Bylatech Technologies Ltd.</p>
          <p className="left-copyright">&copy; 2023</p>
          <p className="right-copyright">&copy; All Rights Reserved</p>
        </div>
    </div>
  );
}

export default Footer;