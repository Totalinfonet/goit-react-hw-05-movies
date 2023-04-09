import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import apiService from '../../src/service/apiService';
import styled from '@emotion/styled';

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
    <MovieWrapper>
      <SearchBar onSearch={handleSearch} initialValue={query} />
      {submitted && movies.length === 0 && (
        <p>No results found for "{searchTerm}"</p>
      )}
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </MovieWrapper>
  );
};

export default Movies;

const MovieWrapper = styled.div`
  p {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disclosure-closed;
    margin-left: 48px;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
    }

    a {
      color: blue;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        font-weight: bold;
      }
    }
  }
`;
