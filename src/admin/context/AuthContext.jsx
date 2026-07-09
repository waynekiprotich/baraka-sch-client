"use client";

import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

const DEMO_USER = { name: 'Admin User', email: 'admin@baraka.school', role: 'admin' };

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('baraka-admin');
    return stored ? JSON.parse(stored) : null;
  });

  const login = (email, password) => {
    // Mock auth: accept any non-empty credentials for demo phase
    const fakeUser = { ...DEMO_USER, email: email || DEMO_USER.email };
    localStorage.setItem('baraka-admin', JSON.stringify(fakeUser));
    setUser(fakeUser);
    return fakeUser;
  };

  const logout = () => {
    localStorage.removeItem('baraka-admin');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

export default AuthContext;