import { useEffect, useState } from 'react';
import apiService from '../../service/apiService';
import { useParams } from 'react-router-dom';
import { CastWrapper, ActorImage, ActorInfo } from './Cast.styled';

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
    <CastWrapper>
      <h2>Cast</h2>
      {cast?.length ? (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <ActorImage
                src={tmdbImageUrl(actor.profile_path, 'w300')}
                alt={actor.name}
              />
              <ActorInfo>
                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </ActorInfo>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading cast...</p>
      )}
    </CastWrapper>
  );
};

export default Cast;
