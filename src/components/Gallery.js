import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "image14.jpeg",
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

  return (
    <section className="gallery">
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery item ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
