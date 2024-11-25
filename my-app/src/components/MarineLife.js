import React, { useState } from 'react';
import Search from './Search';
import CategoryFilters from './CategoryFilters';
import SpeciesGrid from './SpeciesGrid';
import marineSpecies from './SpeciesData'; // Use your existing data
import './MarineLife.css';

const MarineLife = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter species based on search and selected category
  const filteredSpeciesList = marineSpecies.filter(
    (species) =>
      species.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      (!selectedCategory ||
        species.category.toLowerCase() === selectedCategory.toLowerCase())
  );

  return (
    <div className="marine-life-container">
      <h1>Learn About Marine Life</h1>
      <p>
        Explore the fascinating world of marine species. Use the filters or
        search bar to find specific creatures, and click on them for more
        details.
      </p>

      {/* Search and Category Filters */}
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <CategoryFilters setSelectedCategory={setSelectedCategory} />

      {/* Species Grid */}
      <SpeciesGrid speciesList={filteredSpeciesList} />
    </div>
  );
};

export default MarineLife;
