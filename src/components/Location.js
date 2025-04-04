import React, { useEffect, useState } from "react";
import "./Location.css";

const Location = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000); // Load after 1 second delay to improve perceived performance
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="location">
      <h2>Find Us Here</h2>
      <div className="map-container">
        {mapLoaded ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31019.448193263533!2d74.85408!3d14.071459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc71f9a9acffc1%3A0x37552ae20c8ab25b!2sK.R.S%20Guest%20House!5e0!3m2!1sen!2sin!4v1699189485749!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="K.R.S Guest House Location"
          ></iframe>
        ) : (
          <p className="loading-text">Loading map...</p>
        )}
      </div>
    </section>
  );
};

export default Location;
