// ProfileHeader.jsx
import React from 'react';
import { MapPin, Eye, LinkedinIcon, Globe, Mail } from 'lucide-react';
import './ProfileHeader.css';

const ProfileHeader = () => {
  return (
    
      <div className="profile-content">
        <div className="profile-left">
          <div className="profile-image-container">
            <img 
              src="/assets/Images/ProfilePic.webp"  
              alt="Profile" 
              className="profile-image"
            />
          </div>
          
          <div className="profile-info">
            <h1 className="profile-name">Fenix</h1>
            <h2 className="profile-title">Founder</h2>
            <p className="profile-bio">
              Entrepreneur | Actor | Investor & Mentor | Sportsman at Heart
            </p>
            <div className="profile-location">
              <MapPin size={16} className="icon" />
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </div>

        <div className="profile-right">
          <div className="contact-links">
            <a href="#" className="contact-link">
              <LinkedinIcon size={16} className="icon" />
              <span>www.linkedin.com/in/suniel-shetty</span>
            </a>
            <a href="#" className="contact-link">
              <Globe size={16} className="icon" />
              <span>http://www.ftctalentmedia.com</span>
            </a>
            <a href="#" className="contact-link">
              <Mail size={16} className="icon" />
              <span>suniel@ftctalentmedia.com</span>
            </a>
          </div>
          
          <div className="view-count">
            <Eye size={16} className="icon" />
            <span>56 views</span>
          </div>
        </div>
      </div>
  
  );
};

export default ProfileHeader;