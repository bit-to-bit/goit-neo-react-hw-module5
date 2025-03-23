import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie } from '../../api/movies';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchMovie(movieId);
      setMovie(res);
    };
    console.log('dodo');
    fetchData();
  }, [movieId]);

  console.log('movie', movie);
  return (
    <div>
      {movie && (
        <div className={css.info}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className={css.description}>
            <h3>{`${movie.title} (${movie.release_date.substring(0, 4)})`}</h3>
            <p>{`User Score: ${Number.parseFloat(
              movie.vote_average * 10
            ).toFixed(2)}%`}</p>
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
    </div>
  );
};

export default MovieDetailsPage;
