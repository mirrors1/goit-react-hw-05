import { useEffect, useState } from 'react';
import { trendingMovies } from '../services/api';
import toast from 'react-hot-toast';
import MovieList from '../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await trendingMovies();
        setMovies(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};
export default HomePage;
