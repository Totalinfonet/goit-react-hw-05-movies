import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiService from '../../service/apiService';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

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
