import React from 'react';
import './JobList.css';

const JobList = () => {
  const designers = [
    {
      id: 1,
      name: 'Bhuvesh Singh',
      role: 'UX designer/Graphic designer',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      rating: 4.5,
      reviews: 12,
      location: 'Mumbai, India',
      skills: ['Web design', 'UI design', 'graphic design', 'skils'],
    },
    {
      id: 2,
      name: 'Mariya sazpova',
      role: 'UX designer/Graphic designer',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      rating: 4.5,
      reviews: 22,
      location: 'Delhi, India',
      skills: ['Web design', 'Web design', 'Web design', 'Web design'],
    },
    // Add more designers here...
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span 
        key={index} 
        className={`star ${index < Math.floor(rating) ? 'filled' : 'empty'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="designer-list">
      {designers.map((designer) => (
        <div key={designer.id} className="designer-card">
          <div className="designer-info">
            <div className="avatar">
              <img src={`/api/placeholder/40/40`} alt={designer.name} />
            </div>
            <div className="details">
              <h3>{designer.name}</h3>
              <p className="role">{designer.role}</p>
              <p className="description">{designer.description}</p>
              
              <div className="skills">
                {designer.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                    <button className="remove-skill">×</button>
                  </span>
                ))}
                <span className="more-skills">more</span>
              </div>

              <div className="rating-location">
                <div className="rating">
                  {renderStars(designer.rating)}
                  <span className="review-count">{designer.reviews} reviews</span>
                </div>
                <div className="location">
                  <span className="flag">🇮🇳</span>
                  {designer.location}
                </div>
              </div>
            </div>
          </div>
          <button className="view-profile">view profile</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;