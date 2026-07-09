"use client";

import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import AdminLayout from '../layouts/AdminLayout.jsx';
import AdminLogin from '../pages/AdminLogin.jsx';
import AdminDashboard from '../pages/AdminDashboard.jsx';
import AdminNews from '../pages/AdminNews.jsx';
import AdminEvents from '../pages/AdminEvents.jsx';
import AdminGallery from '../pages/AdminGallery.jsx';
import AdminStaff from '../pages/AdminStaff.jsx';
import AdminMessages from '../pages/AdminMessages.jsx';
import AdminSettings from '../pages/AdminSettings.jsx';

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />
      <Route path="" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="news" element={<AdminNews />} />
        <Route path="events" element={<AdminEvents />} />
        <Route path="gallery" element={<AdminGallery />} />
        <Route path="staff" element={<AdminStaff />} />
        <Route path="messages" element={<AdminMessages />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
}