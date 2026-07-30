import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const CaritasInstitution = () => {
  return (
    <div className="institution-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/institutions">Institutions</Link> / 
          <span>Caritas</span>
        </div>

        <SectionTitle 
          title="❤️ Caritas"
          subtitle="The humanitarian and development arm of the Diocese of Malakal"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About Caritas</h3>
              <p>
                Caritas is the humanitarian and development arm of the Diocese of Malakal, 
                committed to serving the most vulnerable communities in South Sudan. 
                Guided by the principles of Catholic social teaching, Caritas works 
                tirelessly to promote human dignity, justice, and peace.
              </p>
              <p>
                Caritas provides emergency relief, supports community development, and 
                fosters peacebuilding initiatives in some of the most challenging 
                environments in South Sudan.
              </p>
            </div>

            <div className="detail-section">
              <h3>Key Programs</h3>
              <ul>
                <li>Emergency Relief and Humanitarian Aid</li>
                <li>Food Security and Livelihoods</li>
                <li>Water, Sanitation, and Hygiene (WASH)</li>
                <li>Peacebuilding and Reconciliation</li>
                <li>Women's Empowerment and Gender Equality</li>
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
                  src="/images/institutions/caritas-1.jpg" 
                  alt="Caritas" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/institutions/caritas-2.jpg" 
                  alt="Humanitarian Work" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/institutions/caritas-3.jpg" 
                  alt="Community Development" 
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

export default CaritasInstitution;