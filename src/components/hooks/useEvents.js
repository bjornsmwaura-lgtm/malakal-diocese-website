// src/components/hooks/useEvents.js
import { useState, useEffect } from 'react';
import { sampleEvents } from '../../data/sampleEvents';

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);
        await new Promise(resolve => setTimeout(resolve, 800));
        setEvents(sampleEvents);
      } catch (err) {
        setError(err.message || 'Failed to load events. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, loading, error };
};

export default useEvents;