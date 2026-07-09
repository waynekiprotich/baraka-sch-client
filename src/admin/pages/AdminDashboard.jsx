"use client";

import { newsMock, eventsMock, messagesMock, galleryMock } from '../mock/data.js';

export default function AdminDashboard() {
  const stats = [
    { n: newsMock.length, label: 'News Articles' },
    { n: eventsMock.length, label: 'Events' },
    { n: galleryMock.length, label: 'Gallery Items' },
    { n: messagesMock.length, label: 'Messages' },
  ];

  return (
    <div>
      <div className="dash-cards">
        {stats.map((s) => (
          <div className="dash-card" key={s.label}>
            <div className="n">{s.n}</div>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
      <div className="card">
        <h3 style={{ marginBottom: '16px' }}>Recent Messages</h3>
        <table className="dash-table">
          <thead><tr><th>Name</th><th>Subject</th><th>Date</th><th>Status</th></tr></thead>
          <tbody>
            {messagesMock.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td><td>{m.subject}</td><td>{m.date}</td>
                <td><span className={`pill-status ${m.status === 'unread' ? 'due' : 'ok'}`}>{m.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}