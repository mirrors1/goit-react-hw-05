import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import { NavLink, Route, Routes } from 'react-router-dom';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import MovieCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import s from './App.module.css';
import clsx from 'clsx';

function App() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <>
      <div className="container">
        <header>
          <nav className={s.nav}>
            <NavLink
              className={({ isActive }) => clsx(s.link, isActive && s.active)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink className={buildLinkClass} to="/movies/:movieId">
              Movies
            </NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
