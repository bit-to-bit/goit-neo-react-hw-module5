import Movie from '../movie/Movie';
import css from './MovieList.module.css';
const MovieList = ({ movies }) => {
  return (
    <ul className={css.movies}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Movie movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
