import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import MovieList from '../components/MovieList/MovieList';
import { moviesSearch } from '../services/api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await moviesSearch(query);
        setMovies(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getData();
  }, [query]);

  const handleChangeQuery = value => {
    searchParams.set('query', value);
    setSearchParams(searchParams);
  };

  return (
    <>
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
      <MovieList movies={movies} />
    </>
  );
};
export default MoviesPage;
