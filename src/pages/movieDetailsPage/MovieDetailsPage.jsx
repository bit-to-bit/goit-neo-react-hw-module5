import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { fetchMovie } from '../../api/movies';
import css from './MovieDetailsPage.module.css';
import Additional from '../../components/additional/Additional';
import { FaBackward } from 'react-icons/fa';
import { getImgLink, formatRating } from '../../utils';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state ?? '/movies');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchMovie(movieId);
      setMovie(res);
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      <Link to={backLink.current} className={css.back}>
        <FaBackward />
        {'Go Back'}
      </Link>
      {movie && (
        <div className={css.info}>
          <img src={getImgLink(movie.poster_path)} alt={movie.title} />
          <div className={css.description}>
            <h3>{`${movie.title} (${movie.release_date.substring(0, 4)})`}</h3>
            <p>{`User Score: ${formatRating(movie.vote_average)}%`}</p>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <ul className={css.genres}>
              {movie.genres &&
                movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
          </div>
        </div>
      )}
      <Additional movie={movie} />
    </div>
  );
};

export default MovieDetailsPage;
