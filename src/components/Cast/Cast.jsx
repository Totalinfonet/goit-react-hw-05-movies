import { useEffect, useState } from 'react';
import apiService from '../../service/apiService';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const credits = await apiService.getMovieCredits(movieId);
        console.log('credits:', credits);
        setCast(credits.cast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {cast && cast.length > 0 ? (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
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
