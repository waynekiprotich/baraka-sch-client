"use client";

import { galleryMock } from '../mock/data.js';

export default function AdminGallery() {
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Gallery Items</h3>
        <button className="btn btn-primary btn-sm">Upload Image</button>
      </div>
      <table className="dash-table">
        <thead><tr><th>Title</th><th>Category</th><th>Featured</th></tr></thead>
        <tbody>
          {galleryMock.map((g) => (
            <tr key={g.id}>
              <td>{g.title}</td><td>{g.category}</td><td>{g.featured ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}