// src/pages/curia/PastoralDepartment.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const PastoralDepartment = () => {
  return (
    <div className="curia-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/curia">Curia</Link> / 
          <span>Pastoral Department</span>
        </div>

        <SectionTitle 
          title="📖 Pastoral Department"
          subtitle="Coordinating Pastoral Ministry Across the Diocese"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Department</h3>
              <p>
                The Pastoral Department coordinates and supports pastoral ministry across the 
                Diocese of Malakal. The department works with parishes and pastoral workers to 
                ensure effective evangelization and spiritual care for the faithful.
              </p>
              <p>
                The department develops pastoral programs, resources, and initiatives that 
                support the spiritual growth of the community and the spread of the Gospel.
              </p>
            </div>

            <div className="detail-section">
              <h3>Key Responsibilities</h3>
              <ul>
                <li>Parish Pastoral Support</li>
                <li>Evangelization Programs</li>
                <li>Pastoral Resources Development</li>
                <li>Faith Formation</li>
                <li>Pastoral Planning</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Department Head:</strong> To be assigned</p>
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
                  src="/images/curia/pastoral-1.jpg" 
                  alt="Pastoral Ministry" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/pastoral-2.jpg" 
                  alt="Faith Formation" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/pastoral-3.jpg" 
                  alt="Parish Support" 
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

export default PastoralDepartment;