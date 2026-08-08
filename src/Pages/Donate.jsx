// src/pages/Donate.jsx

import React, { useState } from 'react';
import PageLayout from '../components/common/PageLayout';
import PageHeader from '../components/common/PageHeader';
import { donationAPI } from '../services/api';
import './Donate.css';

// ===== CURRENCY CONFIGURATION =====
const currencyRates = {
  'USD': 1,
  'EUR': 0.92,
  'GBP': 0.79,
  'SSP': 1300,
  'KES': 130,
  'UGX': 3700,
  'TZS': 2500,
  'RWF': 1300,
  'ETB': 56,
  'ZAR': 19,
  'NGN': 1500,
  'GHS': 15,
  'ZMW': 25,
  'MZN': 64,
  'AOA': 830,
  'BWP': 13.5,
  'MWK': 1700,
  'SZL': 19,
  'LRD': 190,
  'GMD': 70,
};

const currencySymbols = {
  'USD': '$',
  'EUR': '€',
  'GBP': '£',
  'SSP': 'SSP ',
  'KES': 'KSh ',
  'UGX': 'USh ',
  'TZS': 'TSh ',
  'RWF': 'FRw ',
  'ETB': 'Br ',
  'ZAR': 'R ',
  'NGN': '₦',
  'GHS': '₵',
  'ZMW': 'ZK ',
  'MZN': 'MT ',
  'AOA': 'Kz ',
  'BWP': 'P ',
  'MWK': 'MK ',
  'SZL': 'L ',
  'LRD': 'L$ ',
  'GMD': 'D ',
};

const getConvertedAmount = (usdAmount, currency) => {
  if (!usdAmount || usdAmount === 'other') return null;
  const rate = currencyRates[currency] || 1;
  const converted = parseFloat(usdAmount) * rate;
  if (currency === 'USD' || currency === 'EUR' || currency === 'GBP') {
    return converted.toFixed(2);
  }
  return Math.round(converted);
};

const getDisplayAmount = (usdAmount, currency) => {
  if (!usdAmount || usdAmount === 'other') return null;
  const symbol = currencySymbols[currency] || '';
  const amount = getConvertedAmount(usdAmount, currency);
  if (amount === null) return null;
  return `${symbol}${amount}`;
};

const Donate = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    amount: '',
    currency: 'USD',
    paymentMethod: 'paypal',
    message: '',
    anonymous: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const currencies = [
    { code: 'USD', label: 'USD - US Dollar' },
    { code: 'EUR', label: 'EUR - Euro' },
    { code: 'GBP', label: 'GBP - British Pound' },
    { code: 'SSP', label: 'SSP - South Sudanese Pound' },
    { code: 'KES', label: 'KES - Kenyan Shilling' },
    { code: 'UGX', label: 'UGX - Ugandan Shilling' },
    { code: 'TZS', label: 'TZS - Tanzanian Shilling' },
    { code: 'RWF', label: 'RWF - Rwandan Franc' },
    { code: 'ETB', label: 'ETB - Ethiopian Birr' },
    { code: 'ZAR', label: 'ZAR - South African Rand' },
    { code: 'NGN', label: 'NGN - Nigerian Naira' },
    { code: 'GHS', label: 'GHS - Ghanaian Cedi' },
    { code: 'ZMW', label: 'ZMW - Zambian Kwacha' },
    { code: 'MZN', label: 'MZN - Mozambican Metical' },
    { code: 'AOA', label: 'AOA - Angolan Kwanza' },
    { code: 'BWP', label: 'BWP - Botswana Pula' },
    { code: 'MWK', label: 'MWK - Malawian Kwacha' },
    { code: 'SZL', label: 'SZL - Swazi Lilangeni' },
    { code: 'LRD', label: 'LRD - Liberian Dollar' },
    { code: 'GMD', label: 'GMD - Gambian Dalasi' },
  ];

  const africanCountries = [
    { code: 'SS', name: 'South Sudan' },
    { code: 'KE', name: 'Kenya' },
    { code: 'UG', name: 'Uganda' },
    { code: 'TZ', name: 'Tanzania' },
    { code: 'RW', name: 'Rwanda' },
    { code: 'ET', name: 'Ethiopia' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'GH', name: 'Ghana' },
    { code: 'ZM', name: 'Zambia' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'AO', name: 'Angola' },
    { code: 'BW', name: 'Botswana' },
    { code: 'MW', name: 'Malawi' },
    { code: 'SZ', name: 'Eswatini (Swaziland)' },
    { code: 'LR', name: 'Liberia' },
    { code: 'GM', name: 'Gambia' },
    { code: 'SL', name: 'Sierra Leone' },
    { code: 'CM', name: 'Cameroon' },
    { code: 'CD', name: 'DR Congo' },
    { code: 'CG', name: 'Congo' },
    { code: 'CI', name: 'Ivory Coast' },
    { code: 'SN', name: 'Senegal' },
    { code: 'ML', name: 'Mali' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'NE', name: 'Niger' },
    { code: 'TD', name: 'Chad' },
    { code: 'CF', name: 'Central African Republic' },
    { code: 'BI', name: 'Burundi' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'ER', name: 'Eritrea' },
    { code: 'SO', name: 'Somalia' },
    { code: 'SD', name: 'Sudan' },
    { code: 'NA', name: 'Namibia' },
    { code: 'ZW', name: 'Zimbabwe' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'MU', name: 'Mauritius' },
    { code: 'SC', name: 'Seychelles' },
    { code: 'US', name: 'United States' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'IT', name: 'Italy' },
    { code: 'other', name: 'Other' },
  ];

  const paymentMethods = [
    { id: 'paypal', label: 'PayPal', icon: '💳' },
    { id: 'mobile-money', label: 'Mobile Money', icon: '📱' },
    { id: 'bank-transfer', label: 'Bank Transfer', icon: '🏦' },
    { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
    { id: 'crypto', label: 'Cryptocurrency', icon: '₿' },
    { id: 'cash', label: 'Cash Donation', icon: '💰' },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const donationData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone || '',
        country: formData.country || '',
        amount: formData.amount === 'other' ? parseFloat(formData.customAmount) : parseFloat(formData.amount),
        currency: formData.currency || 'USD',
        paymentMethod: formData.paymentMethod || 'paypal',
        message: formData.message || '',
        anonymous: formData.anonymous || false
      };

      const result = await donationAPI.create(donationData);

      if (result.data.success) {
        setIsSubmitted(true);
      } else {
        setError(result.data.message || 'Failed to process donation');
      }
    } catch (err) {
      console.error('❌ Donation error:', err);
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <PageLayout>
        <div className="donation-success">
          <div className="success-icon">✅</div>
          <h1>Thank You for Your Donation!</h1>
          <p>Your generosity will help us serve the people of the Diocese of Malakal.</p>
          <p className="success-details">
            {formData.paymentMethod === 'paypal' && 'You will be redirected to PayPal to complete your payment.'}
            {formData.paymentMethod === 'mobile-money' && 'Please check your phone for the payment prompt.'}
            {formData.paymentMethod === 'bank-transfer' && 'We will send you the bank transfer details via email.'}
            {formData.paymentMethod === 'card' && 'You will be redirected to our secure payment gateway.'}
            {formData.paymentMethod === 'crypto' && 'We will send you the cryptocurrency wallet address via email.'}
            {formData.paymentMethod === 'cash' && 'We will contact you to arrange the cash donation.'}
          </p>
          <button 
            className="btn-primary" 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                country: '',
                amount: '',
                currency: 'USD',
                paymentMethod: 'paypal',
                message: '',
                anonymous: false
              });
            }}
          >
            Make Another Donation
          </button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageHeader
        title="Support the Diocese of Malakal"
        subtitle="Your Generosity Makes a Difference"
        description="Your donation helps us continue our mission of serving the people of South Sudan through education, healthcare, humanitarian aid, and pastoral care."
        image="/images/curia/donate.avif"
        badge="Give"
      />

      <div className="donate-page">
        {error && (
          <div className="alert error" style={{ maxWidth: '800px', margin: '0 auto 1rem auto' }}>
            ❌ {error}
          </div>
        )}

        <div className="donate-grid">
          <div className="donate-form-container">
            <h2 className="donate-form-title">Make a Donation</h2>
            <form onSubmit={handleSubmit} className="donate-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+211 912 345 678"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="country">Country/Region</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select your country</option>
                  {africanCountries.map(country => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Currency</label>
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                  >
                    {currencies.map(curr => (
                      <option key={curr.code} value={curr.code}>
                        {curr.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Donation Amount *</label>
                  <div className="amount-options">
                    {['10', '25', '50', '100', '500'].map(amount => (
                      <button
                        key={amount}
                        type="button"
                        className={`amount-btn ${formData.amount === amount ? 'active' : ''}`}
                        onClick={() => setFormData({...formData, amount})}
                      >
                        {getDisplayAmount(amount, formData.currency) || `$${amount}`}
                      </button>
                    ))}
                    <button
                      type="button"
                      className={`amount-btn ${formData.amount === 'other' ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, amount: 'other'})}
                    >
                      Other Amount
                    </button>
                  </div>
                  {formData.amount === 'other' && (
                    <div style={{ marginTop: '0.75rem' }}>
                      <input
                        type="number"
                        name="customAmount"
                        placeholder={`Enter amount in ${formData.currency}`}
                        onChange={(e) => setFormData({...formData, customAmount: e.target.value})}
                        style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e0d6c8', borderRadius: '8px' }}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>Payment Method</label>
                <div className="payment-methods">
                  {paymentMethods.map(method => (
                    <div
                      key={method.id}
                      className={`payment-option ${formData.paymentMethod === method.id ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, paymentMethod: method.id})}
                    >
                      <span className="payment-icon">{method.icon}</span>
                      <span className="payment-label">{method.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Special Instructions or Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special instructions or message for the diocese..."
                  rows="3"
                />
              </div>

              <div className="form-group checkbox-group">
                <input
                  type="checkbox"
                  id="anonymous"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleChange}
                />
                <label htmlFor="anonymous">I would like to remain anonymous</label>
              </div>

              <button type="submit" className="btn-donate" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Make a Donation'}
              </button>
            </form>
          </div>

          <div className="donation-info">
            <div className="info-card">
              <h3>Where Your Donation Goes</h3>
              <ul>
                <li>🩺 <strong>Healthcare Services</strong></li>
                <li>📚 <strong>Education</strong></li>
                <li>🤝 <strong>Humanitarian Aid</strong></li>
                <li>⛪ <strong>Pastoral Ministry</strong></li>
                <li>👨‍🎓 <strong>Vocational Training</strong></li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Need Help?</h3>
              <p><strong>📞 Phone:</strong> +211 912 345 678</p>
              <p><strong>✉ Email:</strong> donations@malakaldiocese.org</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Donate;