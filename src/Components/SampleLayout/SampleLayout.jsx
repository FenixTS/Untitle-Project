import React from 'react';
import './SampleLayout.css';
import Languages from '../ProfilePage/Languages/Languages';
import CareerTimeline from '../ProfilePage/CareerTimeline/CareerTimeline';
import Certification from '../ProfilePage/Certification/Certificarion';
import Education from '../ProfilePage/Education/Education';

const SampleLayout = ({ children }) => {
  return (
    <div className="profile-wrapper">
      <div className="profile-layout">
        {/* Top row */}
        <div className="top-row">
          <div className="card small-card">
            {/* Languages component */}<Languages/>
          </div>
          <div className="card large-card">
            {/* Timeline component */}<CareerTimeline/>
          </div>
        </div>
        
        {/* Bottom row */}
        <div className="bottom-row">
          <div className="card medium-card">
            {/* Licenses component */}<Certification/>
          </div>
          <div className="card medium-card">
            {/* Education component */}<Education/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleLayout;