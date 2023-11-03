import React from "react";

function Search( { searchInput, onSearch } ) {
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onSearch(e.target.value)}
        value={searchInput}
      
      />
    </div>
  );
}

export default Search;
