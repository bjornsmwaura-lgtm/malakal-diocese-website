// src/admin/AdminContactDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getContactById, updateContact, deleteContact } from './adminApi';
import './admin.css';

const AdminContactDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [respondedBy, setRespondedBy] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getContactById(id);
        setContact(res.data);
        setStatus(res.data.status);
        setResponseMessage(res.data.responseMessage || '');
        setRespondedBy(res.data.respondedBy || '');
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to load contact');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await updateContact(id, {
        status,
        responseMessage,
        respondedBy,
      });
      setContact(res.data);
      alert('✅ Contact updated successfully');
    } catch (err) {
      alert('❌ ' + (err.response?.data?.error || 'Update failed'));
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Delete this contact permanently?')) return;
    try {
      await deleteContact(id);
      navigate('/admin/contacts');
    } catch (err) {
      alert('❌ ' + (err.response?.data?.error || 'Delete failed'));
    }
  };

  if (loading) return <div className="admin-loading">Loading...</div>;
  if (error) return <div className="admin-error">{error}</div>;
  if (!contact) return null;

  return (
    <div className="admin-page">
      <div className="admin-breadcrumb">
        <Link to="/admin/contacts" className="admin-link">← Back to Contacts</Link>
      </div>

      <header className="admin-page-header">
        <h1>{contact.subject}</h1>
        <p>
          From <strong>{contact.fullName}</strong> · {new Date(contact.createdAt).toLocaleString()}
        </p>
      </header>

      <div className="detail-grid">
        {/* Message card */}
        <div className="admin-section detail-message">
          <h2>Message</h2>
          <p className="detail-body">{contact.message}</p>
        </div>

        {/* Sidebar info */}
        <div className="admin-section detail-info">
          <h2>Details</h2>
          <ul className="detail-list">
            <li><strong>Name:</strong> {contact.fullName}</li>
            <li><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            {contact.phone && <li><strong>Phone:</strong> {contact.phone}</li>}
            {contact.parish && <li><strong>Parish:</strong> {contact.parish}</li>}
            <li>
              <strong>Priority:</strong>{' '}
              <span className={`badge badge-${contact.priority}`}>{contact.priority}</span>
            </li>
            <li>
              <strong>Status:</strong>{' '}
              <span className={`badge badge-status-${contact.status}`}>{contact.status}</span>
            </li>
            <li><strong>Consent:</strong> {contact.consent ? '✅ Yes' : '❌ No'}</li>
            <li><strong>Newsletter:</strong> {contact.newsletterOptIn ? '✅ Subscribed' : '—'}</li>
          </ul>
        </div>
      </div>

      {/* Management card */}
      <div className="admin-section">
        <h2>Manage Response</h2>

        <div className="form-row-2">
          <div>
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="pending">Pending</option>
              <option value="read">Read</option>
              <option value="replied">Replied</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div>
            <label>Responded By</label>
            <input
              type="text"
              placeholder="e.g., Fr. John"
              value={respondedBy}
              onChange={(e) => setRespondedBy(e.target.value)}
            />
          </div>
        </div>

        <label>Internal Note / Response Summary</label>
        <textarea
          rows="4"
          placeholder="Note what was done or said..."
          value={responseMessage}
          onChange={(e) => setResponseMessage(e.target.value)}
        />

        <div className="detail-actions">
          <button
            className="admin-btn admin-btn-primary"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? 'Saving...' : '💾 Save Changes'}
          </button>

          <a
            href={`mailto:${contact.email}?subject=Re: ${encodeURIComponent(contact.subject)}`}
            className="admin-btn admin-btn-secondary"
          >
            ✉️ Reply via Email
          </a>

          <button
            className="admin-btn admin-btn-danger"
            onClick={handleDelete}
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminContactDetail;