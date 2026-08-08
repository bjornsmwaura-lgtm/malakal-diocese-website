// src/pages/Emergency.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/common/PageLayout';
import PageHeader from '../components/common/PageHeader';
import './Emergency.css';

const Emergency = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Emergency Response"
        subtitle="Urgent Support for Communities in Crisis"
        description="The Diocese of Malakal is responding to urgent humanitarian needs caused by flooding, displacement, and conflict. Your support can make a difference."
        image="/images/curia/emergency/emergency.jpeg"
        badge="Urgent"
      />

      <section className="emergency-content">
        <div className="emergency-grid">
          {/* Left Column - Situation Overview */}
          <div className="emergency-overview">
            <h2>Current Situation</h2>
            <p>
              Communities across the Diocese of Malakal are facing multiple crises:
            </p>
            <ul>
              <li>🌊 <strong>Flooding:</strong> Severe flooding has displaced thousands of families</li>
              <li>🏠 <strong>Displacement:</strong> Many have lost their homes and belongings</li>
              <li>🍽️ <strong>Food Insecurity:</strong> Limited access to food and clean water</li>
              <li>🩺 <strong>Healthcare:</strong> Urgent need for medical assistance</li>
            </ul>
            <p>
              Bishop Stephen Nyodho has appealed for immediate support to help affected families.
            </p>
          </div>

          {/* Right Column - Call to Action */}
          <div className="emergency-cta">
            <h2>How You Can Help</h2>
            <p>
              Your generous donation will provide emergency relief to those in need:
            </p>
            <ul>
              <li>🛏️ Emergency shelter and bedding</li>
              <li>🍞 Food and clean water supplies</li>
              <li>🩺 Medical care and supplies</li>
              <li>👨‍👩‍👧‍👦 Support for displaced families</li>
            </ul>
            
            <div className="emergency-buttons">
              <Link to="/donate" className="emergency-donate-btn">
                ❤️ Donate Now
              </Link>
              <Link to="/get-involved#volunteer" className="emergency-volunteer-btn">
                🤝 Volunteer
              </Link>
            </div>
            
            <p className="emergency-note">
              Every contribution counts. Your donation will reach those who need it most.
            </p>
          </div>
        </div>

        {/* Partner Organizations */}
        <div className="emergency-partners">
          <h3>Our Partners in Emergency Response</h3>
          <div className="partner-logos">
            <span>Caritas Malakal</span>
            <span>South Sudan Red Cross</span>
            <span>UNMISS</span>
            <span>UNICEF</span>
            <span>World Food Programme</span>
            <span>MSF</span>
            <span>Local Churches</span>
          </div>
        </div>

        {/* Prayer Section */}
        <div className="emergency-prayer">
          <h3>🙏 Prayer for Those Affected</h3>
          <p>
            "Lord, we pray for our brothers and sisters affected by these crises. 
            Give them strength, comfort, and hope. Guide our efforts to serve them 
            with love and compassion. Amen."
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Emergency;