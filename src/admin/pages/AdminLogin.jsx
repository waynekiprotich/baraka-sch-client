"use client";

import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import SEO from '../../components/SEO.jsx';

export default function AdminLogin() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (isAuthenticated) return <Navigate to="/admin/dashboard" replace />;

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate('/admin/dashboard', { replace: true });
  };

  return (
    <>
      <SEO title="Admin Login" description="Admin login for Baraka School Kapsabet" />
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(150deg, var(--purple-dark), var(--purple))', padding: '24px' }}>
        <form onSubmit={handleSubmit} className="card-form" style={{ maxWidth: '420px', width: '100%', background: 'var(--white)' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h1 style={{ fontSize: '1.8rem', color: 'var(--purple)' }}>Baraka Admin</h1>
            <p style={{ color: 'var(--ink-60)', fontSize: '.9rem' }}>Sign in to manage content</p>
          </div>
          <div className="field full" style={{ marginBottom: '16px' }}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required placeholder="admin@baraka.school" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="field full" style={{ marginBottom: '20px' }}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" required placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          <p style={{ textAlign: 'center', marginTop: '14px', fontSize: '.8rem', color: 'var(--ink-40)' }}>Demo mode: any credentials are accepted</p>
        </form>
      </div>
    </>
  );
}