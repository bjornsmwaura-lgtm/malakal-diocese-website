// src/services/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const API = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

// ✅ Add a request interceptor for debugging
API.interceptors.request.use(
  (config) => {
    console.log('📤 API Request:', config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// ✅ Add a response interceptor for debugging
API.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('❌ Response Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Donation APIs
export const donationAPI = {
  create: (data) => API.post('/donations', data),
  getAll: (params) => API.get('/donations', { params }),
  getStats: () => API.get('/donations/stats'),
  getById: (id) => API.get(`/donations/${id}`),
  updateStatus: (id, data) => API.put(`/donations/${id}/status`, data),
};

// ✅ ADD THIS - Volunteer APIs
export const volunteerAPI = {
  create: (data) => API.post('/volunteers', data),
  getAll: (params) => API.get('/volunteers', { params }),
  getStats: () => API.get('/volunteers/stats'),
  getById: (id) => API.get(`/volunteers/${id}`),
  updateStatus: (id, data) => API.put(`/volunteers/${id}/status`, data),
  delete: (id) => API.delete(`/volunteers/${id}`),
};

// ✅ ADD THIS - Partnership APIs (after volunteerAPI)
export const partnershipAPI = {
  create: (data) => API.post('/partnerships', data),
  getAll: (params) => API.get('/partnerships', { params }),
  getStats: () => API.get('/partnerships/stats'),
  getById: (id) => API.get(`/partnerships/${id}`),
  updateStatus: (id, data) => API.put(`/partnerships/${id}/status`, data),
  delete: (id) => API.delete(`/partnerships/${id}`),
};

// Contact APIs
export const contactAPI = {
  create: (data) => API.post('/contacts', data),
  getAll: (params) => API.get('/contacts', { params }),
  getStats: () => API.get('/contacts/stats'),
  getById: (id) => API.get(`/contacts/${id}`),
  updateStatus: (id, data) => API.put(`/contacts/${id}/status`, data),
  delete: (id) => API.delete(`/contacts/${id}`),
};

// News APIs
export const newsAPI = {
  getAll: (params) => API.get('/news', { params }),
  getFeatured: () => API.get('/news/featured'),
  getCategories: () => API.get('/news/categories'),
  getBySlug: (slug) => API.get(`/news/slug/${slug}`),
  getById: (id) => API.get(`/news/${id}`),
  create: (data) => API.post('/news', data),
  update: (id, data) => API.put(`/news/${id}`, data),
  delete: (id) => API.delete(`/news/${id}`),
};

// Announcement APIs
export const announcementAPI = {
  getAll: (params) => API.get('/announcements', { params }),
  getAllAdmin: (params) => API.get('/announcements/admin/all', { params }),
  getById: (id) => API.get(`/announcements/${id}`),
  create: (data) => API.post('/announcements', data),
  update: (id, data) => API.put(`/announcements/${id}`, data),
  toggle: (id) => API.put(`/announcements/${id}/toggle`),
  delete: (id) => API.delete(`/announcements/${id}`),
};

// Auth APIs
export const authAPI = {
  login: (data) => API.post('/auth/login', data),
  register: (data) => API.post('/auth/register', data),
  getMe: () => API.get('/auth/me'),
  updateProfile: (data) => API.put('/auth/update', data),
  logout: () => API.post('/auth/logout'),
};

export default API;