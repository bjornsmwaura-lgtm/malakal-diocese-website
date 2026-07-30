import axios from 'axios';

// Vite uses import.meta.env
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Contact form submission
export const submitContactForm = async (formData) => {
  try {
    // ✅ Using '/contacts' (plural) to match backend
    const response = await api.post('/contacts', formData);
    return response.data;
  } catch (error) {
    console.error('Contact submission error:', error);
    if (error.response) {
      // The request was made and the server responded with a status code
      throw error.response.data;
    } else if (error.request) {
      // The request was made but no response was received
      throw { message: 'Network error. Please check your connection.' };
    } else {
      // Something happened in setting up the request
      throw { message: error.message || 'An error occurred. Please try again.' };
    }
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
    console.error('Newsletter subscription error:', error);
    throw error.response?.data || { message: 'Subscription failed. Please try again.' };
  }
};

// Donation submission
export const submitDonation = async (donationData) => {
  try {
    console.log('Sending donation data:', donationData); // ✅ Add this for debugging
    const response = await api.post('/donations', donationData);
    console.log('Donation response:', response.data); // ✅ Add this for debugging
    return response.data;
  } catch (error) {
    console.error('Donation submission error:', error);
    throw error.response?.data || { message: 'Donation failed. Please try again.' };
  }
};

// Verify ReCAPTCHA
export const verifyRecaptcha = async (token) => {
  try {
    const response = await api.post('/verify-recaptcha', { token });
    return response.data;
  } catch (error) {
    console.error('ReCAPTCHA verification error:', error);
    throw error.response?.data || { message: 'Verification failed. Please try again.' };
  }
};

// Get all contacts (for admin)
export const getContacts = async (params = {}) => {
  try {
    const response = await api.get('/contacts', { params });
    return response.data;
  } catch (error) {
    console.error('Get contacts error:', error);
    throw error.response?.data || { message: 'Failed to fetch contacts.' };
  }
};

// Get all donations (for admin)
export const getDonations = async (params = {}) => {
  try {
    const response = await api.get('/donations', { params });
    return response.data;
  } catch (error) {
    console.error('Get donations error:', error);
    throw error.response?.data || { message: 'Failed to fetch donations.' };
  }
};

// Get stats (for admin)
export const getStats = async () => {
  try {
    const [contactsStats, donationsStats] = await Promise.all([
      api.get('/contacts/stats/summary'),
      api.get('/donations/stats/summary')
    ]);
    return {
      contacts: contactsStats.data.data,
      donations: donationsStats.data.data
    };
  } catch (error) {
    console.error('Get stats error:', error);
    throw error.response?.data || { message: 'Failed to fetch stats.' };
  }
};

// Export contacts to CSV
export const exportContactsCSV = async () => {
  try {
    const response = await api.get('/contacts/export/csv');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Export failed.' };
  }
};

// Export donations to CSV
export const exportDonationsCSV = async () => {
  try {
    const response = await api.get('/donations/export/csv');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Export failed.' };
  }
};

export default api;