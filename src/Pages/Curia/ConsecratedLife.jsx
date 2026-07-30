// src/pages/curia/ConsecratedLife.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const ConsecratedLife = () => {
  return (
    <div className="curia-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/curia">Curia</Link> / 
          <span>Consecrated Life Office</span>
        </div>

        <SectionTitle 
          title="🕊️ Consecrated Life Office"
          subtitle="Supporting religious communities and consecrated persons in the Diocese"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Office</h3>
              <p>
                The Consecrated Life Office serves as the liaison between the Diocese of Malakal 
                and religious communities, consecrated persons, and societies of apostolic life. 
                The office provides support and guidance to those who have dedicated their lives 
                to God through religious vows.
              </p>
              <p>
                The office promotes the vocation to consecrated life and supports the mission of 
                religious communities in the diocese.
              </p>
            </div>

            <div className="detail-section">
              <h3>Key Responsibilities</h3>
              <ul>
                <li>Support for Religious Communities</li>
                <li>Consecrated Life Promotion</li>
                <li>Religious Formation Support</li>
                <li>Liaison with Religious Orders</li>
                <li>Vocational Guidance</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Office Head:</strong> To be assigned</p>
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
                  src="/images/curia/consecrated-1.jpg" 
                  alt="Consecrated Life" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/consecrated-2.jpg" 
                  alt="Religious Communities" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/consecrated-3.jpg" 
                  alt="Religious Vows" 
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

export default ConsecratedLife;