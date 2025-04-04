import React, { useState } from "react";
import "./Gallery.css";

const images = [
  "/image14.jpeg",
  "/image7.jpeg",
  "/image6.jpeg",
  "/image2.jpg",
  "/image3.jpg",
  "/image1.jpg",
  "/image4.jpg",
  "/image5.jpeg",
  "/image8.jpeg",
  "/image9.jpeg",
  "/image10.jpeg",
  "/image11.jpeg",
  "/image12.jpeg",
  "/image13.jpeg"
];

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="image-container">
        {images.map((image, index) => (
          <LazyImage key={index} src={image} alt={`Gallery item ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`gallery-image ${loaded ? "loaded" : "loading"}`}
      loading="lazy"
      onLoad={() => setLoaded(true)}
    />
  );
};

export default Gallery;
