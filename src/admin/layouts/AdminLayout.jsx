"use client";

import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar.jsx';
import AdminTopbar from '../components/AdminTopbar.jsx';

export default function AdminLayout() {
  return (
    <div className="admin-shell">
      <AdminSidebar />
      <div className="admin-main">
        <AdminTopbar />
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}