import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import apiService from '../service/apiService';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        const data = await apiService.getMovieInfo(movieId);
        setMovieInfo(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieInfo();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkHref.current}>Назад</Link>
      {movieInfo ? (
        <div>
          <h1>{movieInfo.title}</h1>
          <p>{movieInfo.overview}</p>
          <p>Release date: {movieInfo.release_date}</p>
          <p>Popularity: {movieInfo.popularity}</p>
          <nav>
            <Link to="cast">Акторський склад</Link>
            <Link to="reviews">Огляди</Link>
          </nav>
          <Outlet />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
