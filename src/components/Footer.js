import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import social icons
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} KRS Guest House. All rights reserved.</p>
        <p>
          Need assistance?  
          <a 
            href="https://wa.me/919448734152" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-link"
          >
            <FaWhatsapp className="icon" /> Chat with us on WhatsApp
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;