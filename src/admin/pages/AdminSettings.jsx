"use client";

import { useAuth } from '../context/AuthContext.jsx';
import { useState } from 'react';

export default function AdminSettings() {
  const { user, login, logout } = useAuth();
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    // In real app, this would update backend settings
  };

  return (
    <div className="card" style={{ maxWidth: '560px' }}>
      <h3 style={{ marginBottom: '20px' }}>Settings</h3>
      <div className="field full" style={{ marginBottom: '16px' }}>
        <label>Admin Email</label>
        <input type="email" defaultValue={user?.email} />
      </div>
      <div className="field full" style={{ marginBottom: '20px' }}>
        <label>School Name</label>
        <input type="text" defaultValue="Baraka School Kapsabet" />
      </div>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <button 
          className="btn btn-secondary" 
          onClick={toggleTheme} 
          style={{ marginRight: '8px' }}
        >
          {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
        </button>
        <button className="btn btn-primary">Save Changes</button>
      </div>
    </div>
  );
}