// src/pages/curia/VicarGeneral.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const VicarGeneral = () => {
  return (
    <div className="curia-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/curia">Curia</Link> / 
          <span>Vicar General</span>
        </div>

        <SectionTitle 
          title="⛪ Vicar General"
          subtitle="Assisting the Bishop in diocesan administration and pastoral ministry"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Office</h3>
              <p>
                The Vicar General assists the Bishop in the administration and pastoral ministry 
                of the Diocese of Malakal. The Vicar General serves as the Bishop's principal 
                collaborator in overseeing the life and mission of the diocese.
              </p>
              <p>
                The Vicar General coordinates diocesan activities, supports parishes, and ensures 
                the implementation of pastoral policies and programs.
              </p>
            </div>

            <div className="detail-section">
              <h3>Key Responsibilities</h3>
              <ul>
                <li>Diocesan Administration Support</li>
                <li>Pastoral Ministry Coordination</li>
                <li>Parish Support and Oversight</li>
                <li>Diocesan Policies and Programs</li>
                <li>Bishop's Representation</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Vicar General:</strong> To be assigned</p>
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
                  src="/images/curia/vicar-general-1.jpg" 
                  alt="Vicar General" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/vicar-general-2.jpg" 
                  alt="Diocesan Administration" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/vicar-general-3.jpg" 
                  alt="Pastoral Ministry" 
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

export default VicarGeneral;