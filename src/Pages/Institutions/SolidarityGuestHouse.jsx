import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/ui/SectionTitle';

const SolidarityGuestHouse = () => {
  return (
    <div className="institution-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <Link to="/institutions">Institutions</Link> / 
          <span>Solidarity Guest House</span>
        </div>

        <SectionTitle 
          title="🏨 Solidarity Guest House"
          subtitle="A place of hospitality and rest for visitors to the diocese"
        />

        <div className="detail-two-column">
          <div className="detail-left">
            <div className="detail-section">
              <h3>About Solidarity Guest House</h3>
              <p>
                Solidarity Guest House is a warm and welcoming hospitality facility operated under the 
                Catholic Diocese of Malakal. Located in the heart of Malakal Town, the guest house 
                provides comfortable accommodation and a peaceful environment for visitors, missionaries, 
                pastoral agents, and pilgrims coming to the diocese.
              </p>
              <p>
                The guest house is named "Solidarity" to reflect the spirit of unity, fellowship, and 
                communal support that characterizes the Catholic faith. It serves as a home away from 
                home for those traveling to Malakal for spiritual retreats, workshops, conferences, 
                or pastoral assignments.
              </p>
            </div>

            <div className="detail-section">
              <h3>Facilities and Services</h3>
              <ul>
                <li><strong>Comfortable Guest Rooms</strong> – Clean, well-maintained rooms with essential amenities</li>
                <li><strong>Meeting and Conference Spaces</strong> – Ideal for workshops, seminars, and group gatherings</li>
                <li><strong>Chapel and Prayer Space</strong> – A quiet area for personal prayer and reflection</li>
                <li><strong>Dining Facilities</strong> – Nutritious meals served in a communal setting</li>
                <li><strong>Peaceful Gardens</strong> – Serene outdoor spaces for relaxation and meditation</li>
                <li><strong>24/7 Security</strong> – Ensuring the safety and peace of mind of all guests</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Mission and Values</h3>
              <ul>
                <li><strong>Warm Hospitality</strong> – Every guest is welcomed with kindness and respect</li>
                <li><strong>Safe and Peaceful Environment</strong> – A secure space for rest and rejuvenation</li>
                <li><strong>Affordable Accommodation</strong> – Reasonable rates to serve all visitors</li>
                <li><strong>Community and Fellowship</strong> – Opportunities for guests to connect and share experiences</li>
              </ul>
            </div>

            <div className="detail-section">
              <h3>Contact Information</h3>
              <p><strong>Location:</strong> Malakal, South Sudan</p>
              <p><strong>Manager:</strong> To be assigned</p>
              <p><strong>Phone:</strong> To be assigned</p>
              <p><strong>Email:</strong> To be assigned</p>
            </div>

            <Link to="/institutions" className="back-btn">
              ← Back to Institutions
            </Link>
          </div>

          <div className="detail-right">
            <div className="detail-images">
              <div className="detail-image-wrapper">
                <img 
                  src="/images/institutions/solidarity-1.jpg" 
                  alt="Solidarity Guest House" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/institutions/solidarity-2.jpg" 
                  alt="Guest House" 
                  className="detail-image"
                />
              </div>
              <div className="detail-image-wrapper">
                <img 
                  src="/images/institutions/solidarity-3.jpg" 
                  alt="Facilities" 
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

export default SolidarityGuestHouse;