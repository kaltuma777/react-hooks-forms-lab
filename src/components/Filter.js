import React, { useState } from "react";

// Filter component for searching and filtering by category
function Filter({ onCategoryChange, onSearchChange }) {
  const [searchText, setSearchText] = useState("testing");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleSearchChange(event) {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
    onSearchChange(newSearchText);
  }

  function handleCategoryChange(event) {
    const newSelectedCategory = event.target.value;
    setSelectedCategory(newSelectedCategory);
    onCategoryChange(newSelectedCategory);
  }

  return (
    <div className="Filter">
      <label>
        Search:
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchChange}
        />
      </label>
      <select
        name="filter"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;