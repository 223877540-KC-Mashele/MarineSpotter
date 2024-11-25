import React from 'react';
import './Search.css';

const Search = ({ searchValue, setSearchValue }) => (
  <div className="search-bar">
    <input
      type="text"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search for marine species..."
    />
  </div>
);

export default Search;
