"use client";

import { NavLink } from 'react-router-dom';
import { 
  LayoutGrid, 
  FileText, 
  Calendar, 
  Image as ImageIcon, 
  Users, 
  MessageSquare, 
  Settings 
} from 'lucide-react';

const LINKS = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutGrid },
  { to: '/admin/news', label: 'News', icon: FileText },
  { to: '/admin/events', label: 'Events', icon: Calendar },
  { to: '/admin/gallery', label: 'Gallery', icon: ImageIcon },
  { to: '/admin/staff', label: 'Staff', icon: Users },
  { to: '/admin/messages', label: 'Messages', icon: MessageSquare },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-brand">
        <div className="admin-avatar"></div>
        <div className="admin-titles">
          <h2>Baraka School</h2>
          <span>Admin Panel</span>
        </div>
      </div>
      
      <nav className="admin-nav">
        {LINKS.map((l) => {
          const Icon = l.icon;
          return (
            <NavLink 
              key={l.to} 
              to={l.to} 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <Icon className="nav-icon" size={18} strokeWidth={2} />
              <span>{l.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}