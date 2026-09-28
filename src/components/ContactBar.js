import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { trackEvent } from '../analytics';
import './ContactBar.css';

const CONTACTS = [
  {
    id: 'booking_phone_top_bar',
    label: 'Booking number (10am to 8pm)',
    display: '94487 34152',
    tel: '+919448734152',
  },
  {
    id: 'night_phone_top_bar',
    label: 'Night contact (10pm to 8am)',
    display: '84318 13492',
    tel: '+918431813492',
  },
];

const ContactBar = () => (
  <nav className="contact-bar" aria-label="Contact numbers">
    {CONTACTS.map(({ id, label, display, tel }) => (
      <a
        key={id}
        href={`tel:${tel}`}
        className="contact-bar__link"
        aria-label={`${label}: call ${display}`}
        onClick={() => trackEvent('contact', 'click', id)}
      >
        <span className="contact-bar__badge" aria-hidden="true">
          <FaPhoneAlt className="contact-bar__icon" />
        </span>
        <span className="contact-bar__text">
          <span className="contact-bar__label">{label}:</span>{' '}
          <span className="contact-bar__number">{display}</span>
        </span>
      </a>
    ))}
  </nav>
);

export default ContactBar;