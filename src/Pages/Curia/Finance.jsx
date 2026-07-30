// src/pages/curia/Finance.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const Finance = () => {
  return (
    <div className="curia-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/curia">Curia</Link> / 
          <span>Finance Department</span>
        </div>

        <SectionTitle 
          title="💰 Finance Department"
          subtitle="Managing diocesan financial resources and assets"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Department</h3>
              <p>
                The Finance Department manages the financial resources and assets of the Diocese 
                of Malakal. The department ensures responsible stewardship, transparency, and 
                accountability in the management of diocesan finances.
              </p>
              <p>
                The department supports parishes and institutions in sound financial management 
                and planning, ensuring that resources are used effectively for the mission of the Church.
              </p>
            </div>

            <div className="detail-section">
              <h3>Key Responsibilities</h3>
              <ul>
                <li>Financial Management and Oversight</li>
                <li>Budget Planning and Monitoring</li>
                <li>Financial Reporting and Auditing</li>
                <li>Resource Mobilization</li>
                <li>Property and Asset Management</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Finance Officer:</strong> To be assigned</p>
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
                  src="/images/curia/finance-1.jpg" 
                  alt="Finance Department" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/finance-2.jpg" 
                  alt="Financial Management" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/finance-3.jpg" 
                  alt="Accounting" 
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

export default Finance;