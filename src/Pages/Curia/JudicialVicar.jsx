// src/pages/curia/JudicialVicar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const JudicialVicar = () => {
  return (
    <div className="curia-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/curia">Curia</Link> / 
          <span>Judicial Vicar</span>
        </div>

        <SectionTitle 
          title="⚖️ Judicial Vicar"
          subtitle="Upholding Justice and Canon Law in the Diocese"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Judicial Vicar</h3>
              <p>
                The Judicial Vicar serves as the chief judicial officer of the Diocese of Malakal, 
                overseeing the diocesan tribunal and matters of canon law. The office ensures 
                that justice is administered according to the laws and norms of the Catholic Church.
              </p>
              <p>
                The Judicial Vicar handles marriage cases, disciplinary matters, and other 
                canonical issues that arise within the diocese.
              </p>
            </div>

            <div className="detail-section">
              <h3>Key Responsibilities</h3>
              <ul>
                <li>Diocesan Tribunal Oversight</li>
                <li>Canonical Cases and Judgments</li>
                <li>Marriage Annulment Cases</li>
                <li>Disciplinary Proceedings</li>
                <li>Canon Law Advisory</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Judicial Vicar:</strong> To be assigned</p>
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
                  src="/images/curia/judicial-1.jpg" 
                  alt="Judicial Vicar" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/judicial-2.jpg" 
                  alt="Canon Law" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/judicial-3.jpg" 
                  alt="Tribunal" 
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

export default JudicialVicar;