import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/ui/SectionTitle';

const OurLadyofHopeWadakona = () => {
  return (
    <div className="parish-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/deaneries">Deaneries</Link> / 
          <Link to="/deaneries/northern-deanery">Northern Deanery</Link> / 
          <span>Our Lady of Hope Wadakona Parish</span>
        </div>

        <SectionTitle 
          title="🌸 Our Lady of Hope Wadakona Parish"
          subtitle="A community of faith and hope in the Wadakona region"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About the Parish</h3>
              <p>
                Our Lady of Hope Wadakona Parish is a vibrant Catholic faith community located in the 
                Wadakona region of the Upper Nile area. The parish is dedicated to Our Lady of Hope, 
                invoking her intercession for peace, healing, and renewal in the community.
              </p>
              <p>
                The parish serves as a beacon of hope for the faithful in the region, providing spiritual 
                nourishment, pastoral care, and community support to its members.
              </p>
            </div>

            <div className="detail-section">
              <h3>Parish Details</h3>
              <ul>
                <li><strong>Location:</strong> Wadakona, Upper Nile, South Sudan</li>
                <li><strong>Deanery:</strong> Northern Deanery</li>
                <li><strong>Patron Saint:</strong> Our Lady of Hope</li>
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
                  src="/images/parishes/our-lady-hope-1.jpg" 
                  alt="Our Lady of Hope Wadakona Parish" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/our-lady-hope-2.jpg" 
                  alt="Church" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/parishes/our-lady-hope-3.jpg" 
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

export default OurLadyofHopeWadakona;