import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, faPhone, faLocationDot, faClock, 
  faPaperPlane, faCheckCircle, faTimesCircle, 
  faSpinner, faCross, faChurch, faUser, faTag,
  faFlag, faComment, faShieldAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, faTwitter, faLinkedin, faInstagram, faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';
import { submitContactForm, subscribeNewsletter } from '../api';
import NewsletterSignup from '../components/ui/NewsletterSignup';

const ContactForm = () => {
  const navigate = useNavigate();
  const recaptchaRef = useRef(null);
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    parish: "",
    subject: "",
    priority: "normal",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);
  const [messageTitle, setMessageTitle] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [messageExtra, setMessageExtra] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [recaptchaError, setRecaptchaError] = useState('');
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);

  const messageContainerRef = useRef(null);

  // Validators
  const validators = {
    fullName: (value) => {
      if (!value.trim()) return "Full name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      if (!/^[a-zA-Z\s\-\.']+$/.test(value.trim())) return "Name contains invalid characters";
      return "";
    },
    email: (value) => {
      if (!value.trim()) return "Email address is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Please enter a valid email address";
      return "";
    },
    phone: (value) => {
      if (value && !/^[\+\d\s\-\(\)]{10,}$/.test(value.replace(/\s/g, ""))) {
        return "Please enter a valid phone number";
      }
      return "";
    },
    subject: (value) => {
      if (!value.trim()) return "Subject is required";
      if (value.trim().length < 3) return "Subject must be at least 3 characters";
      return "";
    },
    message: (value) => {
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 10) return "Message must be at least 10 characters";
      if (value.trim().length > 2000) return "Message must be less than 2000 characters";
      return "";
    },
    consent: (checked) => {
      if (!checked) return "You must consent to storing your information";
      return "";
    },
  };

  const validateField = (fieldName, value) => {
    const error = validators[fieldName] ? validators[fieldName](value) : "";
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
    return !error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: val }));
    validateField(name, val);

    if (name === "message") {
      setCharCount(value.length);
    }
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = (fieldName, value) => {
    setFocusedField(null);
    validateField(fieldName, value);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    Object.keys(validators).forEach((key) => {
      const value = formData[key];
      const error = validators[key](value);
      newErrors[key] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  };

  const showMessage = (type, title, content, extra = "") => {
    setMessageStatus(type);
    setMessageTitle(title);
    setMessageContent(content);
    setMessageExtra(extra);

    setTimeout(() => {
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to clear all fields?")) {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        parish: "",
        subject: "",
        priority: "normal",
        message: "",
        consent: false,
      });
      setCharCount(0);
      setErrors({});
      setMessageStatus(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    }
  };

  const getCharCountClass = () => {
    if (charCount > 2000) return "danger";
    if (charCount > 1600) return "limit";
    return "";
  };

  // ✅ THIS IS THE FIXED HANDLE SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageStatus(null);

    // Validate form
    if (!validateForm()) {
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // Check ReCAPTCHA
    try {
      const token = recaptchaRef.current.getValue();
      if (!token) {
        setRecaptchaError('Please complete the reCAPTCHA verification');
        return;
      }
      setRecaptchaError('');
    } catch (error) {
      setRecaptchaError('Please complete the reCAPTCHA verification');
      return;
    }

    setIsSubmitting(true);

    try {
      // ✅ This is the line that was giving the error
      const response = await submitContactForm(formData);
      
      // If newsletter opt-in, subscribe
      if (newsletterOptIn && formData.email) {
        try {
          await subscribeNewsletter(formData.email);
        } catch (error) {
          console.log('Newsletter subscription failed:', error);
        }
      }

      // Navigate to thank you page
      navigate('/thank-you', { 
        state: { 
          message: response.message || 'Your message has been sent successfully!',
          type: 'contact'
        }
      });
    } catch (error) {
      setMessageStatus('error');
      setMessageTitle('Something went wrong');
      setMessageContent(error.message || 'Please try again or contact us directly.');
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-panel">
      <div className="form-header">
        <div className="header-icon">
          <FontAwesomeIcon icon={faCross} />
        </div>
        <h1>Catholic Diocese of Malakal</h1>
        <p>Reach out with your prayer requests, questions, donations or feedback</p>
        <span className="diocese-badge">
          <FontAwesomeIcon icon={faChurch} /> Contact Us
        </span>
      </div>

      <div ref={messageContainerRef}>
        {messageStatus && (
          <div className={`message-box ${messageStatus}`}>
            <div className="icon">
              {messageStatus === "success" ? (
                <FontAwesomeIcon icon={faCheckCircle} />
              ) : (
                <FontAwesomeIcon icon={faTimesCircle} />
              )}
            </div>
            <div>
              <h3>{messageTitle}</h3>
              <p>{messageContent}</p>
              {messageExtra && <p className="blessing">{messageExtra}</p>}
              {messageStatus === "error" && (
                <button className="btn-try-again" onClick={() => window.location.reload()}>
                  <FontAwesomeIcon icon={faSpinner} spin /> Try Again
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName">
              <FontAwesomeIcon icon={faUser} /> Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="e.g., John D. Malual"
              value={formData.fullName}
              onChange={handleChange}
              onFocus={() => handleFocus('fullName')}
              onBlur={(e) => handleBlur('fullName', e.target.value)}
              className={`${errors.fullName ? "error" : ""} ${focusedField === 'fullName' ? "focused" : ""}`}
              required
            />
            {errors.fullName && <div className="error-message">{errors.fullName}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} /> Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={(e) => handleBlur('email', e.target.value)}
              className={`${errors.email ? "error" : ""} ${focusedField === 'email' ? "focused" : ""}`}
              required
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">
              <FontAwesomeIcon icon={faPhone} /> Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+211 123 456 789"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => handleFocus('phone')}
              onBlur={(e) => handleBlur('phone', e.target.value)}
              className={`${errors.phone ? "error" : ""} ${focusedField === 'phone' ? "focused" : ""}`}
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="parish">
              <FontAwesomeIcon icon={faChurch} /> Your Parish
            </label>
            <select 
              id="parish" 
              name="parish" 
              value={formData.parish} 
              onChange={handleChange}
              className={focusedField === 'parish' ? "focused" : ""}
              onFocus={() => handleFocus('parish')}
              onBlur={() => handleFocus(null)}
            >
              <option value="">Select your parish</option>
              <option value="cathedral">Cathedral of Our Lady of Hope</option>
              <option value="st-joseph">St. Joseph Parish</option>
              <option value="st-mary">St. Mary Parish</option>
              <option value="sacred-heart">Sacred Heart Parish</option>
              <option value="st-peter">St. Peter Parish</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="subject">
            <FontAwesomeIcon icon={faTag} /> Subject <span className="required">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Brief subject of your message"
            value={formData.subject}
            onChange={handleChange}
            onFocus={() => handleFocus('subject')}
            onBlur={(e) => handleBlur('subject', e.target.value)}
            className={`${errors.subject ? "error" : ""} ${focusedField === 'subject' ? "focused" : ""}`}
            required
          />
          {errors.subject && <div className="error-message">{errors.subject}</div>}
        </div>

        <div className="form-group full-width">
          <label htmlFor="priority">
            <FontAwesomeIcon icon={faFlag} /> Priority Level
          </label>
          <select 
            id="priority" 
            name="priority" 
            value={formData.priority} 
            onChange={handleChange}
            className={focusedField === 'priority' ? "focused" : ""}
            onFocus={() => handleFocus('priority')}
            onBlur={() => handleFocus(null)}
          >
            <option value="normal">Normal</option>
            <option value="urgent">Urgent</option>
            <option value="prayer-request">Prayer Request</option>
            <option value="donations">Donations</option>
            <option value="confidential">Confidential</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label htmlFor="message">
            <FontAwesomeIcon icon={faComment} /> Message <span className="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => handleFocus('message')}
            onBlur={(e) => handleBlur('message', e.target.value)}
            className={`${errors.message ? "error" : ""} ${focusedField === 'message' ? "focused" : ""}`}
            required
          />
          <div className={`char-count ${getCharCountClass()}`}>
            <FontAwesomeIcon icon={faComment} /> {charCount} characters
            {charCount > 2000 && " (exceeds 2000 limit)"}
          </div>
          {errors.message && <div className="error-message">{errors.message}</div>}
        </div>

        {/* Consent */}
        <div className="form-group full-width">
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className={errors.consent ? "error" : ""}
              required
            />
            <label htmlFor="consent">
              I consent to the Catholic Diocese of Malakal storing my information for the purpose of responding to my enquiry.
              <span className="required">*</span>
            </label>
          </div>
          {errors.consent && <div className="error-message">{errors.consent}</div>}
        </div>

        {/* Newsletter Opt-in */}
        <div className="form-group full-width">
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={newsletterOptIn}
              onChange={(e) => setNewsletterOptIn(e.target.checked)}
            />
            <label htmlFor="newsletter">
              <FontAwesomeIcon icon={faEnvelope} /> Subscribe to our newsletter for updates and prayer requests
            </label>
          </div>
        </div>

        {/* ReCAPTCHA */}
        <div className="form-group full-width">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaSiteKey}
            onChange={(token) => {
              setRecaptchaToken(token);
              setRecaptchaError('');
            }}
            onExpired={() => {
              setRecaptchaToken(null);
              setRecaptchaError('reCAPTCHA expired. Please verify again.');
            }}
          />
          {recaptchaError && <div className="error-message">{recaptchaError}</div>}
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <><FontAwesomeIcon icon={faSpinner} spin /> Sending...</>
            ) : (
              <><FontAwesomeIcon icon={faPaperPlane} /> Send Message</>
            )}
          </button>
          <button type="button" className="btn btn-reset" onClick={handleReset}>
            Clear All
          </button>
        </div>

        <div className="form-footer">
          <span className="required">*</span> Required fields
        </div>
      </form>
    </div>
  );
};

// Contact Component
function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.contact-section, .contact-form-panel').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="contact-page">
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>

        <div className="contact-container">
          {/* Contact Info Card */}
          <div className="contact-section contact-info">
            <h2>
              <FontAwesomeIcon icon={faLocationDot} /> Get in Touch
            </h2>
            
            <div className="info-item">
              <span className="icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <div>
                <h4>Postal Address</h4>
                <p>Catholic Diocese of Malakal, P.O. Box 27 Malakal, Upper Nile State. South Sudan</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <div>
                <h4>Phone Number</h4>
                <p>+211 756 278</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <div>
                <h4>Email</h4>
                <p>info@catholicdiocesemalakal.org</p>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">
                <FontAwesomeIcon icon={faClock} />
              </span>
              <div>
                <h4>Working Hours</h4>
                <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                </div>
            </div>

            <div className="social-media">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon facebook">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
                <a href="#" className="social-icon twitter">
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
                <a href="#" className="social-icon linkedin">
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
                <a href="#" className="social-icon instagram">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
                <a href="#" className="social-icon whatsapp">
                  <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map and Contacts Card */}
          <div className="contact-section contact-map">
            <h2>
              <FontAwesomeIcon icon={faLocationDot} /> Find Us
            </h2>
            
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <p><strong>📍 Malakal, Upper Nile State City, South Sudan</strong></p>
                <p>St. Joseph Cathedral Compound, Malakal Town (near the Nile River)</p>
                <a href="#" className="map-link">
                  <FontAwesomeIcon icon={faLocationDot} /> Get Directions
                </a>
              </div>
            </div>

            <div className="more-info">
              <h4>Key Contacts</h4>
              <ul>
                <li><strong>Bishop's Office:</strong> Most Rev. Stephen Nyodho Ador Mojwok</li>
                <li><strong>Vicar General:</strong> Very Rev. Fr. Stephen Ocir</li>
                <li><strong>Vocations Director:</strong> Rev. Fr Charles Kamal</li>
                <li><strong>Education Secretary:</strong> (Name to be confirmed)</li>
                <li><strong>Health Coordinator:</strong> (Name to be confirmed)</li>
                <li><strong>Caritas Coordinator:</strong> Mr. Jokino Othong Odok. Contact:+211 916 693 700</li>
                <li><strong>Peace and Justice Coordinator:</strong>Mr Solana Jeremiah Shuei. Contact:+211 916 287 550</li>
                <li><strong>Radio Director:</strong> Mr. Aban Christopher Chol</li>
                <li><strong>Pastoral Coordinator:</strong> Sr. Piera Mundenare</li>
                <li><strong>Youth Coordinator:</strong> Sr. Elizabeth Kanini</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-wrapper">
          <div className="newsletter-container">
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;