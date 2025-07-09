// src/components/ContactBar.js
import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './ContactBar.css';

const ContactBar = () => {
  return (
    <div className="contact-bar">
      <div className="contact-item">
        <FaPhoneAlt className="contact-icon" />
        <span className="contact-text">9448734152</span>
      </div>
      <div className="contact-item">
        <FaWhatsapp className="contact-icon" />
        <span className="contact-text">9448734152</span>
      </div>
    </div>
  );
};

export default ContactBar;
