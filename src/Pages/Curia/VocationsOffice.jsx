// src/pages/curia/VocationOffice.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const VocationsOffice = () => {
  return (
    <div className="curia-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/curia">Curia</Link> / 
          <span>Vocations Director</span>
        </div>

        <SectionTitle 
          title="🙏 Vocations Office"
          subtitle="Fostering and Nurturing Religious Vocations"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Vocations Office</h3>
              <p>
                The Vocations Office identifies, fosters, and nurtures vocations to the priesthood, 
                religious life, and consecrated life within the Diocese of Malakal. The office 
                helps individuals discern their calling and provides guidance throughout the 
                discernment process.
              </p>
              <p>
                The office works with parishes, schools, and families to promote the culture of 
                vocations and support those who are considering a religious calling.
              </p>
            </div>

            <div className="detail-section">
              <h3>Key Responsibilities</h3>
              <ul>
                <li>Vocations Promotion and Awareness</li>
                <li>Discernment Guidance and Support</li>
                <li>Seminarian Formation Support</li>
                <li>Parish Vocation Programs</li>
                <li>Religious Life Promotion</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Vocations Director:</strong> To be assigned</p>
              <p><strong>Phone:</strong> To be assigned</p>
              <p><strong>Email:</strong> To be assigned</p>
            </div>

            <Link to="/curia" className="back-btn">
              ← Back to Curia
            </Link>
          </div>

          <div className="detail-right">
            <div className="detail-images">
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/vocations-1.jpg" 
                  alt="Vocations" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/vocations-2.jpg" 
                  alt="Discernment" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/vocations-3.jpg" 
                  alt="Seminarians" 
                  className="detail-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocationsOffice;