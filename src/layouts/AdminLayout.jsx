// src/layouts/AdminLayout.jsx
import React from 'react';
import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom';
import { adminLogout } from '../admin/adminApi';
import '../admin/admin.css';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Log out of admin panel?')) {
      adminLogout();
      navigate('/admin/login', { replace: true });
    }
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <img src="/images/logo1.jpeg" alt="Diocese" />
          <div>
            <h2>Diocese Admin</h2>
            <p>Malakal · South Sudan</p>
          </div>
        </div>

        <nav className="admin-nav">
          <NavLink to="/admin" end className="admin-nav-link">
            📊 Dashboard
          </NavLink>

          <NavLink to="/admin/contacts" className="admin-nav-link">
            📩 Contacts
          </NavLink>

          <NavLink to="/admin/volunteers" className="admin-nav-link">
            🙋 Volunteers
          </NavLink>

          <NavLink to="/admin/donations" className="admin-nav-link">
            💰 Donations
          </NavLink>

          <NavLink to="/admin/partnerships" className="admin-nav-link">
            🤝 Partnerships
          </NavLink>
        </nav>

        <div className="admin-sidebar-footer">
          <Link to="/" className="admin-nav-link">
            🌐 View Website
          </Link>
          <button onClick={handleLogout} className="admin-logout-btn">
            🚪 Log Out
          </button>
        </div>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;