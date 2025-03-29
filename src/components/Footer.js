import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <p>© 2024 KRS Guest House. All rights reserved.</p>
    <p>
      Need assistance? 
      <a 
        href="https://wa.me/919448734152" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-link"
      >
        Chat with us on WhatsApp
      </a>
    </p>
  </footer>
);

export default Footer;

