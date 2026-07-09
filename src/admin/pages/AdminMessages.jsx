"use client";

import { messagesMock } from '../mock/data.js';
import { useState } from 'react';

export default function AdminMessages() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [filteredMessages, setFilteredMessages] = useState(messagesMock);

  const handleStatusFilter = (e) => {
    setFilterStatus(e.target.value);
    setFilteredMessages(messagesMock.filter(m => 
      m.status === e.target.value || filterStatus === 'all'
    ));
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Contact Messages</h3>
        <button className="btn btn-primary btn-sm">Mark as Read</button>
        <select 
          value={filterStatus} 
          onChange={handleStatusFilter} 
          style={{ marginLeft: '12px' }}
        >
          <option value="all">All Messages</option>
          <option value="unread">Unread</option>
          <option value="read">Read</option>
        </select>
      </div>
      <table className="dash-table">
        <thead><tr><th>Name</th><th>Email</th><th>Subject</th><th>Date</th><th>Status</th></tr></thead>
        <tbody>
          {filteredMessages.map((m) => (
            <tr key={m.id}>
              <td>{m.name}</td><td>{m.email}</td><td>{m.subject}</td><td>{m.date}</td>
              <td><span className={`pill-status ${m.status}`}>{m.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}