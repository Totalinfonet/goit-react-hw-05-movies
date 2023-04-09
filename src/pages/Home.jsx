import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import apiService from '../service/apiService';
import styled from '@emotion/styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await apiService.getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  const memoizedMovies = useMemo(() => movies, [movies]);

  return (
    <HomeWrapper>
      <h1>Trending Today</h1>
      <ul>
        {memoizedMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  h1 {
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
