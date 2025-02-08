import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from '../../services/api';
import s from './MovieReviews.module.css';
import toast from 'react-hot-toast';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await movieReviews(movieId);
        setReviews(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getData();
  }, [movieId]);

  if (!reviews) {
    return <h2>Loading...</h2>;
  }
  if (reviews.length === 0) {
    return <p>`We don't have any reviews for this movie.`</p>;
  }

  return (
    <ul className={s.list}>
      {reviews.map(review => (
        <li key={review.id} className={s.item}>
          <h4>Author: {review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
export default MovieReviews;
