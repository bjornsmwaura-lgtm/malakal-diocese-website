import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Diocesan Youth Conference",
      description: "Annual gathering of youth from all parishes in the diocese.",
      date: "August 15-17, 2026",
      location: "St. Joseph's Cathedral, Malakal"
    },
    {
      id: 2,
      title: "Bishop's Pastoral Visit",
      description: "Pastoral visit to parishes in the Upper Nile region.",
      date: "July 20-24, 2026",
      location: "Various Parishes"
    },
    {
      id: 3,
      title: "Peace and Reconciliation Workshop",
      description: "Workshop focused on peacebuilding and reconciliation in South Sudan.",
      date: "August 1-3, 2026",
      location: "Diocesan Pastoral Center, Malakal"
    },
 ];

  return (
    <div className="events-page">
      <div className="container">
        <SectionTitle 
          title="📅 Events Calendar"
          subtitle="Stay updated with all activities in the Diocese of Malakal"
        />

        <div className="events-list">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-date">
                <span className="event-day">{event.date}</span>
              </div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <span className="event-location">📍 {event.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;