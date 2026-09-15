// src/admin/AdminDonations.jsx
import React, { useEffect, useState } from 'react';
import { getDonations } from './adminApi';
import './admin.css';

const AdminDonations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getDonations();
        setDonations(res.data || []);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to load donations');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const total = donations.reduce((s, d) => s + (d.amount || 0), 0);

  if (loading) return <div className="admin-loading">Loading donations...</div>;
  if (error) return <div className="admin-error">{error}</div>;

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <h1>Donations</h1>
        <p>{donations.length} donations · Total: ${total.toLocaleString()}</p>
      </header>

      <div className="admin-section">
        {donations.length === 0 ? (
          <div className="admin-empty">No donations yet.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Anonymous</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((d) => (
                <tr key={d._id}>
                  <td>{d.anonymous ? 'Anonymous' : d.fullName}</td>
                  <td>{d.email}</td>
                  <td><strong>${(d.amount || 0).toFixed(2)} {d.currency}</strong></td>
                  <td>{d.paymentMethod}</td>
                  <td>{d.anonymous ? '✅' : '—'}</td>
                  <td>{new Date(d.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDonations;