import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import getTrendingMovies from '../service/apiService';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  const memoizedMovies = useMemo(() => movies, [movies]);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {memoizedMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
