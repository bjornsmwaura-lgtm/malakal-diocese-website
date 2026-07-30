// src/pages/curia/YouthOffice.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const YouthOffice = () => {
  return (
    <div className="curia-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/curia">Curia</Link> / 
          <span>Youth Office</span>
        </div>

        <SectionTitle 
          title="👥 Youth Office"
          subtitle="Coordinating youth ministry and programs in the Diocese"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Office</h3>
              <p>
                The Youth Office coordinates youth ministry, programs, and initiatives in the 
                Diocese of Malakal. The office is dedicated to empowering young people and 
                nurturing their faith, leadership, and service in the Church.
              </p>
              <p>
                The office organizes youth activities, retreats, and formation programs that 
                inspire young people to live out their faith and contribute to the community.
              </p>
            </div>

            <div className="detail-section">
              <h3>Key Responsibilities</h3>
              <ul>
                <li>Youth Ministry Coordination</li>
                <li>Faith Formation for Youth</li>
                <li>Youth Leadership Development</li>
                <li>Youth Retreats and Events</li>
                <li>Vocational Discernment Support</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Youth Coordinator:</strong> To be assigned</p>
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
                  src="/images/curia/youth-1.jpg" 
                  alt="Youth Office" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/youth-2.jpg" 
                  alt="Youth Ministry" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/youth-3.jpg" 
                  alt="Youth Activities" 
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

export default YouthOffice;