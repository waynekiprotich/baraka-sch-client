"use client";

import { staffMock } from '../mock/data.js';
import { useState } from 'react';

export default function AdminStaff() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStaff, setFilteredStaff] = useState(staffMock);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setFilteredStaff(staffMock.filter(s => 
      s.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      s.role.toLowerCase().includes(e.target.value.toLowerCase()) ||
      s.dept.toLowerCase().includes(e.target.value.toLowerCase())
    ));
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Staff Members</h3>
        <button className="btn btn-primary btn-sm">Add Staff</button>
        <input 
          type="text" 
          placeholder="Search staff..." 
          value={searchQuery} 
          onChange={handleSearch} 
          style={{ marginLeft: '12px' }}
        />
      </div>
      <table className="dash-table">
        <thead><tr><th>Name</th><th>Role</th><th>Department</th></tr></thead>
        <tbody>
          {filteredStaff.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td><td>{s.role}</td><td>{s.dept}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}