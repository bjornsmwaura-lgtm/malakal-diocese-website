// src/admin/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDashboardStats } from './adminApi';
import './admin.css';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getDashboardStats();
        setStats(res.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to load stats');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div className="admin-loading">Loading dashboard...</div>;
  if (error) return <div className="admin-error">{error}</div>;
  if (!stats) return null;

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <h1>Dashboard</h1>
        <p>Overview of all submissions</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Contacts</div>
          <div className="stat-value">{stats.contacts.total}</div>
          <div className="stat-sub">{stats.contacts.pending} pending</div>
        </div>

        <div className="stat-card urgent">
          <div className="stat-label">Urgent</div>
          <div className="stat-value">{stats.contacts.urgent}</div>
          <div className="stat-sub">Needs attention</div>
        </div>

        <div className="stat-card prayer">
          <div className="stat-label">Prayer Requests</div>
          <div className="stat-value">{stats.contacts.prayerRequests}</div>
          <div className="stat-sub">To pray for</div>
        </div>

        <div className="stat-card donations">
          <div className="stat-label">Donations</div>
          <div className="stat-value">${stats.donations.totalAmount.toLocaleString()}</div>
          <div className="stat-sub">{stats.donations.total} gifts</div>
        </div>

        <div className="stat-card partnerships">
          <div className="stat-label">Partnerships</div>
          <div className="stat-value">{stats.partnerships.total}</div>
          <div className="stat-sub">Requests</div>
        </div>
      </div>

      <div className="stat-card volunteers">
  <div className="stat-label">Volunteers</div>
  <div className="stat-value">{stats.volunteers?.total ?? 0}</div>
  <div className="stat-sub">Applications</div>
</div>

      <section className="admin-section">
        <div className="admin-section-header">
          <h2>Recent Contacts</h2>
          <Link to="/admin/contacts" className="admin-link">
            View all →
          </Link>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Priority</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {stats.recentContacts.map((c) => (
              <tr key={c._id}>
                <td>{c.fullName}</td>
                <td>{c.subject}</td>
                <td>
                  <span className={`badge badge-${c.priority}`}>
                    {c.priority}
                  </span>
                </td>
                <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                <td>
                  <Link to={`/admin/contacts/${c._id}`} className="admin-link">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;