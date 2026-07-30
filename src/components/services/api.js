import axios from 'axios';

// Vite uses import.meta.env
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Contact form submission
export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/contacts', formData);
    return response.data;
  } catch (error) {
    console.error('Contact submission error:', error);
    throw error.response?.data || { message: 'Network error. Please try again.' };
  }
};

// Newsletter subscription
export const subscribeNewsletter = async (email) => {
  try {
    const response = await api.post('/contacts', {
      fullName: 'Newsletter Subscriber',
      email,
      subject: 'Newsletter Subscription',
      message: 'I would like to subscribe to the newsletter.',
      consent: true,
      newsletterOptIn: true,
      priority: 'normal'
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Subscription failed. Please try again.' };
  }
};

// ✅ Donation submission
export const submitDonation = async (donationData) => {
  try {
    console.log('📤 Sending donation to API:', donationData);
    const response = await api.post('/donations', donationData);
    console.log('✅ API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ API error:', error);
    throw error.response?.data || { message: 'Donation failed. Please try again.' };
  }
};

// Verify ReCAPTCHA
export const verifyRecaptcha = async (token) => {
  try {
    const response = await api.post('/verify-recaptcha', { token });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Verification failed.' };
  }
};

// Get all contacts (for admin)
export const getContacts = async (params = {}) => {
  try {
    const response = await api.get('/contacts', { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch contacts.' };
  }
};

// Get all donations (for admin)
export const getDonations = async (params = {}) => {
  try {
    const response = await api.get('/donations', { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch donations.' };
  }
};

export default api;