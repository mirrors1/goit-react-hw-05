import { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { moviesById } from '../services/api';
import s from './MovieDetailsPage.module.css';
import { IoMdArrowRoundBack } from 'react-icons/io';
import toast from 'react-hot-toast';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const goBackUrl = useRef(location?.state ?? '/movies');

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      try {
        const data = await moviesById(movieId);
        setMovie(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={s.card}>
      <button className={s.btn}>
        <IoMdArrowRoundBack className={s.arrowBack} />
        <NavLink to={goBackUrl.current}>Go back</NavLink>
      </button>
      <div className={s.dsc}>
        <img
          className={s.poster}
          src={
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : 'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster'
          }
          alt="poster"
        />
        <div className={s.text}>
          <h3>{movie.title}</h3>
          <p>User Score: {Math.round(movie.vote_average * 10)}&#37;</p>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul className={s.genresList}>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p className={s.titleInfo}>Additional information</p>
        <nav className={s.addInfo}>
          <NavLink to="Cast">Cast</NavLink>
          <NavLink to="Reviews">Reviews</NavLink>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieDetailsPage;
