import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/ui/SectionTitle';

const StPaulBor = () => {
  return (
    <div className="parish-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/deaneries">Deaneries</Link> / 
          <Link to="/deaneries/southern-deanery">Southern Deanery</Link> / 
          <span>St. Paul Bor Parish</span>
        </div>

        <SectionTitle 
          title="✝️ St. Paul Bor Parish"
          subtitle="A parish community under the patronage of St. Paul the Apostle"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Parish</h3>
              <p>
                St. Paul Bor Parish is a vibrant Catholic faith community located in the Bor area 
                of the region. The parish is dedicated to St. Paul the Apostle, drawing inspiration 
                from his missionary zeal, unwavering faith, and dedication to spreading the Gospel.
              </p>
              <p>
                The parish community is committed to following the example of St. Paul in building 
                communities of faith, hope, and love, and in proclaiming the Gospel to all people.
              </p>
            </div>

            <div className="detail-section">
              <h3>Parish Details</h3>
              <ul>
                <li><strong>Location:</strong> Bor, South Sudan</li>
                <li><strong>Deanery:</strong> Southern Deanery</li>
                <li><strong>Patron Saint:</strong> St. Paul the Apostle</li>
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

            <Link to="/deaneries/southern-deanery" className="back-btn">
              ← Back to Southern Deanery
            </Link>
          </div>

          <div className="detail-right">
            <div className="detail-images">
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/st-paul-bor-1.jpg" 
                  alt="St. Paul Bor Parish" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/st-paul-bor-2.jpg" 
                  alt="Church" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/st-paul-bor-3.jpg" 
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

export default StPaulBor;