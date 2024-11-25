import React from 'react';
import './CategoryFilters.css';

const CategoryFilters = ({ setSelectedCategory }) => {
  const categories = ['Mammal', 'Fish', 'Reptile', 'Invertebrates', 'Coral'];

  return (
    <div className="category-filters">
      <button onClick={() => setSelectedCategory(null)}>All</button>
      {categories.map((category) => (
        <button key={category} onClick={() => setSelectedCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
