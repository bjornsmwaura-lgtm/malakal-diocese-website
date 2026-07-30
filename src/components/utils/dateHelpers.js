// src/utils/dateHelpers.js
export const formatDate = (dateString, format = 'full') => {
  const date = new Date(dateString);
  const options = {
    'full': { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    },
    'short': {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    'time': {
      hour: '2-digit',
      minute: '2-digit'
    }
  };
  return date.toLocaleDateString('en-US', options[format]);
};

export const getDayOfWeek = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', { weekday: 'long' });
};

export const getEventDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays === 1) return '1 day';
  return `${diffDays} days`;
};

export const isMultiDay = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return start.toDateString() !== end.toDateString();
};

export const isCurrentEvent = (startDate, endDate) => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  return start <= now && end >= now;
};