import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Decorative ribbon edge at top */}
      <div className="footer-ribbon-top"></div>

      <div className="container">
        <div className="footer-content">
          {/* Column 1: Diocese Info */}
          <div className="footer-column">
            <div className="footer-brand">
              <img
                src="/images/logo1.jpeg"
                alt="Diocese of Malakal Coat of Arms"
                className="footer-logo"
              />
            </div>
            <h3>Catholic Diocese of Malakal</h3>
            <p>
              Serving Christ, healing communities, and building hope in the
              Diocese.
            </p>
            <p className="footer-motto">
              <em>"Ut Diligatis Invicem"</em>
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/curia">Curia</Link></li>
              <li><Link to="/deaneries">Deaneries</Link></li>
              <li><Link to="/institutions">Institutions</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Social Media */}
          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="contact-info">
              <li>📍 Malakal, South Sudan</li>
              <li>📞 +211 912 345 678</li>
              <li>📧 info@dioceseofmalakal.org</li>
            </ul>

            {/* Social Media Icons */}
            <div className="social-media">
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} Catholic Diocese of Malakal · All Rights Reserved</p>
          <p className="footer-verse">
            "Love one another as I have loved you." — John 15:12
          </p>
        </div>
      </div>

      {/* Decorative ribbon edge at bottom (outside container) */}
      <div className="footer-ribbon-bottom"></div>
    </footer>
  );
};

export default Footer;