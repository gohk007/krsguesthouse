import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./FloatingButtons.css";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Handle scroll event to show/hide buttons
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`floating-buttons ${isVisible ? "visible" : "hidden"}`}>
      <a href="https://wa.me/919448734152" className="fab whatsapp" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
      <a href="mailto:krsguesthouse26@gmail.com" className="fab email">
        <FaEnvelope />
      </a>
      <a href="tel:+919448734152" className="fab call">
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default FloatingButtons;
