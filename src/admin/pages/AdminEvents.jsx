"use client";

import { eventsMock } from '../mock/data.js';
import { useState } from 'react';

export default function AdminEvents() {
  const [filterDate, setFilterDate] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(eventsMock);

  const handleDateFilter = (e) => {
    setFilterDate(e.target.value);
    setFilteredEvents(eventsMock.filter(e => 
      e.date.includes(e.target.value) || 
      new Date(e.date).toLocaleDateString().includes(e.target.value)
    ));
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Events</h3>
        <button className="btn btn-primary btn-sm">Add Event</button>
        <input 
          type="text" 
          placeholder="Filter by date..." 
          value={filterDate} 
          onChange={handleDateFilter} 
          style={{ marginLeft: '12px' }}
        />
      </div>
      <table className="dash-table">
        <thead><tr><th>Title</th><th>Date</th><th>Location</th><th>Status</th></tr></thead>
        <tbody>
          {filteredEvents.map((e) => (
            <tr key={e.id}>
              <td>{e.title}</td><td>{e.date}</td><td>{e.location}</td><td>{e.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}