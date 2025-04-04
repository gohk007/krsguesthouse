import React from "react";
import "./Contact.css";

const Contact = () => (
  <section className="contact">
    <h2>How to Book Rooms</h2>
    <ol>
      <li>Call us at <a href="tel:+919448734152"><strong>+91-9448734152</strong></a> to check room availability.</li>
      <li>If rooms are available, proceed with the payment via 
        <a href="https://payments.google.com" target="_blank" rel="noopener noreferrer"><strong>GPay</strong></a> 
        or 
        <a  href="https://www.phonepe.com/" target="_blank" rel="noopener noreferrer"><strong>PhonePe</strong></a>.
      </li>
      <li>After payment, send a screenshot of the transaction, along with your Aadhar card, member details, and the date of stay through WhatsApp.</li>
      <li>Confirm the booking on the call with us.</li>
      <li>On the day of check-in, give us a call, and you will be provided with your room number.</li>
    </ol>

    <h2>Contact Us</h2>
    <p>Email: <a href="mailto:krsguesthouse26@gmail.com"><strong>krsguesthouse26@gmail.com</strong></a></p>
    <p>Phone: <a href="tel:+919448734152"><strong>+91-9448734152</strong></a></p>
    <p>Address: KRS Guest house, Tumari, Sagar, Shivamogga</p>
  </section>
);

export default Contact;
