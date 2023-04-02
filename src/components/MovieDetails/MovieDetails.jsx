import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiService from '../../service/apiService';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();

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

  const backLinkHref = location.state?.from || '/movies';

  return (
    <div>
      <Link to={backLinkHref}>Назад</Link>
      {movieInfo ? (
        <div>
          <h1>{movieInfo.title}</h1>
          <p>{movieInfo.overview}</p>
          <p>Release date: {movieInfo.release_date}</p>
          <p>Popularity: {movieInfo.popularity}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
