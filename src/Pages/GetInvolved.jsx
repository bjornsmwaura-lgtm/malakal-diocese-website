// src/pages/GetInvolved.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { volunteerAPI } from '../services/api.js';

const GetInvolved = () => {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Volunteer Form State
  const [volunteerData, setVolunteerData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    availability: 'flexible',
    skills: [],
    motivation: '',
    experience: ''
  });

  // Partner Form State
  const [partnerData, setPartnerData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    organizationType: '',
    partnershipInterest: '',
    message: ''
  });

  const skillsList = [
    'healthcare', 'teaching', 'construction', 'administration',
    'logistics', 'fundraising', 'communication', 'other'
  ];

  const organizationTypes = [
    'NGO', 'Church Organization', 'Government Agency', 'Private Sector',
    'Educational Institution', 'Community Based Organization', 'Other'
  ];

  const partnershipInterests = [
    'Funding Support', 'Technical Expertise', 'Resource Sharing',
    'Advocacy', 'Program Implementation', 'Research', 'Other'
  ];

  const handleVolunteerChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setVolunteerData(prev => ({
          ...prev,
          skills: [...prev.skills, value]
        }));
      } else {
        setVolunteerData(prev => ({
          ...prev,
          skills: prev.skills.filter(skill => skill !== value)
        }));
      }
    } else {
      setVolunteerData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handlePartnerChange = (e) => {
    const { name, value } = e.target;
    setPartnerData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();
    
    if (!volunteerData.name.trim() || !volunteerData.email.trim() || !volunteerData.phone.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await volunteerAPI.create({
        name: volunteerData.name,
        email: volunteerData.email,
        phone: volunteerData.phone,
        country: volunteerData.country,
        availability: volunteerData.availability,
        skills: volunteerData.skills,
        motivation: volunteerData.motivation,
        experience: volunteerData.experience
      });

      setSubmitStatus('volunteer-success');
      setVolunteerData({
        name: '',
        email: '',
        phone: '',
        country: '',
        availability: 'flexible',
        skills: [],
        motivation: '',
        experience: ''
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Volunteer submission error:', error);
      setSubmitStatus('volunteer-error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePartnerSubmit = async (e) => {
    e.preventDefault();
    
    if (!partnerData.organizationName.trim() || !partnerData.contactPerson.trim() || 
        !partnerData.email.trim() || !partnerData.phone.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('Partner Data:', partnerData);

      setSubmitStatus('partner-success');
      setPartnerData({
        organizationName: '',
        contactPerson: '',
        email: '',
        phone: '',
        country: '',
        organizationType: '',
        partnershipInterest: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Partner submission error:', error);
      setSubmitStatus('partner-error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const waysToHelp = [
     
    {
      id: 1,
      title: "Volunteer Your Time",
      description: "Join our team and make a difference in the lives of others.",
      icon: "🤝",
      buttonText: "Become a Volunteer",
      action: "volunteer"
    },
    {
      id: 2,
      title: "Partner With Us",
      description: "Collaborate with us to expand our reach and impact.",
      icon: "🤝",
      buttonText: "Partner with Us",
      action: "partner"
    },
    {
      id: 3,
      title: "Pray for Our Work",
      description: "Your prayers strengthen our mission and bring hope to those we serve.",
      icon: "🙏",
      buttonText: "Pray With Us",
      action: "pray"
    },
    {
      id: 4,
      title: "Spread Awareness",
      description: "Share our work with your network to increase visibility.",
      icon: "📢",
      buttonText: "Share Our Story",
      action: "share"
    }
  ];

  const handleAction = (action) => {
  if (action === 'donate') {
    window.location.href = '/donate';  // ← Direct to donate page
  } else if (action === 'volunteer') {
    setShowVolunteerForm(!showVolunteerForm);
    setShowPartnerForm(false);
  } else if (action === 'partner') {
    setShowPartnerForm(!showPartnerForm);
    setShowVolunteerForm(false);
  } else {
    alert(`${action.charAt(0).toUpperCase() + action.slice(1)} feature coming soon!`);
  }
};

  return (
    <div className="get-involved-page">
      <div className="container">
        <SectionTitle 
          title="Get Involved"
          subtitle="Join us in building hope and transforming lives"
        />

        {submitStatus === 'volunteer-success' && (
          <div className="alert alert-success">
            <span className="alert-icon">✅</span>
            <div>
              <h4>Volunteer Application Submitted!</h4>
              <p>Thank you for your interest in volunteering. We will contact you soon.</p>
            </div>
            <button className="alert-close" onClick={() => setSubmitStatus(null)}>×</button>
          </div>
        )}
        
        {submitStatus === 'volunteer-error' && (
          <div className="alert alert-error">
            <span className="alert-icon">❌</span>
            <div>
              <h4>Submission Failed</h4>
              <p>We couldn't submit your application. Please try again.</p>
            </div>
            <button className="alert-close" onClick={() => setSubmitStatus(null)}>×</button>
          </div>
        )}

        {submitStatus === 'partner-success' && (
          <div className="alert alert-success">
            <span className="alert-icon">✅</span>
            <div>
              <h4>Partnership Request Submitted!</h4>
              <p>Thank you for your interest in partnering with us. We will review and contact you soon.</p>
            </div>
            <button className="alert-close" onClick={() => setSubmitStatus(null)}>×</button>
          </div>
        )}
        
        {submitStatus === 'partner-error' && (
          <div className="alert alert-error">
            <span className="alert-icon">❌</span>
            <div>
              <h4>Submission Failed</h4>
              <p>We couldn't submit your partnership request. Please try again.</p>
            </div>
            <button className="alert-close" onClick={() => setSubmitStatus(null)}>×</button>
          </div>
        )}

        <div className="involved-grid">
          {waysToHelp.map(way => (
            <div key={way.id} className="involved-card">
              <div className="involved-icon">{way.icon}</div>
              <h3>{way.title}</h3>
              <p>{way.description}</p>
              <button 
                className="btn btn-primary" 
                onClick={() => handleAction(way.action)}
              >
                {way.buttonText}
              </button>
            </div>
          ))}
        </div>

       {/* Volunteer Form - Enhanced */}
{showVolunteerForm && (
  <div className="volunteer-form-container">
    <div className="volunteer-form-header">
      <h2>🤝 Volunteer Application Form</h2>
      <p>Fill in the form below to join our team of dedicated volunteers.</p>
      <p className="form-required-note"><span className="required-star">*</span> Required fields</p>
    </div>
    
    <form onSubmit={handleVolunteerSubmit} className="volunteer-form" noValidate>
      <div className="form-row">
        <div className="form-group">
          <label>Full Name <span className="required-star">*</span></label>
          <input
            type="text"
            name="name"
            value={volunteerData.name}
            onChange={handleVolunteerChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address <span className="required-star">*</span></label>
          <input
            type="email"
            name="email"
            value={volunteerData.email}
            onChange={handleVolunteerChange}
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Phone Number <span className="required-star">*</span></label>
          <input
            type="tel"
            name="phone"
            value={volunteerData.phone}
            onChange={handleVolunteerChange}
            placeholder="+211 912 345 678"
            required
          />
        </div>

        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={volunteerData.country}
            onChange={handleVolunteerChange}
            placeholder="Your country"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Availability</label>
          <select
            name="availability"
            value={volunteerData.availability}
            onChange={handleVolunteerChange}
          >
            <option value="flexible">Flexible</option>
            <option value="weekdays">Weekdays</option>
            <option value="weekends">Weekends</option>
            <option value="evenings">Evenings</option>
          </select>
        </div>

        <div className="form-group">
          <label>Skills & Expertise</label>
          <div className="skills-checkboxes">
            {skillsList.map(skill => (
              <label key={skill} className="skill-label">
                <input
                  type="checkbox"
                  name="skills"
                  value={skill}
                  checked={volunteerData.skills.includes(skill)}
                  onChange={handleVolunteerChange}
                />
                {skill.charAt(0).toUpperCase() + skill.slice(1)}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>Why do you want to volunteer? <span className="required-star">*</span></label>
        <textarea
          name="motivation"
          value={volunteerData.motivation}
          onChange={handleVolunteerChange}
          placeholder="Tell us about your motivation and passion..."
          rows="4"
          required
        />
      </div>

      <div className="form-group">
        <label>Relevant Experience</label>
        <textarea
          name="experience"
          value={volunteerData.experience}
          onChange={handleVolunteerChange}
          placeholder="Share any relevant experience you have..."
          rows="3"
        />
      </div>

      <button 
        type="submit" 
        className="volunteer-submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="spinner"></span>
            Submitting...
          </>
        ) : (
          '🤝 Submit Application'
        )}
      </button>
    </form>
  </div>
)}

        {/* Partner With Us Form - Enhanced */}
{showPartnerForm && (
  <div className="volunteer-form-container partner-form">
    <div className="volunteer-form-header">
      <h2>🤝 Partner With Us</h2>
      <p>Complete the form below to explore partnership opportunities with the Diocese of Malakal.</p>
      <p className="form-required-note"><span className="required-star">*</span> Required fields</p>
    </div>
    
    <form onSubmit={handlePartnerSubmit} className="volunteer-form" noValidate>
      <div className="form-row">
        <div className="form-group">
          <label>Organization Name <span className="required-star">*</span></label>
          <input
            type="text"
            name="organizationName"
            value={partnerData.organizationName}
            onChange={handlePartnerChange}
            placeholder="Enter your organization name"
            required
          />
        </div>

        <div className="form-group">
          <label>Contact Person <span className="required-star">*</span></label>
          <input
            type="text"
            name="contactPerson"
            value={partnerData.contactPerson}
            onChange={handlePartnerChange}
            placeholder="Full name of contact person"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Email Address <span className="required-star">*</span></label>
          <input
            type="email"
            name="email"
            value={partnerData.email}
            onChange={handlePartnerChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number <span className="required-star">*</span></label>
          <input
            type="tel"
            name="phone"
            value={partnerData.phone}
            onChange={handlePartnerChange}
            placeholder="+211 912 345 678"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={partnerData.country}
            onChange={handlePartnerChange}
            placeholder="Your country"
          />
        </div>

        <div className="form-group">
          <label>Organization Type <span className="required-star">*</span></label>
          <select
            name="organizationType"
            value={partnerData.organizationType}
            onChange={handlePartnerChange}
            required
          >
            <option value="">Select organization type</option>
            {organizationTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Area of Partnership Interest <span className="required-star">*</span></label>
        <select
          name="partnershipInterest"
          value={partnerData.partnershipInterest}
          onChange={handlePartnerChange}
          required
        >
          <option value="">Select area of interest</option>
          {partnershipInterests.map(interest => (
            <option key={interest} value={interest}>{interest}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Message / Proposal <span className="required-star">*</span></label>
        <textarea
          name="message"
          value={partnerData.message}
          onChange={handlePartnerChange}
          placeholder="Tell us about your organization and how you would like to partner with us..."
          rows="5"
          required
        />
      </div>

      <button 
        type="submit" 
        className="volunteer-submit-btn partner-submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="spinner"></span>
            Submitting...
          </>
        ) : (
          '🤝 Submit Partnership Request'
        )}
      </button>
    </form>
  </div>
)}

        
      </div>
    </div>
  );
};

export default GetInvolved;