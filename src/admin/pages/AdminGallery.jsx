"use client";

import { galleryMock } from '../mock/data.js';
import { useState } from 'react';

export default function AdminGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredGallery, setFilteredGallery] = useState(galleryMock);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setFilteredGallery(galleryMock.filter(g => 
      g.category === e.target.value || selectedCategory === 'all'
    ));
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Gallery Items</h3>
        <button className="btn btn-primary btn-sm">Upload Image</button>
        <select 
          value={selectedCategory} 
          onChange={handleCategoryChange} 
          style={{ marginLeft: '12px' }}
        >
          <option value="all">All Categories</option>
          <option value="academics">Academics</option>
          <option value="sports">Sports</option>
          <option value="events">Events</option>
          <option value="campus">Campus</option>
        </select>
      </div>
      <table className="dash-table">
        <thead><tr><th>Title</th><th>Category</th><th>Featured</th></tr></thead>
        <tbody>
          {filteredGallery.map((g) => (
            <tr key={g.id}>
              <td>{g.title}</td><td>{g.category}</td><td>{g.featured ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}