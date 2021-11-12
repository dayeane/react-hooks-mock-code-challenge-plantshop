import React from "react";

function Search({searchList}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={ searchList}
      />
    </div>
  );
}

export default Search;
