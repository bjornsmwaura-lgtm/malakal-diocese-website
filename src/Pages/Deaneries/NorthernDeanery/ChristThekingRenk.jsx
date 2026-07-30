import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/ui/SectionTitle';

const ChristTheKingRenk = () => {
  return (
    <div className="parish-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/deaneries">Deaneries</Link> / 
          <Link to="/deaneries/northern-deanery">Northern Deanery</Link> / 
          <span>Christ the King Renk Parish</span>
        </div>

        <SectionTitle 
          title="👑 Christ The King Renk Parish"
          subtitle="A faith community dedicated to Christ the King in the Renk region"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Parish</h3>
              <p>
                Christ the King Renk Parish is a vibrant Catholic faith community located in the Renk 
                area of the Upper Nile region. The parish is dedicated to Christ the King, proclaiming 
                His Lordship over all creation and His reign of justice, peace, and love.
              </p>
              <p>
                The parish community is committed to building the Kingdom of God through worship, 
                evangelization, and service to the community, following the example of Christ the King.
              </p>
            </div>

            <div className="detail-section">
              <h3>Parish Details</h3>
              <ul>
                <li><strong>Location:</strong> Renk, Upper Nile, South Sudan</li>
                <li><strong>Deanery:</strong> Northern Deanery</li>
                <li><strong>Patron Saint:</strong> Christ the King</li>
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

            <Link to="/deaneries/northern-deanery" className="back-btn">
              ← Back to Northern Deanery
            </Link>
          </div>

          <div className="detail-right">
            <div className="detail-images">
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/christ-king-renk-1.jpg" 
                  alt="Christ the King Renk Parish" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/christ-king-renk-2.jpg" 
                  alt="Church" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/christ-king-renk-3.jpg" 
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

export default ChristTheKingRenk;