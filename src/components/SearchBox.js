import React from "react";

function SearchBox({ searchChange }) {
  return (
    <div className="pa2">
      <input
        className="bg-light-pink ba b--hot-pink"
        type="search"
        placeholder="search"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
