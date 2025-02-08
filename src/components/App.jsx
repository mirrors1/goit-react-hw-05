import { Route, Routes } from 'react-router-dom';
// import MoviesPage from '../pages/MoviesPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';
// import MovieCast from './MovieCast/MovieCast';
// import MovieReviews from './MovieReviews/MovieReviews';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import Navigation from './Navigation/Navigation';
import { lazy, Suspense } from 'react';
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

function App() {
  return (
    <>
      <div className="container">
        <Navigation />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
