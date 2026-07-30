// Real-time validation with API integration
export const validateField = async (field, value, existingData = {}) => {
  const errors = {};

  // Email validation with API check
  if (field === 'email' || field === 'all') {
    const emailValue = field === 'all' ? existingData.email : value;
    if (!emailValue) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      errors.email = 'Please enter a valid email address';
    } else {
      // Check if email exists in database (optional)
      try {
        const response = await fetch('/api/check-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: emailValue }),
        });
        const data = await response.json();
        if (data.exists) {
          errors.email = 'This email is already registered';
        }
      } catch (error) {
        // Silent fail - don't block form submission
        console.log('Email check failed:', error);
      }
    }
  }

  // Phone validation
  if (field === 'phone' || field === 'all') {
    const phoneValue = field === 'all' ? existingData.phone : value;
    if (phoneValue && !/^[\+\d\s\-\(\)]{10,}$/.test(phoneValue.replace(/\s/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }
  }

  // Full name validation
  if (field === 'fullName' || field === 'all') {
    const nameValue = field === 'all' ? existingData.fullName : value;
    if (!nameValue) {
      errors.fullName = 'Full name is required';
    } else if (nameValue.length < 2) {
      errors.fullName = 'Name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s\-\.']+$/.test(nameValue)) {
      errors.fullName = 'Name contains invalid characters';
    }
  }

  // Subject validation
  if (field === 'subject' || field === 'all') {
    const subjectValue = field === 'all' ? existingData.subject : value;
    if (!subjectValue) {
      errors.subject = 'Subject is required';
    } else if (subjectValue.length < 3) {
      errors.subject = 'Subject must be at least 3 characters';
    }
  }

  // Message validation
  if (field === 'message' || field === 'all') {
    const messageValue = field === 'all' ? existingData.message : value;
    if (!messageValue) {
      errors.message = 'Message is required';
    } else if (messageValue.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    } else if (messageValue.length > 2000) {
      errors.message = 'Message must be less than 2000 characters';
    }
  }

  // Consent validation
  if (field === 'consent' || field === 'all') {
    const consentValue = field === 'all' ? existingData.consent : value;
    if (!consentValue) {
      errors.consent = 'You must consent to storing your information';
    }
  }

  return errors;
};

// Validate entire form
export const validateForm = async (formData) => {
  const errors = await validateField('all', null, formData);
  return errors;
};

// Get field validation status
export const getFieldStatus = (field, value, errors) => {
  if (!value && !errors[field]) return 'idle';
  if (errors[field]) return 'error';
  if (value) return 'success';
  return 'idle';
};