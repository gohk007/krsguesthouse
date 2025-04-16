import React, { useEffect, useState } from "react";
import "./Location.css";

const reviews = [
  {
    name: "Hemanth gowda",
    text: "Had a fantastic experience during my time at this hotel! The location couldn't have been better – within walking distance of the temple. Having all the amenities right at my fingertips, along with the always helpful staff, made my stay even more enjoyable.",
    rating: 5
  },
  {
    name: "Manikanta Myageri",
    text: "I had a wonderful stay at this guest house, which is undoubtedly the best in the area. The location is perfect, being close to the temple, making it convenient for visitors. The rooms are neat, clean, and well-maintained, ensuring a comfortable experience The guest house offers essential amenities like hot water facilities, ample car parking, and security with CCTV cameras, adding to the peace of mind. The overall atmosphere is serene, making it an ideal choice for both short and long stays.Highly recommended for anyone visiting the temple and looking for a hassle-free stay!",
    rating: 5
  },
  {
    name: "Sunil Bhandari",
    text: "The accommodations were well-maintained making it a very comfortable place to relax. The attention to cleanliness was outstanding.The location was perfect—close to the temple.Overall, it was a fantastic stay! We couldn’t have asked for more and would definitely come back again.",
    rating: 5
  }
];

const Location = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="location">
      <h2>Find Us Here</h2>
      <div className="location-grid">
        <div className="map-container">
          {mapLoaded ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31019.448193263533!2d74.85408!3d14.071459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc71f9a9acffc1%3A0x37552ae20c8ab25b!2sK.R.S%20Guest%20House!5e0!3m2!1sen!2sin!4v1699189485749!5m2!1sen!2sin"
              width="100%"
              height="100%"
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
        <div className="review-section">
          <h3>Customer Reviews</h3>
          {reviews.map((review, index) => (
            <div className="review" key={index}>
              <div className="review-name">{review.name}</div>
              <div className="review-text">{review.text}</div>
              <div className="review-rating">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
