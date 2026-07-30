import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSpinner, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { subscribeNewsletter } from '../services/api';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      await subscribeNewsletter(email);
      setStatus('success');
      setMessage('Thank you for subscribing to our newsletter! 🙏');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Subscription failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h3>
          <FontAwesomeIcon icon={faEnvelope} /> Subscribe to Our Newsletter
        </h3>
        <p>Stay updated with news, events, and prayer requests from the Diocese.</p>
        
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="newsletter-input-group">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={status === 'error' ? 'error' : ''}
            />
            <button type="submit" disabled={loading}>
              {loading ? (
                <><FontAwesomeIcon icon={faSpinner} spin /> Subscribing...</>
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
          
          {status && (
            <div className={`newsletter-status ${status}`}>
              <FontAwesomeIcon icon={status === 'success' ? faCheckCircle : faTimesCircle} />
              <span>{message}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;