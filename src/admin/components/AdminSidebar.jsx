"use client";

import { NavLink } from 'react-router-dom';

const LINKS = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: '▦' },
  { to: '/admin/news', label: 'News', icon: '📰' },
  { to: '/admin/events', label: 'Events', icon: '📅' },
  { to: '/admin/gallery', label: 'Gallery', icon: '🖼️' },
  { to: '/admin/staff', label: 'Staff', icon: '👥' },
  { to: '/admin/messages', label: 'Messages', icon: '✉️' },
  { to: '/admin/settings', label: 'Settings', icon: '⚙️' },
];

export default function AdminSidebar() {
  return (
    <aside className="dash-side">
      <div className="who">
        <div className="avatar"></div>
        <div>
          <strong style={{ display: 'block', color: '#fff' }}>Baraka School</strong>
          <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.6)' }}>Admin Panel</span>
        </div>
      </div>
      <nav className="dash-nav">
        {LINKS.map((l) => (
          <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'active' : '')}>
            <span>{l.icon}</span> {l.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}