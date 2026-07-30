import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/ui/SectionTitle';

const StJosephsCathedralMalakal = () => {
  return (
    <div className="parish-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/deaneries">Deaneries</Link> / 
          <Link to="/deaneries/central-deanery">Central Deanery</Link> / 
          <span>St. Joseph's Cathedral Malakal</span>
        </div>

        <SectionTitle 
          title="🏛️ St. Joseph's Cathedral Malakal"
          subtitle="The Mother Church of the Diocese of Malakal"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Cathedral</h3>
              <p>
                St. Joseph's Cathedral is the mother church of the Diocese of Malakal, serving as the 
                seat of the Bishop and the spiritual heart of the diocese. The cathedral is a symbol 
                of faith, unity, and resilience for the Catholic community in South Sudan.
              </p>
              <p>
                Named after St. Joseph, the patron saint of the universal Church, the cathedral stands 
                as a beacon of hope and a center for worship, evangelization, and community life.
              </p>
            </div>

            <div className="detail-section">
              <h3>Cathedral Details</h3>
              <ul>
                <li><strong>Location:</strong> Malakal, South Sudan</li>
                <li><strong>Deanery:</strong> Central Deanery</li>
                <li><strong>Patron Saint:</strong> St. Joseph</li>
                <li><strong>Cathedral Rector:</strong> To be assigned</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Mass Times</h3>
              <ul>
                <li><strong>Sunday:</strong> 7:30 AM, 9:30 AM, 11:30 AM</li>
                <li><strong>Weekdays:</strong> 6:30 AM, 12:15 PM, 6:00 PM</li>
                <li><strong>Saturday Vigil:</strong> 5:00 PM</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Cathedral Rector:</strong> To be assigned</p>
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
                  src="/images/parishes/cathedral-1.jpg" 
                  alt="St. Joseph's Cathedral" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/cathedral-2.jpg" 
                  alt="Cathedral Interior" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/cathedral-3.jpg" 
                  alt="Cathedral Community" 
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

export default StJosephsCathedralMalakal;