import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/ui/SectionTitle';

const StMarkMaban = () => {
  return (
    <div className="parish-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/deaneries">Deaneries</Link> / 
          <Link to="/deaneries/northern-deanery">Northern Deanery</Link> / 
          <span>St. Mark Maban Parish</span>
        </div>

        <SectionTitle 
          title="📖 St. Mark Maban Parish"
          subtitle="A faith community dedicated to St. Mark the Evangelist"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Parish</h3>
              <p>
                St. Mark Maban Parish is a vibrant Catholic faith community located in the Maban area 
                of the Upper Nile region. The parish is dedicated to St. Mark the Evangelist, whose 
                Gospel proclamation inspires the parish's mission of evangelization and spreading 
                the Good News.
              </p>
              <p>
                The parish is committed to following the example of St. Mark in proclaiming the Gospel 
                through word and action, serving the community with love and dedication.
              </p>
            </div>

            <div className="detail-section">
              <h3>Parish Details</h3>
              <ul>
                <li><strong>Location:</strong> Maban, Upper Nile, South Sudan</li>
                <li><strong>Deanery:</strong> Northern Deanery</li>
                <li><strong>Patron Saint:</strong> St. Mark the Evangelist</li>
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
                  src="/images/parishes/st-mark-1.jpg" 
                  alt="St. Mark Maban Parish" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/st-mark-2.jpg" 
                  alt="Church" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/st-mark-3.jpg" 
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

export default StMarkMaban;