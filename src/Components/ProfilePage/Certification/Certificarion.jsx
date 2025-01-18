import React from 'react';
import './Certification.css';

const Certification = () => {
  return (
    // <div className="licenses-card">
      <>
      <div className="licenses-header">
        <h2 className="licenses-title">Licenses & certifications</h2>
        <button className="edit-button">
          <svg 
            viewBox="0 0 24 24" 
            width="20" 
            height="20" 
            stroke="currentColor" 
            fill="none"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" 
            />
          </svg>
        </button>
      </div>

      <div className="certificates-list">
        {/* PMP Certificate */}
        <div className="certificate-item">
          <div className="certificate-logo">
            <img src="/api/placeholder/48/48" alt="PMP Logo" />
          </div>
          <div className="certificate-details">
            <h3>Project Management Professional (PMP)</h3>
            <p className="institute">Project Management Institute</p>
            <p className="date">Issued Jul 2021 · Expired Jul 2024</p>
            <p className="credential">Credential ID 3023124</p>
          </div>
        </div>

        {/* AXELOS Certificates */}
        <div className="certificate-item">
          <div className="certificate-logo">
            <img src="/api/placeholder/48/48" alt="AXELOS Logo" />
          </div>
          <div className="certificate-details">
            <h3>P30- Portfolio, Programme and Project Offices</h3>
            <p className="institute">AXELOS Global Best Practice</p>
            <p className="date">Issued Sep 2018</p>
            
            <div className="additional-cert">
              <h3>AXELOS Global Best Practice</h3>
              <p className="date">Issued Sep 2018</p>
              <p className="credential">Credential ID GR646000661NA</p>
            </div>
          </div>
        </div>
      </div>
      
    {/* </div> */}</>
  );
};

export default Certification;