import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/ui/SectionTitle';

const HolyTrinityFangak = () => {
  return (
    <div className="parish-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/deaneries">Deaneries</Link> / 
          <Link to="/deaneries/southern-deanery">Southern Deanery</Link> / 
          <span>Holy Trinity Fangak Parish</span>
        </div>

        <SectionTitle 
          title="🔱 Holy Trinity Parish Fangak"
          subtitle="A community dedicated to the Holy Trinity in the Fangak region"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Parish</h3>
              <p>
                Holy Trinity Fangak Parish is a vibrant Catholic faith community located in the Fangak 
                area of the region. The parish is dedicated to the Holy Trinity, celebrating the mystery 
                of the Father, Son, and Holy Spirit in the life of the Church and the community.
              </p>
              <p>
                The parish community is committed to living out the Trinitarian mystery through worship, 
                fellowship, and service to the community.
              </p>
            </div>

            <div className="detail-section">
              <h3>Parish Details</h3>
              <ul>
                <li><strong>Location:</strong> Fangak, South Sudan</li>
                <li><strong>Deanery:</strong> Southern Deanery</li>
                <li><strong>Patron Saint:</strong> The Holy Trinity</li>
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
                  src="/images/parishes/holy-trinity-fangak-1.jpg" 
                  alt="Holy Trinity Fangak Parish" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/holy-trinity-fangak-2.jpg" 
                  alt="Church" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/holy-trinity-fangak-3.jpg" 
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

export default HolyTrinityFangak;