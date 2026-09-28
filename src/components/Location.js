import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaDirections, FaStar } from "react-icons/fa";
import { googleMapsDirectionsUrl, googleReviewUrl } from "../business";
import "./Location.css";

const commonFacilities = [
  "Attached Bathroom",
  "Hot Water",
  "Clean & Hygienic",
  "Peaceful Environment",
];

const rooms = [
  {
    icon: "🛏️",
    title: "2-Occupancy Room",
    description: "Perfect for a family of 2",
    guests: "Up to 2 Guests",
    facilities: commonFacilities,
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "4-Occupancy Family Room",
    description:
      "A spacious choice for families and small groups traveling together.",
    guests: "Up to 4 Guests",
    facilities: commonFacilities,
  },
  {
    icon: "🏡",
    title: "6-Occupancy Room",
    description:
      "Ideal for larger families or groups who want to stay together.",
    guests: "Up to 6 Guests",
    facilities: commonFacilities,
  },
];

const images = [
  "https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752135436/image1_a8nu2z.jpg",
  "https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752042709/image5_j4v2ry.jpg",
  "https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752042710/image7_l9m8tg.jpg",
  "https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752042704/image3_wkn9am.jpg",
  "https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752042716/image9_e7fsub.jpg",
  "https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752042705/image2_ab94xp.jpg",
  "https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752042708/image6_mp6ajj.jpg",
  "https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752135435/image7_1_q4pgpx.jpg",
];

const Location = () => {
  // Index of the open image, or null when the lightbox is closed
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const step = useCallback(
    (dir) => setActiveIndex((i) => (i + dir + images.length) % images.length),
    []
  );

  // Keyboard controls + lock page scroll while lightbox is open
  useEffect(() => {
    if (activeIndex === null) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, step]);

  // Make sure the contact page starts from the top
  const handleBookNow = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className="location">
      <div className="location-bg-circle location-bg-circle-one" />
      <div className="location-bg-circle location-bg-circle-two" />

      <div className="location-container">
        {/* HEADER */}
        <header className="location-header">
          <span className="location-eyebrow">STAY WITH US</span>

          <h1>
            Comfortable Rooms,
            <span> Beautiful Memories</span>
          </h1>

          <p>
            Choose the room that suits your group and explore some of the
            beautiful moments and spaces at K.R.S Guest House.
          </p>
        </header>

        <div className="location-content">
          {/* ROOM TYPES */}
          <div className="room-types-section">
            <div className="section-heading">
              <div className="heading-icon" aria-hidden="true">🛎️</div>
              <div>
                <span>ACCOMMODATION</span>
                <h2>Room Types &amp; Tariff</h2>
              </div>
            </div>

            <div className="room-list">
              {rooms.map((room) => (
                <article className="room-card" key={room.title}>
                  <div className="room-icon" aria-hidden="true">
                    {room.icon}
                  </div>

                  <div className="room-info">
                    <div className="room-title-row">
                      <h3>{room.title}</h3>
                      <span className="guest-badge">{room.guests}</span>
                    </div>

                    <p>{room.description}</p>

                    <ul className="room-features">
                      {room.facilities.map((facility) => (
                        <li key={facility}>{facility}</li>
                      ))}
                    </ul>

                    <div className="room-footer">
                      <span className="tariff-text">Seasonal tariff</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pricing note */}
           
          </div>

          {/* GALLERY */}
          <div className="gallery-section">
            <div className="section-heading">
              <div className="heading-icon" aria-hidden="true">📸</div>
              <div>
                <span>OUR GALLERY</span>
                <h2>Explore Our Stay</h2>
              </div>
            </div>

            <div className="gallery-grid">
              {images.map((image, index) => (
                <button
                  type="button"
                  className={`gallery-card gallery-card-${index + 1}`}
                  key={image}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View gallery image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`K.R.S Guest House gallery ${index + 1}`}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <span className="image-overlay" aria-hidden="true">
                    <span className="view-icon">↗</span>
                    <span className="view-text">View Image</span>
                  </span>
                </button>
              ))}
            </div>
             <div className="pricing-note">
              <div className="note-icon" aria-hidden="true">ℹ️</div>
              <div>
                <strong>Planning your stay?</strong>
                <p>
                  Room rates may vary depending on the season and availability.
                  Contact us for the latest tariff and room availability.
                </p>
              </div>
            </div>
          </div>
          
        </div>

        {/* BOTTOM CTA */}
        <div className="location-cta">
          <div className="cta-content">
            <span className="cta-icon" aria-hidden="true">✨</span>
            <div>
              <h3>Ready to plan your stay?</h3>
              <p>
                Get in touch with us for room availability and seasonal rates.
              </p>
            </div>
          </div>

          <Link to="/contact" className="cta-button" onClick={handleBookNow}>
            Book with Us
            <span aria-hidden="true">→</span>
          </Link>

          <div className="location-trust-actions">
            <a
              className="location-action directions-action"
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDirections aria-hidden="true" />
              Get Directions
            </a>
            <a
              className="location-action review-action"
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaStar aria-hidden="true" />
              See us on Google
            </a>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div
          className="lightbox"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <button
            type="button"
            className="close-button"
            onClick={close}
            aria-label="Close image"
          >
            ×
          </button>

          <button
            type="button"
            className="nav-button nav-prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            src={images[activeIndex]}
            alt={`K.R.S Guest House gallery ${activeIndex + 1}`}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            className="nav-button nav-next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
          >
            ›
          </button>

          <span className="lightbox-count">
            {activeIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </section>
  );
};

export default Location; 