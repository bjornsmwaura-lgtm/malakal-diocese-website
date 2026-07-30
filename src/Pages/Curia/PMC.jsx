// src/pages/curia/PMC.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const PMC = () => {
  return (
    <div className="curia-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/curia">Curia</Link> / 
          <span>PMC</span>
        </div>

        <SectionTitle 
          title="📋 PMC"
          subtitle="Pastoral Ministry Coordination in the Diocese"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About PMC</h3>
              <p>
                The Pastoral Ministry Coordination (PMC) is responsible for coordinating pastoral 
                activities, programs, and initiatives across the Diocese of Malakal. The office 
                supports parishes and pastoral workers in their ministry.
              </p>
              <p>
                PMC works to ensure effective evangelization, catechesis, and pastoral care for 
                the faithful, fostering unity and collaboration in the mission of the Church.
              </p>
            </div>

            <div className="detail-section">
              <h3>Key Responsibilities</h3>
              <ul>
                <li>Pastoral Program Coordination</li>
                <li>Catechetical Support</li>
                <li>Parish Ministry Support</li>
                <li>Evangelization Initiatives</li>
                <li>Pastoral Planning and Evaluation</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Coordinator:</strong> To be assigned</p>
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
                  src="/images/curia/pmc-1.jpg" 
                  alt="PMC" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/pmc-2.jpg" 
                  alt="Pastoral Ministry" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/pmc-3.jpg" 
                  alt="Coordination" 
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

export default PMC;