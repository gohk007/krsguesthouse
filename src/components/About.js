import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => (
  <section className="hero">
    <div className="overlay">
      <div className="content">
        <h1>Welcome to KRS Guest House</h1>
        <p>
        With the divine blessings of Sigandur Chowdeshwari Matha, we have built a serene retreat just 400 meters from the temple, offering a peaceful haven on the tranquil banks of the Sharavathi River for spiritual seekers and nature lovers alike.
        </p>
        <Link to="/contact" className="cta-button">Book Your Stay</Link>
      </div>
    </div>
  </section>
);

export default About;
