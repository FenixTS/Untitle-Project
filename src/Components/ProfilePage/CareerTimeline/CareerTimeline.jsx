// CareerTimeline.jsx
import React from 'react';
import './CareerTimeline.css';

const CareerTimeline = () => {
  const experiences = [
    {
      id: 1,
      role: "Founder",
      company: "ABC Media",
      startDate: "Jan 2021",
      endDate: "Present",
      duration: "3 yrs 10 mos",
      location: "Mumbai, Maharashtra, India",
      logo: "/api/placeholder/48/48",
      year: 2021
    },
    {
      id: 2,
      role: "Founder",
      company: "FTC Talent Media & Entertainment",
      startDate: "Jan 2020",
      endDate: "Mar 2023",
      duration: "3 yrs 3 mos",
      location: "Mumbai, Maharashtra, India",
      logo: "/api/placeholder/48/48",
      year: 2020
    },
    {
      id: 3,
      role: "Founder",
      company: "FTC Talent Media & Entertainment",
      startDate: "Jan 2018",
      endDate: "Jan 2021",
      duration: "2 yrs 1 mos",
      location: "Mumbai, Maharashtra, India",
      logo: "/api/placeholder/48/48",
      year: 2018
    },
    {
      id: 4,
      role: "Founder",
      company: "FTC Talent Media & Entertainment",
      startDate: "Jan 2016",
      endDate: "Dec 2018",
      duration: "2 yrs",
      location: "Mumbai, Maharashtra, India",
      logo: "/api/placeholder/48/48",
      year: 2016
    }
  ];

  return (
    // <div className="timeline-wrapper">
      <>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="timeline-item">
            <div className={`timeline-content ${index % 2 === 0 ? 'right' : 'left'}`}>
              <div className="experience-card">
                <div className="logo-container">
                  <img src={exp.logo} alt={exp.company} className="company-logo" />
                </div>
                <div className="experience-details">
                  <h3 className="role-title">{exp.role}</h3>
                  <h4 className="company-name">{exp.company}</h4>
                  <p className="duration">
                    {exp.startDate} - {exp.endDate} · {exp.duration}
                  </p>
                  <p className="location">{exp.location}</p>
                </div>
              </div>
              <div className="timeline-connector">
                <div className="connector-line"></div>
                <div className="connector-dot"></div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Timeline bar with years */}
        <div className="timeline-bar">
          {[2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024].map((year) => (
            <div key={year} className="year-marker">
              <span className="year">{year}</span>
            </div>
          ))}
        </div>
      </div>
    {/* </div> */}
    </>
  );
};

export default CareerTimeline;