import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "/image7.jpeg",
    "/image6.jpeg",
    "/image2.jpg",
    "/image3.jpg",
  ];

  return (
    <section className="gallery">
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
