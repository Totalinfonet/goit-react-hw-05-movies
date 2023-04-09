import React, { useState } from 'react';
import { Form, Input, Button } from './SearchBar.styled';

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
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={keyword} onChange={handleKeywordChange} />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;
