import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/ui/SectionTitle';

const AllSaintsWaat = () => {
  return (
    <div className="parish-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/deaneries">Deaneries</Link> / 
          <Link to="/deaneries/southern-deanery">Southern Deanery</Link> / 
          <span>All Saints Waat Parish</span>
        </div>

        <SectionTitle 
          title="🕊️ All Saints Waat Parish"
          subtitle="A faith community honoring all the saints in the Waat region"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Parish</h3>
              <p>
                All Saints Waat Parish is a vibrant Catholic faith community located in the Waat area 
                of the Fangak region. The parish is dedicated to honoring all the saints, drawing 
                inspiration from their holy lives and faithful witness to Christ.
              </p>
              <p>
                The parish community is committed to living out the universal call to holiness, 
                following the example of the saints in faith, hope, and love.
              </p>
            </div>

            <div className="detail-section">
              <h3>Parish Details</h3>
              <ul>
                <li><strong>Location:</strong> Waat, Fangak, South Sudan</li>
                <li><strong>Deanery:</strong> Southern Deanery</li>
                <li><strong>Patron Saint:</strong> All Saints</li>
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
                  src="/images/parishes/all-saints-waat-1.jpg" 
                  alt="All Saints Waat Parish" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/all-saints-waat-2.jpg" 
                  alt="Church" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/all-saints-waat-3.jpg" 
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

export default AllSaintsWaat;