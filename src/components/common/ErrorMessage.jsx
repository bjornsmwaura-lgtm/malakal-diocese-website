// src/components/common/ErrorMessage.jsx
import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h3>Unable to Load Events</h3>
      <p>{message}</p>
      <button 
        className="retry-btn"
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorMessage;