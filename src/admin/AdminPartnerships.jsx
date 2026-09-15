// src/admin/AdminPartnerships.jsx
import React, { useEffect, useState } from 'react';
import { getPartnerships } from './adminApi';
import './admin.css';

const AdminPartnerships = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getPartnerships();
        setItems(res.data || []);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to load partnerships');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div className="admin-loading">Loading partnerships...</div>;
  if (error) return <div className="admin-error">{error}</div>;

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <h1>Partnerships</h1>
        <p>{items.length} requests</p>
      </header>

      <div className="admin-section">
        {items.length === 0 ? (
          <div className="admin-empty">No partnership requests yet.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Organization</th>
                <th>Type</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {items.map((p) => (
                <tr key={p._id}>
                  <td>{p.fullName || p.name}</td>
                  <td>{p.email}</td>
                  <td>{p.organization || p.organisation || '—'}</td>
                  <td>{p.partnershipType || p.type || '—'}</td>
                  <td>{new Date(p.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminPartnerships;