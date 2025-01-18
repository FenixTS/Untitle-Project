import React from 'react';
import './Languages.css';

const Languages = () => {
  const languages = [
    {
      name: 'English',
      proficiency: 'Full professional proficiency'
    },
    {
      name: 'Hindi',
      proficiency: 'Full professional proficiency'
    },
    {
      name: 'Marathi',
      proficiency: 'Native or bilingual proficiency'
    }
  ];

  return (
    // <div className="languages-card">
    <>
      <h2 className="languages-title">Languages</h2>
      
      <div className="languages-list">
        {languages.map((language, index) => (
          <div 
            key={index} 
            className="language-item"
          >
            <h3 className="language-name">{language.name}</h3>
            <p className="language-proficiency">{language.proficiency}</p>
          </div>
        ))}
      </div>
      </>
    // </div>
  );
};

export default Languages;