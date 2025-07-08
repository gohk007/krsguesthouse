import React from "react";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import "./Footer.css";

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} KRS Guest House. All rights reserved.</p>
        <div className="footer-links">
          <a
            href="https://wa.me/919448734152"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <FaWhatsapp className="icon" /> Chat with us on WhatsApp
          </a>
          <a
            href="https://g.page/r/CVuyigziKlU3EBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="review-link"
          >
            <FaStar className="icon star" /> Leave us a review on Google
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
