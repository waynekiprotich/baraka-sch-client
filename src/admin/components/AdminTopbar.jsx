"use client";

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function AdminTopbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
      <div>
        <h2 style={{ fontSize: '1.4rem' }}>Welcome, {user?.name || 'Admin'}</h2>
        <p style={{ color: 'var(--ink-60)', fontSize: '.9rem' }}>Manage your school website content</p>
      </div>
      <button className="btn btn-ghost" onClick={handleLogout}>Log Out</button>
    </div>
  );
}