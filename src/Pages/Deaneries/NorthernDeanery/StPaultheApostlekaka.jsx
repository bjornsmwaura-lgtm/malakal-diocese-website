import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/ui/SectionTitle';

const StPaultheApostleKaka = () => {
  return (
    <div className="parish-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/deaneries">Deaneries</Link> / 
          <Link to="/deaneries/northern-deanery">Northern Deanery</Link> / 
          <span>St. Paul the Apostle Kaka Parish</span>
        </div>

        <SectionTitle 
          title="✝️ St. Paul the Apostle Kaka Parish"
          subtitle="A community under the patronage of St. Paul the Apostle"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Parish</h3>
              <p>
                St. Paul the Apostle Kaka Parish is a vibrant Catholic faith community located in the 
                Kaka area of the Upper Nile region. The parish is dedicated to St. Paul the Apostle, 
                whose missionary zeal and dedication to the Gospel inspire the parish's commitment 
                to spreading the faith.
              </p>
              <p>
                The parish community is committed to following the example of St. Paul in building 
                communities of faith, hope, and love, and in proclaiming the Gospel to all people.
              </p>
            </div>

            <div className="detail-section">
              <h3>Parish Details</h3>
              <ul>
                <li><strong>Location:</strong> Kaka, Upper Nile, South Sudan</li>
                <li><strong>Deanery:</strong> Northern Deanery</li>
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

            <Link to="/deaneries/northern-deanery" className="back-btn">
              ← Back to Northern Deanery
            </Link>
          </div>

          <div className="detail-right">
            <div className="detail-images">
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/st-paul-kaka-1.jpg" 
                  alt="St. Paul the Apostle Kaka Parish" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/st-paul-kaka-2.jpg" 
                  alt="Church" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/st-paul-kaka-3.jpg" 
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

export default StPaultheApostleKaka;