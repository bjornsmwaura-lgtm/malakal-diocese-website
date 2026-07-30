// src/pages/deaneries/CentralDeanery/StsAmbroseCharlesBorromeo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/ui/SectionTitle';

const StsAmbroseCharlesBorromeo = () => {
  return (
    <div className="parish-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/deaneries">Deaneries</Link> / 
          <Link to="/deaneries/central-deanery">Central Deanery</Link> / 
          <span>Sts. Ambrose and Charles Borromeo Dethwork</span>
        </div>

        <SectionTitle 
          title="📖 Sts. Ambrose and Charles Borromeo Dethwork Parish"
          subtitle="A community dedicated to Sts. Ambrose and Charles Borromeo"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Parish</h3>
              <p>
                Sts. Ambrose and Charles Borromeo Dethwork Parish is a Catholic faith community 
                located in the Dethwork area of Malakal, dedicated to two great Doctors of the Church 
                and reformers: St. Ambrose and St. Charles Borromeo.
              </p>
              <p>
                The parish is committed to the renewal of the Church through authentic faith, 
                education, and pastoral ministry, following the example of its patron saints.
              </p>
            </div>

            <div className="detail-section">
              <h3>Parish Details</h3>
              <ul>
                <li><strong>Location:</strong> Dethwork, Malakal, South Sudan</li>
                <li><strong>Deanery:</strong> Central Deanery</li>
                <li><strong>Patron Saints:</strong> St. Ambrose, St. Charles Borromeo</li>
                <li><strong>Parish Priest:</strong> To be assigned</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Mass Times</h3>
              <ul>
                <li><strong>Sunday:</strong> 8:00 AM, 10:30 AM</li>
                <li><strong>Weekdays:</strong> 6:30 AM, 6:00 PM</li>
                <li><strong>Saturday Vigil:</strong> 5:00 PM</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Parish Priest:</strong> To be assigned</p>
              <p><strong>Phone:</strong> To be assigned</p>
              <p><strong>Email:</strong> To be assigned</p>
            </div>

            <Link to="/deaneries/central-deanery" className="back-btn">
              ← Back to Central Deanery
            </Link>
          </div>

          <div className="detail-right">
            <div className="detail-images">
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/ambrose-1.jpg" 
                  alt="Sts. Ambrose and Charles Borromeo Parish" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/ambrose-2.jpg" 
                  alt="Church" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/ambrose-3.jpg" 
                  alt="Community" 
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

export default StsAmbroseCharlesBorromeo;