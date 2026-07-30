// src/pages/deaneries/CentralDeanery/MariakweroMalakal.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/ui/SectionTitle';

const MariakweroMalakal = () => {
  return (
    <div className="parish-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/deaneries">Deaneries</Link> / 
          <Link to="/deaneries/central-deanery">Central Deanery</Link> / 
          <span>Mariakwero Parish Malakal</span>
        </div>

        <SectionTitle 
          title="⛪ Mariakwero Parish Malakal"
          subtitle="A faith community dedicated to Our Lady in the heart of Malakal"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Parish</h3>
              <p>
                Mariakwero Malakal Parish is a vibrant Catholic faith community located in Malakal, 
                dedicated to Our Lady. The parish serves as a spiritual home for the faithful in 
                the Mariakwero area, offering worship, sacramental life, and community support 
                to its members.
              </p>
              <p>
                The parish is committed to living out the Gospel values of love, compassion, and 
                service, following the example of the Blessed Virgin Mary.
              </p>
            </div>

            <div className="detail-section">
              <h3>Parish Details</h3>
              <ul>
                <li><strong>Location:</strong> Mariakwero, Malakal, South Sudan</li>
                <li><strong>Deanery:</strong> Central Deanery</li>
                <li><strong>Patron Saint:</strong> Our Lady</li>
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
                  src="/images/parishes/mariakwero-1.jpg" 
                  alt="Mariakwero Malakal Parish" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/mariakwero-2.jpg" 
                  alt="Church" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/mariakwero-3.jpg" 
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

export default MariakweroMalakal;