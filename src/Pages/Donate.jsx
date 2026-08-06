// src/pages/Donate.jsx

import React, { useState } from 'react';
import PageLayout from '../components/common/PageLayout';
import PageHeader from '../components/common/PageHeader';
import './Donate.css';

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log('Donation submitted:', formData);
    }, 1500);
  };

  const currencies = [
    { code: 'USD', label: 'USD - US Dollar', symbol: '$' },
    { code: 'EUR', label: 'EUR - Euro', symbol: '€' },
    { code: 'GBP', label: 'GBP - British Pound', symbol: '£' },
    { code: 'KES', label: 'KES - Kenyan Shilling', symbol: 'KSh' },
    { code: 'UGX', label: 'UGX - Ugandan Shilling', symbol: 'USh' },
    { code: 'TZS', label: 'TZS - Tanzanian Shilling', symbol: 'TSh' },
    { code: 'SSP', label: 'SSP - South Sudanese Pound', symbol: 'SSP' }
  ];

  const paymentMethods = [
    { id: 'paypal', label: 'PayPal', icon: '💳', description: 'Secure online payment' },
    { id: 'mobile-money', label: 'Mobile Money', icon: '📱', description: 'M-Pesa, MTN, Airtel' },
    { id: 'bank-transfer', label: 'Bank Transfer', icon: '🏦', description: 'International & Local' },
    { id: 'card', label: 'Credit/Debit Card', icon: '💳', description: 'Visa, Mastercard, Amex' },
    { id: 'crypto', label: 'Cryptocurrency', icon: '₿', description: 'Bitcoin, Ethereum, USDC' },
    { id: 'cash', label: 'Cash Donation', icon: '💰', description: 'In-person donation' }
  ];

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
            onClick={() => setIsSubmitted(false)}
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
        description="Your donation helps us continue our mission of serving the people of South Sudan through education, healthcare, humanitarian aid, and pastoral care. Donors from all over the world are welcome."
        image="/images/curia/donate.avif"
        badge="Give"
      />

      <div className="donate-page">
        <div className="donate-grid">
          {/* Donation Form */}
          <div className="donate-form-container">
            <h2 className="donate-form-title">Make a Donation</h2>
            <form onSubmit={handleSubmit} className="donate-form">
              {/* Personal Information */}
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
                <label htmlFor="country">Country/Region *</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="KE">Kenya</option>
                  <option value="UG">Uganda</option>
                  <option value="TZ">Tanzania</option>
                  <option value="SS">South Sudan</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="IT">Italy</option>
                  <option value="ZA">South Africa</option>
                  <option value="NG">Nigeria</option>
                  <option value="GH">Ghana</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Donation Amount & Currency */}
              <div className="form-row">
                <div className="form-group">
                  <label>Currency *</label>
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
                    <button
                      type="button"
                      className={`amount-btn ${formData.amount === '10' ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, amount: '10'})}
                    >
                      {formData.currency === 'USD' ? '$10' : 
                       formData.currency === 'EUR' ? '€10' :
                       formData.currency === 'GBP' ? '£10' :
                       formData.currency === 'KES' ? 'KSh 1,000' :
                       formData.currency === 'UGX' ? 'USh 50,000' :
                       formData.currency === 'TZS' ? 'TSh 25,000' :
                       'SSP 10,000'}
                    </button>
                    <button
                      type="button"
                      className={`amount-btn ${formData.amount === '25' ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, amount: '25'})}
                    >
                      {formData.currency === 'USD' ? '$25' : 
                       formData.currency === 'EUR' ? '€25' :
                       formData.currency === 'GBP' ? '£25' :
                       formData.currency === 'KES' ? 'KSh 2,500' :
                       formData.currency === 'UGX' ? 'USh 100,000' :
                       formData.currency === 'TZS' ? 'TSh 50,000' :
                       'SSP 25,000'}
                    </button>
                    <button
                      type="button"
                      className={`amount-btn ${formData.amount === '50' ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, amount: '50'})}
                    >
                      {formData.currency === 'USD' ? '$50' : 
                       formData.currency === 'EUR' ? '€50' :
                       formData.currency === 'GBP' ? '£50' :
                       formData.currency === 'KES' ? 'KSh 5,000' :
                       formData.currency === 'UGX' ? 'USh 200,000' :
                       formData.currency === 'TZS' ? 'TSh 100,000' :
                       'SSP 50,000'}
                    </button>
                    <button
                      type="button"
                      className={`amount-btn ${formData.amount === '100' ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, amount: '100'})}
                    >
                      {formData.currency === 'USD' ? '$100' : 
                       formData.currency === 'EUR' ? '€100' :
                       formData.currency === 'GBP' ? '£100' :
                       formData.currency === 'KES' ? 'KSh 10,000' :
                       formData.currency === 'UGX' ? 'USh 500,000' :
                       formData.currency === 'TZS' ? 'TSh 250,000' :
                       'SSP 100,000'}
                    </button>
                    <button
                      type="button"
                      className={`amount-btn ${formData.amount === '500' ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, amount: '500'})}
                    >
                      {formData.currency === 'USD' ? '$500' : 
                       formData.currency === 'EUR' ? '€500' :
                       formData.currency === 'GBP' ? '£500' :
                       formData.currency === 'KES' ? 'KSh 50,000' :
                       formData.currency === 'UGX' ? 'USh 2,500,000' :
                       formData.currency === 'TZS' ? 'TSh 1,250,000' :
                       'SSP 500,000'}
                    </button>
                    <button
                      type="button"
                      className={`amount-btn ${formData.amount === 'other' ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, amount: 'other'})}
                    >
                      Other Amount
                    </button>
                  </div>
                  {formData.amount === 'other' && (
                    <div className="form-group" style={{ marginTop: '0.75rem' }}>
                      <input
                        type="number"
                        name="customAmount"
                        placeholder={`Enter amount in ${formData.currency}`}
                        onChange={(e) => setFormData({...formData, customAmount: e.target.value})}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Method */}
              <div className="form-group">
                <label>Mode of Payment *</label>
                <div className="payment-methods">
                  {paymentMethods.map(method => (
                    <div 
                      key={method.id}
                      className={`payment-option ${formData.paymentMethod === method.id ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, paymentMethod: method.id})}
                    >
                      <span className="payment-icon">{method.icon}</span>
                      <div className="payment-info">
                        <span className="payment-label">{method.label}</span>
                        <span className="payment-description">{method.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Details (conditional) */}
              {formData.paymentMethod === 'paypal' && (
                <div className="payment-details">
                  <h4>💳 PayPal Payment</h4>
                  <p>You will be redirected to PayPal to complete your payment securely.</p>
                  <p><strong>Account:</strong> donations@malakaldiocese.org</p>
                  <p className="payment-note">PayPal accepts credit cards, debit cards, and bank accounts. No PayPal account required.</p>
                </div>
              )}

              {formData.paymentMethod === 'mobile-money' && (
                <div className="payment-details">
                  <h4>📱 Mobile Money Payment</h4>
                  <p><strong>M-Pesa Paybill:</strong> 123456</p>
                  <p><strong>Account Name:</strong> Diocese of Malakal</p>
                  <p><strong>Supported Networks:</strong> M-Pesa, MTN Mobile Money, Airtel Money</p>
                  <p className="payment-note">Please use your full name as the reference. You will receive a confirmation SMS.</p>
                </div>
              )}

              {formData.paymentMethod === 'bank-transfer' && (
                <div className="payment-details">
                  <h4>🏦 Bank Transfer</h4>
                  <p><strong>Bank Name:</strong> [Bank Name]</p>
                  <p><strong>Account Name:</strong> Diocese of Malakal</p>
                  <p><strong>Account Number:</strong> [Account Number]</p>
                  <p><strong>SWIFT/BIC:</strong> [SWIFT Code]</p>
                  <p><strong>Branch:</strong> Malakal, South Sudan</p>
                  <p className="payment-note">Please use your full name as the reference. Send proof of payment to finance@malakaldiocese.org</p>
                </div>
              )}

              {formData.paymentMethod === 'card' && (
                <div className="payment-details">
                  <h4>💳 Credit/Debit Card</h4>
                  <p>We accept the following cards:</p>
                  <ul>
                    <li>Visa</li>
                    <li>Mastercard</li>
                    <li>American Express</li>
                    <li>Discover</li>
                  </ul>
                  <p className="payment-note">Your card details are processed securely. You will be redirected to our secure payment gateway.</p>
                </div>
              )}

              {formData.paymentMethod === 'crypto' && (
                <div className="payment-details">
                  <h4>₿ Cryptocurrency</h4>
                  <p>We accept the following cryptocurrencies:</p>
                  <ul>
                    <li><strong>Bitcoin (BTC):</strong> [BTC Address]</li>
                    <li><strong>Ethereum (ETH):</strong> [ETH Address]</li>
                    <li><strong>USDC (ERC-20):</strong> [USDC Address]</li>
                    <li><strong>USDT (ERC-20):</strong> [USDT Address]</li>
                  </ul>
                  <p className="payment-note">Please send only the specified cryptocurrency to the corresponding address. Contact us for assistance.</p>
                </div>
              )}

              {formData.paymentMethod === 'cash' && (
                <div className="payment-details">
                  <h4>💰 Cash Donation</h4>
                  <p>You can deliver your cash donation at:</p>
                  <p><strong>Location:</strong> Bishop's House, Malakal, South Sudan</p>
                  <p><strong>Office Hours:</strong> Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="payment-note">Please contact us in advance to arrange a convenient time.</p>
                </div>
              )}

              {/* Message */}
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

              {/* Anonymous Option */}
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

              {/* Submit Button */}
              <button type="submit" className="btn-donate" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Make a Donation'}
              </button>
            </form>
          </div>

          {/* Donation Information Sidebar */}
          <div className="donation-info">
            <div className="info-card">
              <h3>Where Your Donation Goes</h3>
              <ul>
                <li>🩺 <strong>Healthcare Services</strong> - Establishing medical facilities</li>
                <li>📚 <strong>Education</strong> - Supporting Catholic schools</li>
                <li>🤝 <strong>Humanitarian Aid</strong> - Emergency relief and food security</li>
                <li>⛪ <strong>Pastoral Ministry</strong> - Supporting parishes and priests</li>
                <li>👨‍🎓 <strong>Vocational Training</strong> - Empowering youth with skills</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Why Choose Us?</h3>
              <ul>
                <li>🌍 <strong>Global Reach</strong> - Donors from all over the world</li>
                <li>💳 <strong>Multiple Payment Options</strong> - PayPal, Cards, Bank Transfer, Crypto</li>
                <li>🔒 <strong>Secure Transactions</strong> - SSL encrypted payments</li>
                <li>📋 <strong>Tax Deductible</strong> - Receipts provided for tax purposes</li>
                <li>🤲 <strong>100% Impact</strong> - Your donation goes directly to the mission</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Need Help?</h3>
              <p>If you have questions about your donation or need assistance, please contact us:</p>
              <p><strong>📞 Phone:</strong> +211 912 345 678</p>
              <p><strong>✉ Email:</strong> donations@malakaldiocese.org</p>
              <p><strong>🕐 Response Time:</strong> Within 24 hours</p>
            </div>

            <div className="info-card">
              <h3>Tax Information</h3>
              <p><strong>Tax ID:</strong> [Tax ID Number]</p>
              <p>All donations are tax-deductible where applicable. We will provide you with a receipt for your records.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Donate;