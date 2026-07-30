// src/components/EventsSection/EventsHeader.jsx
import React from 'react';

const EventsHeader = ({ dioceseName = "Catholic Diocese of Malakal", eventCount = 0 }) => {

    return (
    <header className="diocese-header">
      <div className="header-content">
        <div className="diocese-badge">
          <span className="cross-icon">✝</span>
          <div>
            <h1 className="diocese-title">{dioceseName}</h1>
            <p className="diocese-subtitle">Events & Activities Calendar</p>
          </div>
        </div>
        
        <div className="header-stats">
          <div className="stat-item">
            <span className="stat-number">{eventCount}</span>
            <span className="stat-label">Total Events</span>
          </div>
          <div className="stat-divider">|</div>
          <div className="stat-item">
            <span className="stat-date">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="stat-label">Today</span>
          </div>
        </div>
      </div>
      
      <div className="header-quote">
        <p>"Love one another as I have loved you" - John 12:15</p>
      </div>
    </header>
  );
};

export default EventsHeader;