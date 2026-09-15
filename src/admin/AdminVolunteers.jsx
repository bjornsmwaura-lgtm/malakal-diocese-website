// src/admin/AdminVolunteers.jsx
import React, { useEffect, useState } from 'react';
import { getVolunteers, deleteVolunteer, updateVolunteer, exportVolunteersCSV } from './adminApi';
import { downloadCSV } from './csvHelper';
import './admin.css';

const AdminVolunteers = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const load = async () => {
    setLoading(true);
    try {
      const res = await getVolunteers();
      setItems(res.data || []);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load volunteers');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this volunteer application permanently?')) return;
    try {
      await deleteVolunteer(id);
      setItems((prev) => prev.filter((v) => v._id !== id));
    } catch (err) {
      alert('❌ ' + (err.response?.data?.message || 'Delete failed'));
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateVolunteer(id, { status });
      setItems((prev) =>
        prev.map((v) => (v._id === id ? { ...v, status } : v))
      );
    } catch (err) {
      alert('❌ ' + (err.response?.data?.message || 'Update failed'));
    }
  };

  const filtered = items.filter((v) => {
    if (statusFilter && (v.status || 'pending') !== statusFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        v.fullName?.toLowerCase().includes(q) ||
        v.email?.toLowerCase().includes(q) ||
        v.phone?.toLowerCase().includes(q) ||
        v.interest?.toLowerCase().includes(q) ||
        v.skills?.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const [exporting, setExporting] = useState(false);

const handleExport = async () => {
  setExporting(true);
  try {
    const res = await exportVolunteersCSV();
    downloadCSV(res.data, 'diocese_volunteers');
  } catch (err) {
    alert('❌ Export failed: ' + (err.response?.data?.message || err.message));
  } finally {
    setExporting(false);
  }
};

  if (loading) return <div className="admin-loading">Loading volunteers...</div>;
  if (error) return <div className="admin-error">{error}</div>;

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <h1>Volunteers</h1>
        <p>{filtered.length} application{filtered.length !== 1 ? 's' : ''}</p>
      </header>
      <header className="admin-page-header">
  <div>
    <h1>Volunteers</h1>
    <p>{filtered.length} application{filtered.length !== 1 ? 's' : ''}</p>
  </div>
  <button
    className="admin-btn admin-btn-primary"
    onClick={handleExport}
    disabled={exporting}
  >
    {exporting ? '⏳ Exporting...' : '📥 Export CSV'}
  </button>
</header>

      <div className="admin-filters">
        <input
          type="text"
          placeholder="🔍 Search by name, email, phone, interest..."
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
          <option value="contacted">Contacted</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div className="admin-section">
        {filtered.length === 0 ? (
          <div className="admin-empty">No volunteer applications yet.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Interest</th>
                <th>Skills</th>
                <th>Availability</th>
                <th>Status</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((v) => (
                <tr key={v._id}>
                  <td>
                    <strong>{v.fullName}</strong>
                    {v.country && <div className="cell-sub">{v.country}</div>}
                  </td>
                  <td>
                    <div>{v.email}</div>
                    {v.phone && <div className="cell-sub">{v.phone}</div>}
                  </td>
                  <td>{v.interest || '—'}</td>
                  <td className="cell-truncate">{v.skills || '—'}</td>
                  <td>{v.availability || '—'}</td>
                  <td>
                    <select
                      value={v.status || 'pending'}
                      onChange={(e) => handleStatusChange(v._id, e.target.value)}
                      className="inline-status-select"
                    >
                      <option value="pending">Pending</option>
                      <option value="contacted">Contacted</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                  <td>{new Date(v.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(v._id)}
                      className="admin-link"
                      style={{
                        color: '#B32B2B',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      Delete
                    </button>
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

export default AdminVolunteers;