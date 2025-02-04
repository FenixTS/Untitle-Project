import React from 'react';
import './NavHeader.css';

const NavHeader = () => {
  return (
    <header className="nav-header">
      <div className="nav-container">
        <div className="search-container">
          <div className="search-wrapper">
            <svg 
              className="search-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search..." 
            />
          </div>
        </div>
        
        <div className="nav-actions">
          <button className="notification-btn">
            <svg 
              className="bell-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          
          <div className="profile-picture">
            <img 
              src="/assets/Images/ProfilePic.webp" 
              alt="Profile" 
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavHeader;