// src/pages/ThankYou.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/common/PageLayout';

const ThankYou = () => {
  return (
    <PageLayout>
      <div className="thank-you-page">
        <div className="thank-you-content">
          <div className="thank-you-icon">🙏</div>
          <h1>Thank You!</h1>
          <p>Your submission has been received successfully.</p>
          <p className="thank-you-message">
            We appreciate your interest in supporting the Diocese of Malakal. 
            Our team will review your submission and get back to you soon.
          </p>
          <Link to="/" className="thank-you-btn">
            Return to Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default ThankYou;