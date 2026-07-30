// src/pages/deaneries/CentralDeanery/GuardianAngelLul.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/ui/SectionTitle';

const GuardianAngel = () => {
  return (
    <div className="parish-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/deaneries">Deaneries</Link> / 
          <Link to="/deaneries/central-deanery">Central Deanery</Link> / 
          <span>Guardian Angel Parish</span>
        </div>

        <SectionTitle 
          title="👼 Guardian Angel Parish"
          subtitle="A faith community under the protection of the Guardian Angels"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Parish</h3>
              <p>
                Guardian Angel Lul Parish is a Catholic faith community located in the Lul area of 
                Malakal, under the patronage of the Guardian Angels. The parish is dedicated to 
                living out the Gospel message and providing spiritual guidance to its members.
              </p>
              <p>
                The parish community is built on the belief that every person is accompanied by a 
                Guardian Angel, and it strives to reflect this protective and guiding presence in 
                its pastoral ministry.
              </p>
            </div>

            <div className="detail-section">
              <h3>Parish Details</h3>
              <ul>
                <li><strong>Location:</strong> Lul, Malakal, South Sudan</li>
                <li><strong>Deanery:</strong> Central Deanery</li>
                <li><strong>Patron Saint:</strong> Guardian Angels</li>
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
                  src="/images/parishes/guardian-angel-1.jpg" 
                  alt="Guardian Angel Lul Parish" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/guardian-angel-2.jpg" 
                  alt="Church" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/guardian-angel-3.jpg" 
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

export default GuardianAngel;