import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    question: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.email.trim()) newErrors.email = "Email address is required.";
    if (!formData.question.trim()) newErrors.question = "Please enter your question.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await fetch("https://formspree.io/f/xldjvgdp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", question: "" });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <section className="hero">
      <div className="overlay">
        <div className="content">
          <h1>Welcome to KRS Guest House</h1>
          <p>
            With the divine blessings of Sigandur Chowdeshwari Matha, we have built a serene retreat just 400 meters from the temple, offering a peaceful haven on the tranquil banks of the Sharavathi River for spiritual seekers and nature lovers alike.
          </p>
          <form onSubmit={handleSubmit} className="enquiry-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <textarea
              name="question"
              placeholder="Your Question"
              value={formData.question}
              onChange={handleChange}
              required
            />
            {errors.question && <p className="error">{errors.question}</p>}

            <button type="submit">Submit Enquiry</button>
            {submitted && <p className="success">Thank you! We will get back to you soon. Please check your email for our response.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default About;
