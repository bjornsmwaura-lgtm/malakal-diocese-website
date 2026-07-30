import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const RadioDirector = () => {
  return (
    <div className="institution-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/institutions">Institutions</Link> / 
          <span>Radio Director</span>
        </div>

        <SectionTitle 
          title="📻 Radio Director"
          subtitle="Overseeing the diocesan radio station and communications"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Role</h3>
              <p>
                The Radio Director oversees the diocesan radio station, ensuring that it serves 
                as a vehicle for evangelization, education, and communication within the Diocese 
                of Malakal.
              </p>
              <p>
                The office coordinates radio programming, technical operations, and community 
                engagement through the diocesan media platforms.
              </p>
            </div>

            <div className="detail-section">
              <h3>Key Responsibilities</h3>
              <ul>
                <li>Radio Station Management</li>
                <li>Programming and Content Creation</li>
                <li>Technical Operations</li>
                <li>Community Engagement</li>
                <li>Media Training and Support</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Director:</strong> To be assigned</p>
              <p><strong>Phone:</strong> To be assigned</p>
              <p><strong>Email:</strong> To be assigned</p>
            </div>

            <Link to="/institutions" className="back-btn">
              ← Back to Institutions
            </Link>
          </div>

          <div className="detail-right">
            <div className="detail-images">
              <div className="detail-image-wrapper">
                <img 
                  src="/images/institutions/radio-1.jpg" 
                  alt="Radio Director" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/institutions/radio-2.jpg" 
                  alt="Radio Station" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/institutions/radio-3.jpg" 
                  alt="Broadcasting" 
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

export default RadioDirector;