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

export const fetchMovies = async (query, page) => {
  const options = {
    headers: {
      Authorization: authorization,
    },
    params: {
      language: 'en-US',
      query: query,
      page: page,
    },
  };
  const { data } = await axios.get('/search/movie', options);

  return data;
};

export const fetchMovie = async movieId => {
  const options = {
    headers: {
      Authorization: authorization,
    },
  };
  const { data } = await axios.get(`/movie/${movieId}`, options);

  return data;
};

export const fetchReviews = async movieId => {
  const options = {
    headers: {
      Authorization: authorization,
    },
  };
  const { data } = await axios.get(`/movie/${movieId}/reviews`, options);
  return data;
};

export const fetchCast = async movieId => {
  const options = {
    headers: {
      Authorization: authorization,
    },
  };
  const { data } = await axios.get(`/movie/${movieId}/credits`, options);

  return data;
};
