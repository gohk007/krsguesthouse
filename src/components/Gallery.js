import React from "react";
import "./Gallery.css";

const images = [
  "https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752135436/image1_a8nu2z.jpg", "https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752042709/image5_j4v2ry.jpg", "https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752042710/image7_l9m8tg.jpg", "https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752042704/image3_wkn9am.jpg",
  "https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752042716/image9_e7fsub.jpg",
   "https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752042705/image2_ab94xp.jpg", "https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752042708/image6_mp6ajj.jpg", "https://res.cloudinary.com/dm0l1t1vk/image/upload/v1752135435/image7_1_q4pgpx.jpg"
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
