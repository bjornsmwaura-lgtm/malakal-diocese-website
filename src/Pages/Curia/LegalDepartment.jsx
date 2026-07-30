// src/pages/curia/LegalDepartment.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const LegalDepartment = () => {
  return (
    <div className="curia-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/curia">Curia</Link> / 
          <span>Legal Department</span>
        </div>

        <SectionTitle 
          title="⚖️ Legal Department"
          subtitle="Providing legal counsel and support to the Diocese"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Department</h3>
              <p>
                The Legal Department provides legal counsel, support, and representation to the 
                Diocese of Malakal and its institutions. The department ensures that the diocese 
                operates within the legal framework of South Sudan and upholds the principles of 
                justice and fairness.
              </p>
              <p>
                The department handles legal matters, contracts, and canonical issues that arise 
                within the diocese.
              </p>
            </div>

            <div className="detail-section">
              <h3>Key Responsibilities</h3>
              <ul>
                <li>Legal Counsel and Advisory</li>
                <li>Contract Review and Management</li>
                <li>Canonical Matters</li>
                <li>Property and Land Issues</li>
                <li>Legal Representation</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Legal Officer:</strong> To be assigned</p>
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
                  src="/images/curia/legal-1.jpg" 
                  alt="Legal Department" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/legal-2.jpg" 
                  alt="Justice" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/legal-3.jpg" 
                  alt="Legal Counsel" 
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

export default LegalDepartment;