// src/pages/curia/LiturgyDepartment.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const LiturgyDepartment = () => {
  return (
    <div className="curia-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/curia">Curia</Link> / 
          <span>Liturgy Department</span>
        </div>

        <SectionTitle 
          title="🕊️ Liturgy Department"
          subtitle="Guiding Worship and Sacramental Celebrations"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Department</h3>
              <p>
                The Liturgy Department oversees the celebration of the Eucharist, the sacraments, 
                and the liturgical life of the Diocese of Malakal. The department ensures that 
                worship is conducted with reverence, beauty, and faithfulness to the Church's 
                liturgical norms.
              </p>
              <p>
                The department provides resources, training, and support for parishes in the 
                celebration of the liturgy and the formation of liturgical ministers.
              </p>
            </div>

            <div className="detail-section">
              <h3>Key Responsibilities</h3>
              <ul>
                <li>Liturgical Celebrations</li>
                <li>Sacramental Preparation</li>
                <li>Liturgical Minister Training</li>
                <li>Liturgical Resources</li>
                <li>Music and Choir Coordination</li>
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
                  src="/images/curia/liturgy-1.jpg" 
                  alt="Liturgy" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/liturgy-2.jpg" 
                  alt="Eucharist" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/curia/liturgy-3.jpg" 
                  alt="Sacraments" 
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

export default LiturgyDepartment;