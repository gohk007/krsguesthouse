import React from "react";
import {
  FaArrowUp,
  FaChevronRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

const PHONE = "+919448734152";
const EMAIL = "krsguesthouse26@gmail.com";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=K.R.S+Guest+House";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Attractions", href: "/attraction" },
  { label: "Rooms", href: "/rooms" },
  { label: "Book now", href: "/contact" },
  { label: "Enquiry", href: "/enquiry" },
];

const Footer = React.memo(function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__glow site-footer__glow--left" />
      <div className="site-footer__glow site-footer__glow--right" />

      <div className="site-footer__container">
        {/* ============ MAIN GRID ============ */}
        <div className="site-footer__grid">
          {/* ABOUT */}
          <section className="footer-section footer-section--about">
            <div className="footer-brand">
              <span className="footer-brand__mark" aria-hidden="true">
                KRS
              </span>
              <span className="footer-brand__name">
                Guest House
                <small>Rest. Recharge. Feel at home.</small>
              </span>
            </div>

            <p className="footer-section__description">
              A peaceful place to rest and recharge. We welcome every guest
              with attentive service, modern comfort and warm, authentic
              hospitality.
            </p>

            <a className="footer-button" href="/enquiry">
              <span>Plan your stay</span>
              <FaChevronRight aria-hidden="true" />
            </a>
          </section>

          {/* EXPLORE */}
          <nav
            className="footer-section footer-section--explore"
            aria-label="Footer navigation"
          >
            <FooterHeading title="Explore" />
            <ul className="footer-navigation">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    <span className="footer-navigation__dot" aria-hidden="true" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT */}
          <section className="footer-section footer-section--contact">
            <FooterHeading title="Get in touch" />
            <div className="footer-contact-list">
              <ContactLink
                href={`tel:${PHONE}`}
                icon={<FaPhoneAlt />}
                label="Call us"
                value="+91 94487 34152"
              />
              <ContactLink
                href={`mailto:${EMAIL}`}
                icon={<FaEnvelope />}
                label="Email us"
                value={EMAIL}
              />
            </div>
          </section>

          {/* LOCATION */}
          <section className="footer-section footer-section--location">
            <FooterHeading title="Find us" />
            <a
              className="footer-location"
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View KRS Guest House on Google Maps"
            >
              <span className="footer-location__icon" aria-hidden="true">
                <FaMapMarkerAlt />
              </span>
              <span className="footer-location__content">
                <strong>K.R.S Guest House</strong>
                <span>Open in Google Maps</span>
              </span>
              <span className="footer-location__arrow" aria-hidden="true">
                <FaChevronRight />
              </span>
            </a>
            <p className="footer-location-note">We look forward to welcoming you.</p>
          </section>
        </div>

        {/* ============ MOBILE QUICK BAR ============ */}
        <div className="footer-quick" aria-label="Quick contact">
          <a href={`tel:${PHONE}`} aria-label="Call KRS Guest House">
            <FaPhoneAlt aria-hidden="true" />
            <span>Call</span>
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email KRS Guest House">
            <FaEnvelope aria-hidden="true" />
            <span>Email</span>
          </a>
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open KRS Guest House on Google Maps"
          >
            <FaMapMarkerAlt aria-hidden="true" />
            <span>Map</span>
          </a>
        </div>

        {/* ============ CONNECT ============ */}
        <section className="footer-connect">
          <div className="footer-connect__heading">
            <h2>We would love to hear from you</h2>
            <p>Have a question, or want to share your experience?</p>
          </div>

          <div className="footer-connect__actions">
            <ActionCard
              href="https://wa.me/919448734152"
              className="footer-action--whatsapp"
              icon={<FaWhatsapp />}
              title="Chat on WhatsApp"
              description="Get a quick reply from us"
              ariaLabel="Chat with KRS Guest House on WhatsApp"
            />
            <ActionCard
              href="https://g.page/r/CVuyigziKlU3EBM/review"
              className="footer-action--review"
              icon={<FaStar />}
              title="Leave a Google review"
              description="Share your stay with others"
              ariaLabel="Leave a Google review for KRS Guest House"
            />
          </div>
        </section>

        {/* ============ BOTTOM ============ */}
        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {currentYear} <strong>KRS Guest House</strong>.
            <span> All rights reserved.</span>
          </p>

          <nav className="site-footer__legal-navigation" aria-label="Footer shortcuts">
            <a href="/">Home</a>
            <span aria-hidden="true" />
            <a href="/contact">Contact</a>
            <span aria-hidden="true" />
            <a href="/enquiry">Enquiry</a>
          </nav>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to the top"
            title="Back to top"
          >
            <FaArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
});

/* ---------------- Reusable pieces ---------------- */

function FooterHeading({ title }) {
  return (
    <div className="footer-heading">
      <h3>{title}</h3>
      <span aria-hidden="true" />
    </div>
  );
}

function ContactLink({ href, icon, label, value }) {
  return (
    <a className="footer-contact" href={href}>
      <span className="footer-contact__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="footer-contact__content">
        <small>{label}</small>
        <strong>{value}</strong>
      </span>
      <FaChevronRight className="footer-contact__arrow" aria-hidden="true" />
    </a>
  );
}

function ActionCard({ href, className, icon, title, description, ariaLabel }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`footer-action ${className}`}
      aria-label={ariaLabel}
    >
      <span className="footer-action__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="footer-action__content">
        <strong>{title}</strong>
        <span>{description}</span>
      </span>
      <span className="footer-action__arrow" aria-hidden="true">
        <FaChevronRight />
      </span>
    </a>
  );
}

export default Footer;