"use client";

import { newsMock } from '../mock/data.js';
import { useState } from 'react';

export default function AdminNews() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNews, setFilteredNews] = useState(newsMock);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setFilteredNews(newsMock.filter(n => 
      n.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
      n.tag.toLowerCase().includes(e.target.value.toLowerCase())
    ));
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>News Articles</h3>
        <button className="btn btn-primary btn-sm">Add Article</button>
        <input 
          type="text" 
          placeholder="Search news..." 
          value={searchQuery} 
          onChange={handleSearch} 
          style={{ marginLeft: '12px' }}
        />
      </div>
      <table className="dash-table">
        <thead><tr><th>Title</th><th>Tag</th><th>Date</th><th>Status</th></tr></thead>
        <tbody>
          {filteredNews.map((n) => (
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