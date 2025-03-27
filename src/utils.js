import avatar from './img/avatar.jpg';
import { apiPathToImg } from './constants';

export const getImgLink = fileName => {
  return fileName ? `${apiPathToImg}${fileName}` : avatar;
};

export const formatRating = rating => Number.parseFloat(rating * 10).toFixed(2);
