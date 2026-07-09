"use client";

import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar.jsx';
import AdminTopbar from '../components/AdminTopbar.jsx';

export default function AdminLayout() {
  return (
    <div className="dash-shell" style={{ minHeight: '100vh', borderRadius: 0 }}>
      <AdminSidebar />
      <div className="dash-main" style={{ width: '100%' }}>
        <AdminTopbar />
        <Outlet />
      </div>
    </div>
  );
}