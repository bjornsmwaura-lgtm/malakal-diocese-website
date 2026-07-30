// src/pages/deaneries/CentralDeanery/StStephenKodok.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/ui/SectionTitle';

const StStephenKodok = () => {
  return (
    <div className="parish-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/deaneries">Deaneries</Link> / 
          <Link to="/deaneries/central-deanery">Central Deanery</Link> / 
          <span>St. Stephen Kodok Parish</span>
        </div>

        <SectionTitle 
          title="✝️ St. Stephen Kodok Parish"
          subtitle="A faith community under the patronage of St. Stephen, the first martyr"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Parish</h3>
              <p>
                St. Stephen Kodok Parish is a vibrant Catholic faith community located in the Kodok 
                area of Malakal, dedicated to St. Stephen, the first martyr of the Christian Church. 
                The parish draws inspiration from St. Stephen's unwavering faith and courage in 
                witnessing to Christ.
              </p>
              <p>
                The parish community is committed to living out the Gospel message and bearing witness 
                to the faith through acts of love, service, and evangelization.
              </p>
            </div>

            <div className="detail-section">
              <h3>Parish Details</h3>
              <ul>
                <li><strong>Location:</strong> Kodok, Malakal, South Sudan</li>
                <li><strong>Deanery:</strong> Central Deanery</li>
                <li><strong>Patron Saint:</strong> St. Stephen</li>
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
                  src="/images/parishes/st-stephen-1.jpg" 
                  alt="St. Stephen Kodok Parish" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/st-stephen-2.jpg" 
                  alt="Church" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/st-stephen-3.jpg" 
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

export default StStephenKodok;