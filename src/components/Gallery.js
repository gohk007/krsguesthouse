import React from "react";
import "./Gallery.css";

const images = [
  "/image1.png", "/image5.png", "/image9.png", "/image3.png",
  "/image13.png", "/image2.png", "/image6.png", "/image7.png"
];

const LazyImage = React.memo(({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="gallery-image"
    loading="lazy"
  />
));

const Gallery = () => (
  <section className="gallery">
    <div className="image-container">
      {images.map((image, index) => (
        <LazyImage key={index} src={image} alt={`Gallery item ${index + 1}`} />
      ))}
    </div>
  </section>
);

export default Gallery;
