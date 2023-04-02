// import React, { useState } from 'react';
// import SearchBar from '../components/SearchBar/SearchBar';
// import apiService from '../../src/service/apiService';

// const Movies = () => {
//   const [movies, setMovies] = useState([]);

//   const handleSearch = async keyword => {
//     const results = await apiService.searchMovies(keyword);
//     setMovies(results);
//   };

//   return (
//     <div>
//       <h2>Movies</h2>
//       <SearchBar onSearch={handleSearch} />
//       {movies.map(movie => (
//         <div key={movie.id}>
//           <h3>{movie.title}</h3>
//           <p>{movie.overview}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Movies;

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import apiService from '../../src/service/apiService';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async keyword => {
    setSearchTerm(keyword);
    const results = await apiService.searchMovies(keyword);
    setSearchResults(results);
  };

  const movies = useMemo(() => {
    if (searchTerm === '') {
      return [];
    }
    return searchResults;
  }, [searchTerm, searchResults]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
