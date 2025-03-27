import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../api/movies';
import { getImgLink } from '../../utils';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchCast(movieId);
      setCast(res);
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      <ul className={css.cast}>
        {cast &&
          cast.cast.length > 0 &&
          cast.cast.map(actor => (
            <li key={actor.id}>
              <div className={css.photo}>
                <img src={getImgLink(actor.profile_path)} alt={actor.name} />
              </div>
              <div className={css.info}>
                <p className={css.name}>{actor.name}</p>
                <p className={css.character}>{actor.character}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieCast;
