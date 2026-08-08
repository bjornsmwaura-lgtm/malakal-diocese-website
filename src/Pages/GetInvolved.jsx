// src/pages/GetInvolved.jsx

import React, { useState } from 'react';
import PageLayout from '../components/common/PageLayout';
import PageHeader from '../components/common/PageHeader';
import { volunteerAPI, partnershipAPI } from '../services/api';
import './GetInvolved.css';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: '',
    skills: '',
    availability: '',
    message: '',
    type: 'volunteer'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const submissionData = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone || '',
      interest: formData.interest || '',
      skills: formData.skills || '',
      availability: formData.availability || '',
      message: formData.message || '',
      type: formData.type
    };

    try {
      let result;
      if (formData.type === 'volunteer') {
        result = await volunteerAPI.create(submissionData);
      } else {
        result = await partnershipAPI.create(submissionData);
      }

      if (result.data.success) {
        setSubmitStatus({
          type: 'success',
          message: `Thank you for your interest in ${formData.type === 'volunteer' ? 'volunteering' : 'partnering'} with us! We will contact you soon.`
        });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          interest: '',
          skills: '',
          availability: '',
          message: '',
          type: formData.type
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.data.message || 'Failed to submit form'
        });
      }
    } catch (error) {
      console.error('❌ Form submission error:', error.response?.data || error.message);
      setSubmitStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to submit form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <PageHeader
        title="Get Involved"
        subtitle="Join Us in Serving the Community"
        description="There are many ways to support the Diocese of Malakal. Volunteer your time, partner with us, or contribute your skills."
        image="/images/curia/OIP.webp"
        badge="Join Us"
      />

      <div className="get-involved-page">
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`tab-btn ${formData.type === 'volunteer' ? 'active' : ''}`}
            onClick={() => setFormData(prev => ({ ...prev, type: 'volunteer' }))}
          >
            🤝 Volunteer
          </button>
          <button
            className={`tab-btn ${formData.type === 'partner' ? 'active' : ''}`}
            onClick={() => setFormData(prev => ({ ...prev, type: 'partner' }))}
          >
            🤲 Partnership
          </button>
        </div>

        {/* Form Section */}
        <div className="form-section" id="volunteer">
          <h2>{formData.type === 'volunteer' ? 'Volunteer With Us' : 'Partner With Us'}</h2>
          <p className="form-subtitle">
            {formData.type === 'volunteer'
              ? 'Share your time and talents to make a difference in our communities.'
              : 'Join us in our mission through strategic partnership and collaboration.'}
          </p>

          {submitStatus && (
            <div className={`alert ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="get-involved-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+211 912 345 678"
                />
              </div>
              <div className="form-group">
                <label>{formData.type === 'volunteer' ? 'Area of Interest' : 'Type of Partnership'}</label>
                <input
                  type="text"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  placeholder={formData.type === 'volunteer'
                    ? 'e.g., Youth Ministry, Education, Healthcare'
                    : 'e.g., Education, Healthcare, Infrastructure'}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{formData.type === 'volunteer' ? 'Skills & Qualifications' : 'Organization Name'}</label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder={formData.type === 'volunteer'
                    ? 'List your relevant skills'
                    : 'Your organization name'}
                />
              </div>
              <div className="form-group">
                <label>Availability</label>
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  placeholder={formData.type === 'volunteer'
                    ? 'e.g., Weekends, Weekdays, Flexible'
                    : 'Best time to contact'}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Message / Additional Information</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about how you'd like to help..."
              />
            </div>

            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting
                ? 'Submitting...'
                : formData.type === 'volunteer'
                  ? 'Volunteer Now'
                  : 'Submit Partnership Request'}
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default GetInvolved;  // ✅ THIS LINE IS IMPORTANT!