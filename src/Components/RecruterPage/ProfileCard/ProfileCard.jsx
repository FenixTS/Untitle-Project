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
    // <div className="card-container">
      <>
      <div className="profile-content">
        <div className="profile-left">
          <div className="image-container">
            <img 
              src="/assets/Images/ProfilePic.webp" 
              alt="Profile" 
              className="profile-image"
            />
          </div>
          <div className="profile-info">
            <h1>{profile.name}</h1>
            <p className="position">{profile.position}</p>
            <p className="company">{profile.company}</p>
          </div>
        </div>

        <div className="contact-links">
          <div className="contact-item">
            <div className="icon linkedin-icon">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <circle cx="12" cy="12" r="11" fill="#0077B5"/>
                <path fill="white" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer">
              {profile.linkedin}
            </a>
          </div>

          <div className="contact-item">
            <div className="icon website-icon">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="#666" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer">
              {profile.website}
            </a>
          </div>

          <div className="contact-item">
            <div className="icon email-icon">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="#666" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <a href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>
      </div>
      
    {/* </div> */}
    </>
  );
};

export default ProfileCard;