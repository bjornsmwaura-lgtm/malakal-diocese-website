// src/pages/Donate.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle.jsx';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [currency, setCurrency] = useState('USD');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const currencyOptions = [
    { code: 'USD', label: '🇺🇸 USD' },
    { code: 'EUR', label: '🇪🇺 EUR' },
    { code: 'GBP', label: '🇬🇧 GBP' }
    ];

  const handleAmountSelect = (value) => {
    setSelectedAmount(value);
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setAmount(value);
    // Keep selectedAmount as 'custom' so the input stays visible
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please select or enter a valid donation amount.');
      return;
    }

    if (!name.trim() || !email.trim()) {
      alert('Please enter your name and email.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const donationData = {
      amount: parseFloat(amount),
      currency,
      donationType,
      donor: { name, email, phone, country },
      message,
      timestamp: new Date().toISOString()
    };

    console.log('Donation Data:', donationData);

    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setAmount('');
      setCustomAmount('');
      setSelectedAmount(null);
      setName('');
      setEmail('');
      setPhone('');
      setCountry('');
      setMessage('');
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="donate-page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / 
          <span>Donate</span>
        </div>

        <SectionTitle 
          title="❤️ Make a Donation"
          subtitle="Your generosity helps us serve the people of South Sudan"
        />

        {submitStatus === 'success' && (
          <div className="alert alert-success">
            <span className="alert-icon">✅</span>
            <div>
              <h4>Thank You for Your Donation!</h4>
              <p>Your generosity will help us continue our mission. God bless you!</p>
              <p className="alert-donation-details">
                <strong>Amount:</strong> {currency} {amount} | 
                <strong> Type:</strong> {donationType === 'one-time' ? 'One-Time' : 'Monthly'}
              </p>
            </div>
            <button className="alert-close" onClick={() => setSubmitStatus(null)}>×</button>
          </div>
        )}

        <div className="donate-form-wrapper">
          <div className="donate-form-header">
            <p className="donate-form-subtitle">Fill in the details below to make your donation</p>
          </div>

          <form onSubmit={handleSubmit} className="donate-form" noValidate>
            {/* Currency Selection */}
            <div className="donate-section">
              <h3>Select Currency</h3>
              <div className="currency-select">
                <select 
                  value={currency} 
                  onChange={(e) => setCurrency(e.target.value)}
                  className="donate-select"
                >
                  {currencyOptions.map((curr) => (
                    <option key={curr.code} value={curr.code}>
                      {curr.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Donation Amount */}
            <div className="donate-section">
              <h3>Select Donation Amount ({currency})</h3>
              <div className="donation-amounts">
                {[10, 25, 50, 100, 250].map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={`donation-amount-btn ${selectedAmount === value ? 'active' : ''}`}
                    onClick={() => handleAmountSelect(value)}
                  >
                    {currency} {value}
                  </button>
                ))}
                <button
                  type="button"
                  className={`donation-amount-btn custom ${selectedAmount === 'custom' ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedAmount('custom');
                    setAmount(customAmount || '');
                  }}
                >
                  Custom
                </button>
              </div>
              {selectedAmount === 'custom' && (
                <div className="custom-amount-wrapper">
                  <input
                    type="number"
                    className="donation-input custom-input"
                    placeholder={`Enter amount in ${currency}`}
                    value={customAmount}
                    onChange={handleCustomAmount}
                    min="1"
                    step="1"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Donation Type */}
            <div className="donate-section">
              <h3>Donation Type</h3>
              <div className="donation-type-options">
                <label className="donation-type-option">
                  <input
                    type="radio"
                    name="donationType"
                    value="one-time"
                    checked={donationType === 'one-time'}
                    onChange={(e) => setDonationType(e.target.value)}
                  />
                  <span>One-Time</span>
                </label>
                <label className="donation-type-option">
                  <input
                    type="radio"
                    name="donationType"
                    value="monthly"
                    checked={donationType === 'monthly'}
                    onChange={(e) => setDonationType(e.target.value)}
                  />
                  <span>Monthly</span>
                </label>
              </div>
            </div>

            {/* Personal Information */}
            <div className="donate-section">
              <h3>Personal Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name <span className="required-star">*</span></label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address <span className="required-star">*</span></label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+211 912 345 678"
                  />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Your country"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="donate-section">
              <div className="form-group">
                <label>Message / Prayer Intention (Optional)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any special instructions or prayer intentions..."
                  rows="3"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="donate-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Processing...
                </>
              ) : (
                '❤️ Donate Now'
              )}
            </button>

            <p className="donate-secure">
              🔒 Secure SSL encryption. Your information is safe.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;