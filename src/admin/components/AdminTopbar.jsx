"use client";

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { LogOut } from 'lucide-react';

export default function AdminTopbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <header className="admin-topbar">
      <div className="topbar-welcome">
        <h1>Welcome, {user?.name || 'Admin'}</h1>
        <p>Manage your school website content</p>
      </div>
      
      <button className="btn-logout" onClick={handleLogout}>
        <LogOut size={16} />
        <span>Log Out</span>
      </button>
    </header>
  );
}