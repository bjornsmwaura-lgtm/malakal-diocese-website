import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/ui/SectionTitle';

const AscensionOfTheLordAyod = () => {
  return (
    <div className="parish-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/deaneries">Deaneries</Link> / 
          <Link to="/deaneries/southern-deanery">Southern Deanery</Link> / 
          <span>Ascension of the Lord Ayod Parish</span>
        </div>

        <SectionTitle 
          title="☁️ Ascension of the Lord Ayod Parish"
          subtitle="A parish community celebrating the Ascension of Our Lord"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Parish</h3>
              <p>
                Ascension of the Lord Ayod Parish is a vibrant Catholic faith community located in the 
                Ayod area of the Fangak region. The parish is dedicated to the Ascension of Our Lord 
                Jesus Christ, celebrating His triumph over death and His return to the Father.
              </p>
              <p>
                The parish community is committed to living out the mission of the Church, proclaiming 
                the Good News and building the Kingdom of God in the Ayod region.
              </p>
            </div>

            <div className="detail-section">
              <h3>Parish Details</h3>
              <ul>
                <li><strong>Location:</strong> Ayod, Fangak, South Sudan</li>
                <li><strong>Deanery:</strong> Southern Deanery</li>
                <li><strong>Patron Saint:</strong> The Ascension</li>
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
                  src="/images/parishes/ascension-ayod-1.jpg" 
                  alt="Ascension of the Lord Ayod Parish" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/ascension-ayod-2.jpg" 
                  alt="Church" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/ascension-ayod-3.jpg" 
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

export default AscensionOfTheLordAyod;