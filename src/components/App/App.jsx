import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import Home from '../../pages/Home';
// import Movies from '../../pages/Movies';
// import MovieDetails from '../../pages/MovieDetails';
// import Cast from '../Cast/Cast';
// import Reviews from '../Reviews/Reviews';
// import NotFound from '../NotFound/NotFound';
// import SharedLayout from '../SharedLayout/SharedLayout';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const NotFound = lazy(() => import('../NotFound/NotFound'));
const SharedLayout = lazy(() => import('../SharedLayout/SharedLayout'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
