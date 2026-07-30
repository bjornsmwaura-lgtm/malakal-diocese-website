import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, faUsers, faDollarSign, 
  faEye, faReply, faArchive, faTrash,
  faSpinner, faDownload, faCheckCircle,
  faTimesCircle, faClock, faCalendar
} from '@fortawesome/free-solid-svg-icons';
import api from '../services/api';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [donations, setDonations] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('contacts');
  const [selectedContact, setSelectedContact] = useState(null);
  const [replyMessage, setReplyMessage] = useState('');
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const contactsUrl = filterStatus === 'all' 
        ? '/contacts?limit=100' 
        : `/contacts?status=${filterStatus}&limit=100`;
      
      const [contactsRes, donationsRes] = await Promise.all([
        api.get(contactsUrl),
        api.get('/donations?limit=100')
      ]);
      
      setContacts(contactsRes.data.data || []);
      setDonations(donationsRes.data.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Make sure all functions are properly defined
  const exportToCSV = (data, filename) => {
    if (!data || data.length === 0) {
      alert('No data to export');
      return;
    }

    const headers = Object.keys(data[0]);
    const csvContent = [
      headers.join(','),
      ...data.map(row => headers.map(h => JSON.stringify(row[h] || '')).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const updateContactStatus = async (id, status) => {
    try {
      await api.put(`/contacts/${id}`, { status });
      fetchData();
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;
    try {
      await api.delete(`/contacts/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleReply = async (id) => {
    try {
      await api.put(`/contacts/${id}`, { 
        status: 'replied',
        responseMessage: replyMessage 
      });
      setShowReplyModal(false);
      setReplyMessage('');
      fetchData();
    } catch (error) {
      console.error('Error sending reply:', error);
    }
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <FontAwesomeIcon icon={faSpinner} spin />
        <p>Loading dashboard...</p>
      </div>
    );
  }

  // ✅ This is the main return statement - it should be here
  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>📊 Admin Dashboard</h1>
        <div className="admin-actions">
          <button 
            className="btn-export"
            onClick={() => exportToCSV(activeTab === 'contacts' ? contacts : donations, activeTab)}
          >
            <FontAwesomeIcon icon={faDownload} /> Export CSV
          </button>
          <button className="btn-refresh" onClick={fetchData}>
            Refresh
          </button>
        </div>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
          <div className="stat-info">
            <h3>{contacts.length}</h3>
            <p>Total Contacts</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><FontAwesomeIcon icon={faDollarSign} /></div>
          <div className="stat-info">
            <h3>
              ${donations
                .filter(d => d.status === 'completed')
                .reduce((sum, d) => sum + (d.amount || 0), 0)
                .toFixed(2)}
            </h3>
            <p>Total Donations</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><FontAwesomeIcon icon={faClock} /></div>
          <div className="stat-info">
            <h3>{contacts.filter(c => c.status === 'pending').length}</h3>
            <p>Pending Replies</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
          <div className="stat-info">
            <h3>{contacts.filter(c => c.status === 'replied').length}</h3>
            <p>Replied</p>
          </div>
        </div>
      </div>

      <div className="admin-tabs">
        <button 
          className={`tab-btn ${activeTab === 'contacts' ? 'active' : ''}`}
          onClick={() => setActiveTab('contacts')}
        >
          Contacts ({contacts.length})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'donations' ? 'active' : ''}`}
          onClick={() => setActiveTab('donations')}
        >
          Donations ({donations.length})
        </button>
      </div>

      {activeTab === 'contacts' && (
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(contact => (
                <tr key={contact._id}>
                  <td><strong>{contact.fullName}</strong></td>
                  <td>{contact.email}</td>
                  <td>{contact.subject}</td>
                  <td>
                    <span className={`status-badge ${contact.status}`}>
                      {contact.status}
                    </span>
                  </td>
                  <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'donations' && (
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Donor</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.map(donation => (
                <tr key={donation._id}>
                  <td>{donation.anonymous ? 'Anonymous' : donation.name}</td>
                  <td>{donation.anonymous ? '---' : donation.email}</td>
                  <td><strong>${(donation.amount || 0).toFixed(2)}</strong></td>
                  <td>
                    <span className={`donation-status ${donation.status}`}>
                      {donation.status}
                    </span>
                  </td>
                  <td>{new Date(donation.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;