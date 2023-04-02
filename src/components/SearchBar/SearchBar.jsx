import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (keyword === '') {
      alert('Please enter a search query');
      return;
    }
    onSearch(keyword);
  };

  const handleKeywordChange = event => {
    setKeyword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={keyword} onChange={handleKeywordChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
