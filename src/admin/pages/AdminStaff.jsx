"use client";

import { staffMock } from '../mock/data.js';

export default function AdminStaff() {
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Staff Members</h3>
        <button className="btn btn-primary btn-sm">Add Staff</button>
      </div>
      <table className="dash-table">
        <thead><tr><th>Name</th><th>Role</th><th>Department</th></tr></thead>
        <tbody>
          {staffMock.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td><td>{s.role}</td><td>{s.dept}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}