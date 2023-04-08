import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import apiService from '../../src/service/apiService';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = async keyword => {
    setSearchTerm(keyword);
    setSubmitted(true);
    const results = await apiService.searchMovies(keyword);
    setSearchResults(results);
    setSearchParams({ query: keyword });
  };

  const movies = useMemo(() => {
    if (searchTerm === '') {
      return [];
    }
    return searchResults;
  }, [searchTerm, searchResults]);

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || '';

  if (query !== '' && searchTerm === '') {
    setSearchTerm(query);
    setSubmitted(true);
    apiService.searchMovies(query).then(setSearchResults);
  }
  console.log(searchParams);

  return (
    <div>
      <SearchBar onSearch={handleSearch} initialValue={query} />
      {submitted && movies.length === 0 && (
        <p>No results found for "{searchTerm}"</p>
      )}
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
