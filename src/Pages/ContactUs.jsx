import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to backend
    try {
      const response = await fetch('/api/contact', {  // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      // Handle response as needed
      console.log(response);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="contact-us-container">
      <div className="contact-details">
        <h3>Contact Details</h3>
        <div className="contact-item">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <p>
            <span className="contact-label">Physical Address:</span> Tumaini Mall, Kisumu<br />
          </p>
        </div>       
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p>
            <span className="contact-label">Email:</span> <a href="turinsbylatech@gmail.com">turinsbylatech@gmail.com</a><br />
          </p>
        </div>
      </div>
      <div className="contact-form">
        <h3 className="form-title">Contact Me</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name Example" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="email@gmail.com" onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="chat with turins" onChange={handleInputChange}></textarea>
          </div>
          <button className="send-button" type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;