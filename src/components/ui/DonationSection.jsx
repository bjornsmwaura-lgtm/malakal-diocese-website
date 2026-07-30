import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, faHandHoldingHeart, faCoins, 
  faDonate, faSpinner, faCheckCircle, faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import { submitDonation } from '../services/api';

const DonationSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [donationData, setDonationData] = useState({
    amount: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    paymentMethod: 'card',
    anonymous: false,
    recurring: false,
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const donationAmounts = [10, 25, 50, 100, 250, 500];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonationData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('🔴 DONATION FORM SUBMITTED!');
    console.log('🔴 Form data:', donationData);
    
    setLoading(true);
    setStatus(null);
    setErrorMessage('');

    // Validation
    if (!donationData.amount || donationData.amount < 1) {
      setErrorMessage('Please enter a valid donation amount');
      setLoading(false);
      return;
    }
    if (!donationData.name) {
      setErrorMessage('Please enter your name');
      setLoading(false);
      return;
    }
    if (!donationData.email) {
      setErrorMessage('Please enter your email');
      setLoading(false);
      return;
    }

    try {
      console.log('🔴 Calling submitDonation API...');
      const response = await submitDonation(donationData);
      console.log('🔴 API Response:', response);
      
      setStatus('success');
      setTimeout(() => {
        setShowModal(false);
        setDonationData({
          amount: '',
          name: '',
          email: '',
          phone: '',
          message: '',
          paymentMethod: 'card',
          anonymous: false,
          recurring: false,
        });
        setStatus(null);
      }, 2500);
    } catch (error) {
      console.error('🔴 Error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Donation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button 
        className="btn-donate"
        onClick={() => {
          console.log('🔴 Donate button clicked - opening modal');
          setShowModal(true);
        }}
      >
        <FontAwesomeIcon icon={faDonate} /> Make a Donation
      </button>

      {showModal && (
        <div className="donation-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="donation-modal" onClick={(e) => e.stopPropagation()}>
            <div className="donation-modal-header">
              <h2>
                <FontAwesomeIcon icon={faHeart} /> Support the Diocese
              </h2>
              <button 
                className="modal-close" 
                onClick={() => {
                  console.log('🔴 Modal closed');
                  setShowModal(false);
                }}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="donation-form">
              {status === 'success' && (
                <div className="donation-success">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <h3>Thank You for Your Generosity! 🙏</h3>
                  <p>Your donation will help support our mission and community.</p>
                  <p className="blessing">May God bless you abundantly!</p>
                </div>
              )}

              {status === 'error' && (
                <div className="donation-error">
                  <FontAwesomeIcon icon={faTimesCircle} />
                  <h3>Donation Failed</h3>
                  <p>{errorMessage}</p>
                  <button 
                    className="btn-try-again" 
                    onClick={() => {
                      setStatus(null);
                      setErrorMessage('');
                    }}
                  >
                    Try Again
                  </button>
                </div>
              )}

              {!status && (
                <>
                  <div className="donation-amounts">
                    <label>Select Donation Amount</label>
                    <div className="amount-grid">
                      {donationAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className={`amount-btn ${donationData.amount === amount ? 'active' : ''}`}
                          onClick={() => setDonationData(prev => ({ ...prev, amount }))}
                        >
                          ${amount}
                        </button>
                      ))}
                      <input
                        type="number"
                        name="amount"
                        placeholder="Other"
                        value={donationData.amount}
                        onChange={handleChange}
                        className="amount-custom"
                        min="1"
                      />
                    </div>
                  </div>

                  <div className="donation-personal">
                    <div className="form-row">
                      <div className="form-group">
                        <label>Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={donationData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={donationData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={donationData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Message (Optional)</label>
                      <textarea
                        name="message"
                        rows="3"
                        value={donationData.message}
                        onChange={handleChange}
                        placeholder="Any special instructions or dedication"
                      />
                    </div>
                  </div>

                  <div className="donation-options">
                    <div className="form-group">
                      <label>Payment Method</label>
                      <select name="paymentMethod" value={donationData.paymentMethod} onChange={handleChange}>
                        <option value="card">Credit / Debit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank">Bank Transfer</option>
                        <option value="mobile">Mobile Money</option>
                      </select>
                    </div>

                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        id="anonymous"
                        name="anonymous"
                        checked={donationData.anonymous}
                        onChange={handleChange}
                      />
                      <label htmlFor="anonymous">Donate anonymously</label>
                    </div>

                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        id="recurring"
                        name="recurring"
                        checked={donationData.recurring}
                        onChange={handleChange}
                      />
                      <label htmlFor="recurring">
                        <FontAwesomeIcon icon={faCoins} /> Make this a recurring donation
                      </label>
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="error-message">
                      <FontAwesomeIcon icon={faTimesCircle} /> {errorMessage}
                    </div>
                  )}

                  <div className="donation-footer">
                    <p className="donation-disclaimer">
                      <FontAwesomeIcon icon={faHeart} /> Your donation is tax-deductible and will be used to support our community programs.
                    </p>
                    <div className="donation-actions">
                      <button 
                        type="button" 
                        className="btn-cancel" 
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit" 
                        className="btn-donate-submit" 
                        disabled={loading}
                      >
                        {loading ? (
                          <><FontAwesomeIcon icon={faSpinner} spin /> Processing...</>
                        ) : (
                          <><FontAwesomeIcon icon={faHandHoldingHeart} /> Donate Now</>
                        )}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DonationSection;