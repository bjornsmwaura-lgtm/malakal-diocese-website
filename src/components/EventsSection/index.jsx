// src/components/EventsSection/index.jsx
import React, { useState } from 'react';
import useEvents from '../hooks/useEvents';
import EventsHeader from './EventsHeader';
import EventsFilter from './EventsFilter';
import EventSection from './EventSection';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import './EventsSection.css';

const EventsSection = () => {
  const { events, loading, error } = useEvents();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const now = new Date();

  const getFilteredEvents = () => {
    if (!events || events.length === 0) {
      return { upcoming: [], current: [], past: [] };
    }

    const filtered = events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || event.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });

    const upcoming = filtered.filter(event => new Date(event.startDate) > now);
    const current = filtered.filter(event => {
      const start = new Date(event.startDate);
      const end = new Date(event.endDate);
      return start <= now && end >= now;
    });
    const past = filtered.filter(event => new Date(event.endDate) < now);

    const sortEvents = (arr) => [...arr].sort((a, b) => 
      new Date(a.startDate) - new Date(b.startDate)
    );

    return {
      upcoming: sortEvents(upcoming),
      current: sortEvents(current),
      past: sortEvents(past)
    };
  };

  const { upcoming, current, past } = getFilteredEvents();
  const categories = events ? ['All', ...new Set(events.map(e => e.category))] : ['All'];

  if (loading) return <LoadingSpinner message="Loading Diocese events..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="diocese-events-container">
      <EventsHeader 
        dioceseName="Catholic Diocese of Malakal"
        eventCount={events?.length || 0}
      />
      
      <EventsFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        categories={categories}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <div className="events-content">
        <EventSection 
          title="Current & Ongoing Events"
          icon="🔄"
          status="current"
          events={current}
          viewMode={viewMode}
        />

        <EventSection 
          title="Upcoming Events"
          icon="🔜"
          status="upcoming"
          events={upcoming}
          viewMode={viewMode}
        />

        <EventSection 
          title="Past Events"
          icon="📜"
          status="past"
          events={past}
          viewMode={viewMode}
        />

        {events && events.length === 0 && (
          <div className="no-events-message">
            <p>No events found. Please check back later for updates from the Diocese.</p>
          </div>
        )}
      </div>

      <footer className="diocese-footer">
        <p>© 2026 Catholic Diocese of Malakal, South Sudan</p>
        <p className="footer-note">May God bless our diocese and its people</p>
      </footer>
    </div>
  );
};

export default EventsSection;