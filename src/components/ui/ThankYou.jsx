import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPray, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { message, type = 'contact' } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getContent = () => {
    if (type === 'donation') {
      return {
        title: 'Thank You for Your Generous Donation! 🙏',
        icon: faPray,
        message: message || 'Your generosity will make a difference in our community. May God bless you abundantly.',
        action: 'Return to Home',
        actionLink: '/'
      };
    } else if (type === 'newsletter') {
      return {
        title: 'Welcome to Our Newsletter! 📧',
        icon: faEnvelope,
        message: message || 'You have successfully subscribed. Stay tuned for updates, prayer requests, and community news.',
        action: 'Continue Browsing',
        actionLink: '/'
      };
    } else {
      return {
        title: 'Your Message Has Been Sent! ✝️',
        icon: faCheckCircle,
        message: message || 'Thank you for contacting the Catholic Diocese of Malakal. We will respond to you within 2-3 business days.',
        action: 'Return to Home',
        actionLink: '/'
      };
    }
  };

  const content = getContent();

  return (
    <div className="thank-you-page">
      <div className="thank-you-container">
        <div className="thank-you-card">
          <div className="thank-you-icon">
            <FontAwesomeIcon icon={content.icon} />
          </div>
          <h1>{content.title}</h1>
          <p>{content.message}</p>
          
          <div className="thank-you-blessing">
            <span>✝</span>
            <p>"The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you."</p>
            <span>Numbers 6:24-25</span>
          </div>

          <div className="thank-you-actions">
            <button className="btn-home" onClick={() => navigate('/')}>
              <FontAwesomeIcon icon={faHome} /> {content.action}
            </button>
            {type === 'contact' && (
              <button className="btn-back" onClick={() => navigate('/contact')}>
                <FontAwesomeIcon icon={faEnvelope} /> Send Another Message
              </button>
            )}
            {type === 'donation' && (
              <button className="btn-back" onClick={() => navigate('/donate')}>
                <FontAwesomeIcon icon={faPray} /> Make Another Donation
              </button>
            )}
          </div>

          <div className="thank-you-social">
            <p>Follow us on social media for daily inspiration:</p>
            <div className="social-icons">
              <a href="#" className="social-icon facebook">Facebook</a>
              <a href="#" className="social-icon twitter">Twitter</a>
              <a href="#" className="social-icon instagram">Instagram</a>
              <a href="#" className="social-icon youtube">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;