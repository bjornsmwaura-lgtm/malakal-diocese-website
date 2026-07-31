// src/components/common/ContactSection.jsx

import React from 'react';
import './ContactSection.css';

const ContactSection = ({ 
  email, 
  phone, 
  location, 
  officeHours,
  title = 'Contact Us'
}) => {
  // Check if any contact info exists
  const hasContactInfo = email || phone || location || officeHours;
  
  if (!hasContactInfo) {
    return null;
  }

  return (
    <div className="contact-section">
      <h3 className="contact-title">{title}</h3>
      <div className="contact-grid">
        {email && (
          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <div>
              <strong>Email:</strong>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
        )}
        {phone && (
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <strong>Phone:</strong>
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
          </div>
        )}
        {location && (
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <strong>Location:</strong>
              <span>{location}</span>
            </div>
          </div>
        )}
        {officeHours && (
          <div className="contact-item">
            <span className="contact-icon">🕐</span>
            <div>
              <strong>Office Hours:</strong>
              <span>{officeHours}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSection;