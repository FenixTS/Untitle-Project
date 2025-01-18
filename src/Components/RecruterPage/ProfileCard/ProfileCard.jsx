import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  const profile = {
    name: 'Henry Kanwil',
    position: 'Hr Manager',
    company: 'FTC Corporation',
    linkedin: 'www.linkedin.com/in/suniel-shetty',
    website: 'www.helloworld.com',
    email: 'suniel@ftctalentmedia.com'
  };

  return (
    <div className="profile-container">
      <div className="profile-left">
        <img 
          src="/api/placeholder/96/96" 
          alt="Profile" 
          className="profile-image"
        />
        <div className="profile-info">
          <h1>{profile.name}</h1>
          <div className="position-info">
            <span>{profile.position}</span>
            <span>{profile.company}</span>
          </div>
        </div>
      </div>

      <div className="contact-links">
        <div className="contact-item">
          <div className="icon linkedin-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </div>
          <a href={`https://${profile.linkedin}`}>{profile.linkedin}</a>
        </div>

        <div className="contact-item">
          <div className="icon website-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z"/>
              <path fill="currentColor" d="M8.95 7.95l-1.41 1.41L11.12 13 7.54 16.54l1.41 1.41L13.95 13z"/>
            </svg>
          </div>
          <a href={`https://${profile.website}`}>{profile.website}</a>
        </div>

        <div className="contact-item">
          <div className="icon email-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;