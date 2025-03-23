import axios from 'axios';
import { authorization } from '../constants';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrandingMovies = async () => {
  const options = {
    headers: {
      Authorization: authorization,
    },
    params: {
      language: 'en-US',
    },
  };
  const { data } = await axios.get('/trending/movie/day', options);

  return data.results;
};

export const fetchMovie = async movieId => {
  const options = {
    headers: {
      Authorization: authorization,
    },
  };
  const { data } = await axios.get(`/movie/${movieId}`, options);

  console.dir(data);
  return data;
};
