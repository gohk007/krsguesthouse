import React from "react";
import {
  FaWhatsapp,
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
  FaChevronRight,
} from "react-icons/fa";
import "./Footer.css";

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* =====================================================
            Brand Header
        ====================================================== */}

        <div className="footer-header">
          <div className="footer-brand">
            <div className="brand-mark">
              <span>KRS</span>
            </div>

            <div>
              <h2>KRS Guest House</h2>
              <p>Comfortable stays. Warm hospitality.</p>
            </div>
          </div>

          <p className="footer-header-text">
            Your home away from home, where every stay is made comfortable
            with care, warmth, and genuine hospitality.
          </p>
        </div>

        <div className="footer-divider" />

        {/* =====================================================
            Main Footer Columns
        ====================================================== */}

        <div className="footer-main">

          {/* About */}
          <div className="footer-column footer-about">
            <h3>About KRS</h3>

            <p>
              Experience a peaceful and comfortable stay at KRS Guest House.
              We welcome every guest with thoughtful service and the warmth
              of home.
            </p>

            <a href="/enquiry" className="footer-outline-btn">
              Plan Your Stay
              <FaChevronRight />
            </a>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Explore</h3>

            <ul className="footer-links">
              <li>
                <a href="/">
                  <FaChevronRight />
                  Home
                </a>
              </li>

              <li>
                <a href="/attraction">
                  <FaChevronRight />
                  Attractions
                </a>
              </li>

              <li>
                <a href="/location">
                  <FaChevronRight />
                  Location
                </a>
              </li>

              <li>
                <a href="/contact">
                  <FaChevronRight />
                  Contact Us
                </a>
              </li>

              <li>
                <a href="/enquiry">
                  <FaChevronRight />
                  Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Get In Touch</h3>

            <a href="tel:+919448734152" className="footer-contact-item">
              <span className="contact-icon">
                <FaPhoneAlt />
              </span>

              <span>
                <small>Call Us</small>
                <strong>+91 94487 34152</strong>
              </span>
            </a>

            {/* Replace with your actual email */}
            <a
              href="mailto:krsguesthouse26@gmail.com"
              className="footer-contact-item"
            >
              <span className="contact-icon">
                <FaEnvelope />
              </span>

              <span>
                <small>Email Us</small>
                <strong>krsguesthouse26@gmail.com</strong>
              </span>
            </a>

            <a href="/contact" className="footer-contact-link">
              View Contact Details
              <FaChevronRight />
            </a>
          </div>

          {/* Location */}
          <div className="footer-column footer-location">
            <h3>Find Us</h3>

            <a
              href="https://www.google.com/maps/search/?api=1&query=K.R.S+Guest+House"
              target="_blank"
              rel="noopener noreferrer"
              className="location-card"
            >
              <div className="location-card-top">
                <span className="location-icon">
                  <FaMapMarkerAlt />
                </span>

                <span className="location-card-title">
                  K.R.S Guest House
                </span>

                <FaChevronRight className="location-arrow" />
              </div>

              <div className="location-card-bottom">
                <span>View our location</span>
                <span className="location-card-link">
                  Google Maps
                </span>
              </div>
            </a>

            <p className="location-note">
              We look forward to welcoming you.
            </p>
          </div>

        </div>

        {/* =====================================================
            Guest Actions
        ====================================================== */}

        <div className="footer-guest-section">
          <div className="guest-section-heading">
            <span className="guest-section-label">Stay Connected</span>
            <h3>We'd love to hear from you</h3>
            <p>Have a question or enjoyed your stay?</p>
          </div>

          <div className="footer-actions">

            <a
              href="https://wa.me/919448734152"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-action whatsapp-action"
              aria-label="Chat with KRS Guest House on WhatsApp"
            >
              <div className="action-icon">
                <FaWhatsapp />
              </div>

              <div className="action-content">
                <span className="action-label">Quick Contact</span>
                <strong>Chat on WhatsApp</strong>
                <small>We'd love to hear from you</small>
              </div>

              <span className="action-arrow">→</span>
            </a>

            <a
              href="https://g.page/r/CVuyigziKlU3EBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-action review-action"
              aria-label="Leave a Google review for KRS Guest House"
            >
              <div className="action-icon">
                <FaStar />
              </div>

              <div className="action-content">
                <span className="action-label">Your Experience Matters</span>
                <strong>Leave a Google Review</strong>
                <small>Share your stay with others</small>
              </div>

              <span className="action-arrow">→</span>
            </a>

          </div>
        </div>

        {/* =====================================================
            Bottom Bar
        ====================================================== */}

        <div className="footer-bottom">
          <p>
            © {currentYear} <span>KRS Guest House</span>. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="/">Home</a>
            <span>•</span>
            <a href="/contact">Contact</a>
            <span>•</span>
            <a href="/enquiry">Enquiry</a>
          </div>

          <button
            className="back-to-top"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
});

export default Footer;