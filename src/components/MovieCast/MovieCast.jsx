import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCast } from '../../services/api';
import s from './MovieCast.module.css';
import toast from 'react-hot-toast';

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await movieCast(movieId);
        setCasts(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getData();
  }, [movieId]);

  if (!casts) {
    return <h2>Loading...</h2>;
  }
  if (casts.length === 0) {
    return <p>`We don't have any cast for this movie.`</p>;
  }

  return (
    <ul className={s.list}>
      {casts.map(cast => (
        <li key={cast.cast_id} className={s.item}>
          <img
            className={s.profile}
            src={
              cast.profile_path !== null
                ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                : 'https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster'
            }
            alt="profile"
          />
          <p>{cast.name}</p>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
};
export default MovieCast;
