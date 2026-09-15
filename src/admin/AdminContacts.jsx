// src/admin/AdminContacts.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getContacts, exportContactsCSV } from './adminApi';
import { downloadCSV } from './csvHelper';
import './admin.css';

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const params = {};
        if (statusFilter) params.status = statusFilter;
        const res = await getContacts(params);
        setContacts(res.data || []);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to load contacts');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [statusFilter]);

  // Client-side filters
  const filtered = contacts.filter((c) => {
    if (priorityFilter && c.priority !== priorityFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        c.fullName?.toLowerCase().includes(q) ||
        c.email?.toLowerCase().includes(q) ||
        c.subject?.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <h1>Contacts</h1>
        <p>{filtered.length} submission{filtered.length !== 1 ? 's' : ''}</p>
      </header>

      {/* Filters */}
      <div className="admin-filters">
        <input
          type="text"
          placeholder="🔍 Search by name, email or subject..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="admin-filter-input"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="admin-filter-select"
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="read">Read</option>
          <option value="replied">Replied</option>
          <option value="archived">Archived</option>
        </select>

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="admin-filter-select"
        >
          <option value="">All Priorities</option>
          <option value="normal">Normal</option>
          <option value="urgent">Urgent</option>
          <option value="prayer-request">Prayer Request</option>
          <option value="donations">Donations</option>
          <option value="confidential">Confidential</option>
        </select>
      </div>

      {/* Table */}
      <div className="admin-section">
        {loading ? (
          <div className="admin-loading">Loading contacts...</div>
        ) : error ? (
          <div className="admin-error">{error}</div>
        ) : filtered.length === 0 ? (
          <div className="admin-empty">No contacts match your filters.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c._id}>
                  <td>{c.fullName}</td>
                  <td>{c.email}</td>
                  <td>{c.subject}</td>
                  <td>
                    <span className={`badge badge-${c.priority}`}>
                      {c.priority}
                    </span>
                  </td>
                  <td>
                    <span className={`badge badge-status-${c.status}`}>
                      {c.status}
                    </span>
                  </td>
                  <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                  <td>
                    <Link to={`/admin/contacts/${c._id}`} className="admin-link">
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminContacts;