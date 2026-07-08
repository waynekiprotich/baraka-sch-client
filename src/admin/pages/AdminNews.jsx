"use client";

import { newsMock } from '../mock/data.js';

export default function AdminNews() {
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>News Articles</h3>
        <button className="btn btn-primary btn-sm">Add Article</button>
      </div>
      <table className="dash-table">
        <thead><tr><th>Title</th><th>Tag</th><th>Date</th><th>Status</th></tr></thead>
        <tbody>
          {newsMock.map((n) => (
            <tr key={n.id}>
              <td>{n.title}</td><td>{n.tag}</td><td>{n.date}</td>
              <td><span className={`pill-status ${n.status === 'Published' ? 'ok' : 'due'}`}>{n.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}