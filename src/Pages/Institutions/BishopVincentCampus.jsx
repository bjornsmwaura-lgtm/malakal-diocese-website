// src/pages/institutions/BishopVincentCampus.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const BishopVincentCampus = () => {
  return (
    <div className="institution-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/institutions">Institutions</Link> / 
          <span>Bishop Vincent Campus</span>
        </div>

        <SectionTitle 
          title="🏫 Bishop Vincent Campus"
          subtitle="A center for education and formation in the Diocese of Malakal"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About Bishop Vincent Campus</h3>
              <p>
                Bishop Vincent Campus is a center for education and formation in the Diocese of Malakal. 
                The campus provides quality education and training opportunities for the faithful, 
                fostering academic excellence and spiritual growth.
              </p>
              <p>
                The campus serves as a hub for learning, offering programs that equip students 
                with knowledge, skills, and values for service to the Church and community.
              </p>
            </div>

            <div className="detail-section">
              <h3>Programs Offered</h3>
              <ul>
                <li>Religious Education and Formation</li>
                <li>Pastoral Leadership Training</li>
                <li>Academic Programs</li>
                <li>Vocational Training</li>
                <li>Spiritual Formation</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Director:</strong> To be assigned</p>
              <p><strong>Phone:</strong> To be assigned</p>
              <p><strong>Email:</strong> To be assigned</p>
              <p><strong>Location:</strong> Malakal, South Sudan</p>
            </div>

            <Link to="/institutions" className="back-btn">
              ← Back to Institutions
            </Link>
          </div>

          <div className="detail-right">
            <div className="detail-images">
              <div className="detail-image-wrapper">
                <img 
                  src="/images/institutions/bishop-vincent-1.jpg" 
                  alt="Bishop Vincent Campus" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/institutions/bishop-vincent-2.jpg" 
                  alt="Campus" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/institutions/bishop-vincent-3.jpg" 
                  alt="Students" 
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

export default BishopVincentCampus;