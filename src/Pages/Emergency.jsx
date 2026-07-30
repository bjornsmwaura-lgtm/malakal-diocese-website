import React from 'react';
import { Link } from 'react-router-dom';

const Emergency = () => {
  return (
    <div className="emergency-page">
      <div className="container">
        <div className="emergency-header">
          <div className="emergency-badge">🚨 URGENT</div>
          <h1>Emergency Response</h1>
          <p>We are responding to critical humanitarian needs in the Diocese of Malakal. Your help is urgently needed.</p>
        </div>

        <div className="emergency-stats">
          <div className="stat-card">
            <span className="stat-number">50,000+</span>
            <span className="stat-label">People Affected</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">25+</span>
            <span className="stat-label">Communities Reached</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">100+</span>
            <span className="stat-label">Staff & Volunteers</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">$500K+</span>
            <span className="stat-label">Funds Needed</span>
          </div>
        </div>

        <div className="emergency-areas">
          <div className="emergency-area">
            <div className="emergency-status critical">Critical</div>
            <h3>Flood Response - Fangak</h3>
            <p>Thousands of families have been displaced by severe flooding. We are providing emergency food, shelter, and medical assistance.</p>
            <div className="emergency-needs">
              <span>Food</span>
              <span>Shelter</span>
              <span>Clean Water</span>
              <span>Medical Supplies</span>
            </div>
          </div>

          <div className="emergency-area">
            <div className="emergency-status urgent">Urgent</div>
            <h3>Refugee Crisis - Border Areas</h3>
            <p>Refugees fleeing conflict in Sudan need immediate humanitarian assistance.</p>
            <div className="emergency-needs">
              <span>Emergency Shelter</span>
              <span>Food</span>
              <span>Healthcare</span>
              <span>Protection</span>
            </div>
          </div>

          <div className="emergency-area">
            <div className="emergency-status urgent">Urgent</div>
            <h3>Food Insecurity - Rural Communities</h3>
            <p>Communities facing severe food shortages due to drought and displacement.</p>
            <div className="emergency-needs">
              <span>Food Distribution</span>
              <span>Nutrition Support</span>
              <span>Agriculture Support</span>
            </div>
          </div>
        </div>

        <div className="emergency-cta">
          <h2>Your Support Can Save Lives</h2>
          <p>Every donation helps us reach more people in need.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Donate Now</Link>
            <Link to="/get-involved" className="btn btn-outline">Volunteer</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;