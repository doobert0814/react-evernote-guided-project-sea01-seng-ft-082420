import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        onChange={event => props.handleSearch(event.target.value)}
        id="search-bar"
        type="text"
        placeholder="Search Notes by Title"
      />
    </div>
  );
}

export default Search;
