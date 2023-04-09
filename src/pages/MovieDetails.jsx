import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import apiService from '../service/apiService';
import styled from '@emotion/styled';

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
    <Container>
      <BackLink to={backLinkHref.current}>Назад</BackLink>
      {movieInfo ? (
        <MovieInfoContainer>
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
            alt={movieInfo.title}
          />
          <MovieInfo>
            <Title>{movieInfo.title}</Title>
            <Overview>{movieInfo.overview}</Overview>
            <ReleaseDate>Release date: {movieInfo.release_date}</ReleaseDate>
            <Popularity>Popularity: {movieInfo.popularity}</Popularity>
            <Genres>
              Genres: {movieInfo.genres.map(genre => genre.name).join(', ')}
            </Genres>
          </MovieInfo>
        </MovieInfoContainer>
      ) : (
        <p>Loading...</p>
      )}
      <Nav>
        <NavLink to="cast">Акторський склад</NavLink>
        <NavLink to="reviews">Огляди</NavLink>
      </Nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BackLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  text-align: center;
  text-decoration: none;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #555;
    color: orange;
  }
`;

const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: flex-start;
  margin-top: 1rem;
`;

const Poster = styled.img`
  max-width: 33%;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Overview = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

const ReleaseDate = styled.p`
  font-size: 1.2rem;
`;

const Popularity = styled.p`
  font-size: 1.2rem;
`;

const Genres = styled.p`
  font-size: 1.2rem;
`;

const Nav = styled.nav`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  text-align: center;
  text-decoration: none;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #555;
    color: orange;
  }
`;
