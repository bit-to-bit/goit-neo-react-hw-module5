import axios from 'axios';
import { perPage, clientId } from '../constants';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchPhotos = async (query, page) => {
  const { data } = await axios.get('/search/photos', {
    params: {
      query: query,
      page: page,
      per_page: perPage,
      client_id: clientId,
    },
  });
  return data;
};
