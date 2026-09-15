// src/admin/adminApi.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const adminApi = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// 🔐 Attach token to every request
adminApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 🚪 On 401, clear token and redirect to login
adminApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('adminToken');
      if (window.location.pathname.startsWith('/admin') &&
          window.location.pathname !== '/admin/login') {
        window.location.href = '/admin/login';
      }
    }
    return Promise.reject(error);
  }
);

// ============ AUTH ============
export const adminLogin = async (password) => {
  const res = await adminApi.post('/admin/login', { password });
  if (res.data?.token) {
    localStorage.setItem('adminToken', res.data.token);
  }
  return res.data;
};

export const adminLogout = () => {
  localStorage.removeItem('adminToken');
};

export const isAdminLoggedIn = () => {
  return !!localStorage.getItem('adminToken');
};

// ============ DASHBOARD STATS ============
export const getDashboardStats = async () => {
  const res = await adminApi.get('/admin/stats');
  return res.data;
};

// ============ CONTACTS ============
export const getContacts = async (params = {}) => {
  const res = await adminApi.get('/contacts', { params });
  return res.data;
};

export const getContactById = async (id) => {
  const res = await adminApi.get(`/contacts/${id}`);
  return res.data;
};

export const updateContact = async (id, updates) => {
  const res = await adminApi.put(`/contacts/${id}`, updates);
  return res.data;
};

export const deleteContact = async (id) => {
  const res = await adminApi.delete(`/contacts/${id}`);
  return res.data;
};

export const exportContactsCSV = async () => {
  const res = await adminApi.get('/contacts/export/csv');
  return res.data;
};

// ============ DONATIONS ============
export const getDonations = async (params = {}) => {
  const res = await adminApi.get('/donations', { params });
  return res.data;
};

// ============ PARTNERSHIPS ============
export const getPartnerships = async () => {
  const res = await adminApi.get('/partnerships');
  return res.data;
};

// ============ VOLUNTEERS ============
export const getVolunteers = async () => {
  const res = await adminApi.get('/volunteers');
  return res.data;
};

export const getVolunteerById = async (id) => {
  const res = await adminApi.get(`/volunteers/${id}`);
  return res.data;
};

export const updateVolunteer = async (id, updates) => {
  const res = await adminApi.put(`/volunteers/${id}`, updates);
  return res.data;
};

export const deleteVolunteer = async (id) => {
  const res = await adminApi.delete(`/volunteers/${id}`);
  return res.data;
};

export const exportVolunteersCSV = async () => {
  const res = await adminApi.get('/volunteers/export/csv');
  return res.data;
};

export default adminApi;