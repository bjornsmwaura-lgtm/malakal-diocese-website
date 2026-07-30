// src/components/EventsSection/EventCard.jsx
import React, { useState } from 'react';

const EventCard = ({ event, status, viewMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusColors = {
    upcoming: '#4CAF50',
    current: '#FF9800',
    past: '#9E9E9E'
  };

  const statusLabels = {
    upcoming: '📅 Upcoming',
    current: '🔄 Ongoing',
    past: '✅ Completed'
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Get day of week
  const getDayOfWeek = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { weekday: 'long' });
  };

  const isMultiDay = () => {
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);
    return start.toDateString() !== end.toDateString();
  };

  const getEventDuration = () => {
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 1) return '1 day';
    return `${diffDays} days`;
  };

  return (
    <div 
      className={`event-card ${viewMode} ${isExpanded ? 'expanded' : ''}`}
      style={{ borderLeftColor: statusColors[status] }}
    >
      {event.image && (
        <div className="event-image">
          <img src={event.image} alt={event.title} />
          <span className="event-status-badge" style={{ backgroundColor: statusColors[status] }}>
            {statusLabels[status]}
          </span>
        </div>
      )}

      <div className="event-content">
        <div className="event-header">
          <h3 className="event-title">{event.title}</h3>
          {event.category && (
            <span className="event-category">{event.category}</span>
          )}
        </div>

        <p className="event-description">
          {isExpanded ? event.description : event.description.substring(0, 100) + '...'}
          {event.description.length > 100 && (
            <button 
              className="read-more-btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </p>

        <div className="event-details">
          <div className="detail-item">
            <span className="detail-icon">📅</span>
            <div>
              <div className="detail-label">Start</div>
              <div className="detail-value">
                {getDayOfWeek(event.startDate)}, {formatDate(event.startDate)}
              </div>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-icon">📅</span>
            <div>
              <div className="detail-label">End</div>
              <div className="detail-value">
                {getDayOfWeek(event.endDate)}, {formatDate(event.endDate)}
              </div>
            </div>
          </div>

          {isMultiDay() && (
            <div className="detail-item duration">
              <span className="detail-icon">⏱️</span>
              <div>
                <div className="detail-label">Duration</div>
                <div className="detail-value">{getEventDuration()}</div>
              </div>
            </div>
          )}

          <div className="detail-item">
            <span className="detail-icon">📍</span>
            <div>
              <div className="detail-label">Location</div>
              <div className="detail-value">{event.location}</div>
            </div>
          </div>
        </div>

        {event.registrationLink && (
          <a 
            href={event.registrationLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="register-btn"
          >
            Register Now →
          </a>
        )}

        {event.contact && (
          <div className="event-contact">
            <span className="contact-icon">📞</span>
            <span>Contact: {event.contact}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;