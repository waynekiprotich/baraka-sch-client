"use client";

import { eventsMock } from '../mock/data.js';

export default function AdminEvents() {
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Events</h3>
        <button className="btn btn-primary btn-sm">Add Event</button>
      </div>
      <table className="dash-table">
        <thead><tr><th>Title</th><th>Date</th><th>Location</th><th>Status</th></tr></thead>
        <tbody>
          {eventsMock.map((e) => (
            <tr key={e.id}>
              <td>{e.title}</td><td>{e.date}</td><td>{e.location}</td><td>{e.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}