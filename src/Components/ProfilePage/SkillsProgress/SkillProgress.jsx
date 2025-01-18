import React from 'react';
import './SkillProgress.css';

const SkillProgress = () => {
  const skills = [
    { progress: 67 },
    { progress: 67 },
    { progress: 47 },
  ];

  const ProgressCircle = ({ progress }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    
    return (
      <div className="progress-circle">
        <svg className="circle-svg" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="circle-background"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="circle-progress"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
            }}
          />
        </svg>
        <span className="progress-text">
          {progress}%
        </span>
      </div>
    );
  };

  return (
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h2 className="card-title">Skills</h2>
            <ProgressCircle progress={skill.progress} />
          </div>
        ))}
        
        <div className="skill-card add-more">
          <div className="add-more-content">
            <h2 className="card-title">Add more</h2>
            <div className="add-icon-container">
              <svg
                className="add-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default SkillProgress;