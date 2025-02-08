import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzZlMjMxY2IwMzc0OWFlYjU0M2NiN2RhN2UwMDRiOSIsIm5iZiI6MTczOTAwMDg2Ny45NSwic3ViIjoiNjdhNzBjMjNkY2Y3NWFmYmUyZjEwNzIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.JN9IweUDXTnBgyLkwjKZwd3vd0PBM-TlJ22j6KCEcSE';

export const trendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day?`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return data.results;
};

export const moviesById = async movieId => {
  const { data } = await axios.get(`movie/${movieId}?`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return data;
};

export const movieCast = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return data.cast;
};

export const movieReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return data.results;
};

export const moviesSearch = async query => {
  const { data } = await axios.get(`search/movie?query=${query}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return data.results;
};
