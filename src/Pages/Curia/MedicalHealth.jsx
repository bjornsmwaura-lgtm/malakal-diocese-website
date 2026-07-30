// src/pages/curia/MedicalHealth.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const MedicalHealth = () => {
  return (
    <div className="curia-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/curia">Curia</Link> / 
          <span>Medical Health</span>
        </div>

        <SectionTitle 
          title="🏥 Medical Health"
          subtitle="Coordinating healthcare services and medical outreach in the Diocese"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Department</h3>
              <p>
                The Medical Health Department coordinates healthcare services, medical outreach, 
                and health programs in the Diocese of Malakal. The department is committed to 
                promoting health and well-being in the community.
              </p>
              <p>
                The department supports health facilities, provides health education, and responds 
                to medical emergencies in the diocese.
              </p>
            </div>

            <div className="detail-section">
              <h3>Key Responsibilities</h3>
              <ul>
                <li>Healthcare Services Coordination</li>
                <li>Medical Outreach Programs</li>
                <li>Health Education and Promotion</li>
                <li>Health Facility Support</li>
                <li>Emergency Medical Response</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Health Coordinator:</strong> To be assigned</p>
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
                  src="/images/curia/medical-1.jpg" 
                  alt="Medical Health" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/medical-2.jpg" 
                  alt="Healthcare" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/medical-3.jpg" 
                  alt="Medical Outreach" 
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

export default MedicalHealth;