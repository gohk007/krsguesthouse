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

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Attractions", href: "/attraction" },
  { label: "Location", href: "/location" },
  { label: "Contact Us", href: "/contact" },
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
        {/* Brand introduction */}
        <section className="site-footer__intro">
          <div className="footer-brand">
            <div className="footer-brand__mark" aria-hidden="true">
              <span>KRS</span>
            </div>

            <div className="footer-brand__content">
              <p className="footer-brand__eyebrow">Welcome to</p>
              <h2 className="footer-brand__title">KRS Guest House</h2>
              <p className="footer-brand__tagline">
                Comfortable stays. Warm hospitality.
              </p>
            </div>
          </div>

          <div className="site-footer__welcome">
            <span className="site-footer__welcome-line" aria-hidden="true" />

            <p>
              Your home away from home, where thoughtful comfort and genuine
              hospitality make every stay memorable.
            </p>
          </div>
        </section>

        <div className="footer-separator" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>

        {/* Main content */}
        <div className="site-footer__grid">
          <section className="footer-section footer-section--about">
            <FooterHeading title="About KRS" />

            <p className="footer-section__description">
              Discover a peaceful place to rest, recharge, and feel at home.
              We welcome every guest with attentive service, modern comfort,
              and the warmth of authentic hospitality.
            </p>

            <a className="footer-button" href="/enquiry">
              <span>Plan Your Stay</span>
              <FaChevronRight aria-hidden="true" />
            </a>
          </section>

          <nav className="footer-section" aria-label="Footer navigation">
            <FooterHeading title="Explore" />

            <ul className="footer-navigation">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    <span className="footer-navigation__icon">
                      <FaChevronRight aria-hidden="true" />
                    </span>

                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="footer-section">
            <FooterHeading title="Get in Touch" />

            <div className="footer-contact-list">
              <ContactLink
                href="tel:+919448734152"
                icon={<FaPhoneAlt />}
                label="Call us"
                value="+91 94487 34152"
              />

              <ContactLink
                href="mailto:krsguesthouse26@gmail.com"
                icon={<FaEnvelope />}
                label="Email us"
                value="krsguesthouse26@gmail.com"
              />
            </div>

            <a className="footer-text-link" href="/contact">
              <span>View contact details</span>
              <FaChevronRight aria-hidden="true" />
            </a>
          </section>

          <section className="footer-section">
            <FooterHeading title="Find Us" />

            <a
              className="footer-location"
              href="[google.com](https://www.google.com/maps/search/?api=1&query=K.R.S+Guest+House)"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View KRS Guest House on Google Maps"
            >
              <span className="footer-location__icon">
                <FaMapMarkerAlt aria-hidden="true" />
              </span>

              <span className="footer-location__content">
                <small>Our location</small>
                <strong>K.R.S Guest House</strong>
                <span>Open in Google Maps</span>
              </span>

              <span className="footer-location__arrow">
                <FaChevronRight aria-hidden="true" />
              </span>
            </a>

            <p className="footer-location-note">
              We look forward to welcoming you.
            </p>
          </section>
        </div>

        {/* Guest actions */}
        <section className="footer-connect">
          <div className="footer-connect__heading">
            <p className="footer-kicker">Stay connected</p>
            <h2>We would love to hear from you</h2>
            <p>Have a question or want to share your experience?</p>
          </div>

          <div className="footer-connect__actions">
            <ActionCard
              href="[wa.me](https://wa.me/919448734152)"
              className="footer-action--whatsapp"
              icon={<FaWhatsapp />}
              eyebrow="Quick contact"
              title="Chat on WhatsApp"
              description="Start a conversation with us"
              ariaLabel="Chat with KRS Guest House on WhatsApp"
            />

            <ActionCard
              href="[g.page](https://g.page/r/CVuyigziKlU3EBM/review)"
              className="footer-action--review"
              icon={<FaStar />}
              eyebrow="Your experience matters"
              title="Leave a Google Review"
              description="Share your stay with others"
              ariaLabel="Leave a Google review for KRS Guest House"
            />
          </div>
        </section>

        {/* Bottom bar */}
        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            Copyright © {currentYear} <strong>KRS Guest House</strong>.
            <span> All rights reserved.</span>
          </p>

          <nav
            className="site-footer__legal-navigation"
            aria-label="Footer shortcuts"
          >
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

      <FaChevronRight
        className="footer-contact__arrow"
        aria-hidden="true"
      />
    </a>
  );
}

function ActionCard({
  href,
  className,
  icon,
  eyebrow,
  title,
  description,
  ariaLabel,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`footer-action ${className}`}
      aria-label={ariaLabel}
    >
      <span className="footer-action__shine" aria-hidden="true" />

      <span className="footer-action__icon" aria-hidden="true">
        {icon}
      </span>

      <span className="footer-action__content">
        <small>{eyebrow}</small>
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
