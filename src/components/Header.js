import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = useCallback((link) => setActiveLink(link), []);

  const navItems = [
    { path: "/", label: "Home", id: "home" },
    { path: "/location", label: "Map", id: "location" },
    { path: "/contact", label: "Reservation", id: "contact" },
    { path: "/attraction", label: "Attraction", id: "attraction" },
    { path: "/gallery", label: "Gallery", id: "gallery" },
    { path: "/details", label: "Guest Policies", id: "details" },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-title">
          <img src="https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752042707/krs_gelrwv.webp" alt="KRS Logo" className="krs-logo" />
          <h1>K R S GUEST HOUSE</h1>
        </div>
        <p>
        near Siganduru Chowdeshwari Temple, for Room bookings please call:{" "}
          <a href="tel:+9448734152" className="call-button"><strong>9448734152</strong></a>
        </p>
      </div>
      <nav className="nav-bar">
        <ul>
          {navItems.map(({ path, label, id }) => (
            <li key={id}>
              <Link
                to={path}
                onClick={() => handleLinkClick(id)}
                className={activeLink === id ? "active" : ""}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
