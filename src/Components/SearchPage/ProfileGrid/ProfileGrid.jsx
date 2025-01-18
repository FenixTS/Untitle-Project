import React from 'react';
import './ProfileGrid.css';
import { Bookmark } from 'lucide-react';

const ProfileGrid = () => {
  const filters = [
    { id: 1, label: 'Location' },
    { id: 2, label: 'experience', active: true },
    { id: 3, label: 'skills' },
    { id: 4, label: 'fresher' },
    { id: 5, label: 'immediate joiner' },
    { id: 6, label: 'gender' },
    { id: 7, label: 'Customize filter' },
  ];

  const profiles = [
    { id: 1, name: 'Varun', role: 'exicutive off', location: 'Delhi', image: '/api/placeholder/48/48' },
    { id: 2, name: 'Merlin', role: 'exicutive off', location: 'chennai', image: '/api/placeholder/48/48' },
    { id: 3, name: 'Suman', role: 'exicutive off', location: 'goa', image: '/api/placeholder/48/48' },
    { id: 4, name: 'Shyam', role: 'exicutive off', location: 'dubai', image: '/api/placeholder/48/48' },
    { id: 5, name: 'Ashok', role: 'exicutive off', location: 'kolkatha', image: '/api/placeholder/48/48' },
    { id: 6, name: 'Anthony', role: 'exicutive off', location: 'kerala', image: '/api/placeholder/48/48' },
  ];

  return (
    <div className="container">
      {/* Filters */}
      <div className="filters">
        {filters.map((filter) => (
          <button 
            key={filter.id} 
            className={`filter-btn ${filter.active ? 'active' : ''}`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Profile Grid */}
      <div className="profile-grid">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <div className="profile-header">
              <div className="profile-main">
                <img 
                  src={profile.image} 
                  alt={profile.name} 
                  className="profile-image"
                />
                <div className="profile-info">
                  <h3>{profile.name}</h3>
                  <p>{profile.role}</p>
                </div>
              </div>
              <button className="bookmark-btn">
                <Bookmark size={20} />
              </button>
            </div>
            
            <div className="location-tag">
              {profile.location}
            </div>

            <div className="skill-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>

            <button className="more-btn">
              more...
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileGrid;