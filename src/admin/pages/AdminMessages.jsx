"use client";

import { messagesMock } from '../mock/data.js';

export default function AdminMessages() {
  return (
    <div className="card">
      <h3 style={{ marginBottom: '20px' }}>Contact Messages</h3>
      <table className="dash-table">
        <thead><tr><th>Name</th><th>Email</th><th>Subject</th><th>Date</th><th>Status</th></tr></thead>
        <tbody>
          {messagesMock.map((m) => (
            <tr key={m.id}>
              <td>{m.name}</td><td>{m.email}</td><td>{m.subject}</td><td>{m.date}</td>
              <td><span className={`pill-status ${m.status === 'unread' ? 'due' : 'ok'}`}>{m.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}