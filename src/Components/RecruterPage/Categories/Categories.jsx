import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    { id: 1, icon: '⚡', label: 'Energy' },
    { id: 2, icon: '✏️', label: 'Edit' },
    { id: 3, icon: '⬚', label: 'Layout' },
    { id: 4, icon: 'Aꭗ', label: 'Translate' },
    { id: 5, icon: '</>', label: 'Code' },
    { id: 6, icon: '☰', label: 'Server' },
    { id: 7, icon: '🔧', label: 'Tools' },
    { id: 8, icon: '...', label: 'More' },
  ];

  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className={`category-item ${category.label.toLowerCase() === 'code' ? 'active' : ''}`}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-label">{category.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;