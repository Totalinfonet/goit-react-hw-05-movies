import { Routes, Route, NavLink } from 'react-router-dom';

import Home from '../Home/Home';
import Movies from '../Movies/Movies';
// import MovieDetails from '../MovieDetails/MovieDetails';
// import Cast from '../Cast/Cast';
// import Reviews from '../Reviews/Reviews';

const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
      </Routes>
    </div>
  );
};

export default App;
