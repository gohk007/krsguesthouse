import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>K R S GUEST HOUSE</h1>
        <p>For assistance with bookings or information, give us a call at: <strong>9448734152</strong></p>
      </div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => handleLinkClick("home")}
              className={activeLink === "home" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/location"
              onClick={() => handleLinkClick("location")}
              className={activeLink === "location" ? "active" : ""}
            >
              Map
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => handleLinkClick("contact")}
              className={activeLink === "contact" ? "active" : ""}
            >
              Reservation
            </Link>
          </li>
          <li>
            <Link
              to="/attraction"
              onClick={() => handleLinkClick("attraction")}
              className={activeLink === "attraction" ? "active" : ""}
            >
              Attraction
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={() => handleLinkClick("gallery")}
              className={activeLink === "gallery" ? "active" : ""}
            >
              Gallery
            </Link>
          </li>
        </ul>
        {/* <a
          href="https://wa.me/919448734152"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          WhatsApp
        </a> */}
      </nav>
    </header>
  );
};

export default Header;
