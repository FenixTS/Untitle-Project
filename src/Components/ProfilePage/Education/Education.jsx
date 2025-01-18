import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech/B.E. Electrical and Electronics',
      institution: 'Jeppiaar Engineering College',
      duration: '2019-2023',
      type: 'Full Time'
    },
    {
      degree: 'Class XII',
      institution: 'CBSE',
      year: '2018'
    },
    {
      degree: 'Class X',
      institution: 'CBSE',
      year: '2016'
    }
  ];

  return (
    // <div className="education-card">
      <>
      <h2 className="education-title">Education</h2>
      
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div 
            key={index} 
            className="education-item"
          >
            <h3 className="degree">{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            {edu.duration ? (
              <p className="duration">
                {edu.duration} | {edu.type}
              </p>
            ) : (
              <p className="year">{edu.year}</p>
            )}
          </div>
        ))}
      </div>
    {/* </div> */}
    </>
  );
};

export default Education;