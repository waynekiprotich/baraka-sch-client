"use client";

import { useAuth } from '../context/AuthContext.jsx';

export default function AdminSettings() {
  const { user } = useAuth();
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
      <button className="btn btn-primary">Save Changes</button>
    </div>
  );
}