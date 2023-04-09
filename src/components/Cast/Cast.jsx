import { useEffect, useState } from 'react';
import apiService from '../../service/apiService';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const credits = await apiService.getMovieCast(movieId);
        setCast(credits);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  const tmdbImageUrl = (path, size = 'w500') => {
    const baseUrl = 'https://image.tmdb.org/t/p/';
    return `${baseUrl}${size}${path}`;
  };

  return (
    <div>
      <h2>Cast</h2>
      {cast?.length ? (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={tmdbImageUrl(actor.profile_path, 'w300')}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading cast...</p>
      )}
    </div>
  );
};

export default Cast;
