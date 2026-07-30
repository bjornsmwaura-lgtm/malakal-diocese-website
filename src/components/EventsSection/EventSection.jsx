// src/components/EventsSection/EventSection.jsx
import React from 'react';
import EventCard from './EventCard';

const EventSection = ({ title, icon, status, events, viewMode }) => {
  const sectionColors = {
    current: {
      border: '#FF9800',
      bg: '#FFF8E1',
      label: 'Ongoing'
    },
    upcoming: {
      border: '#4CAF50',
      bg: '#E8F5E9',
      label: 'Upcoming'
    },
    past: {
      border: '#9E9E9E',
      bg: '#F5F5F5',
      label: 'Completed'
    }
  };

  const colors = sectionColors[status];

  return (
    <section className={`event-section ${status}`}>
      <div className="section-header" style={{ borderBottomColor: colors.border }}>
        <div className="section-title-group">
          <span className="section-icon">{icon}</span>
          <h2 className="section-title">{title}</h2>
          <span className="event-count-badge" style={{ backgroundColor: colors.border }}>
            {events.length}
          </span>
        </div>
        <span className="section-status-label" style={{ color: colors.border }}>
          {colors.label}
        </span>
      </div>

      {events.length === 0 ? (
        <div className="empty-state" style={{ borderColor: colors.border }}>
          <p>No {status} events at this time</p>
          <span className="empty-state-icon">🙏</span>
        </div>
      ) : (
        <div className={`events-grid ${viewMode}`}>
          {events.map(event => (
            <EventCard 
              key={event.id} 
              event={event} 
              status={status}
              viewMode={viewMode}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default EventSection;