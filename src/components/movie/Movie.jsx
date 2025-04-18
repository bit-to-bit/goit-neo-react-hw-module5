import { Link, useLocation } from 'react-router-dom';

const Movie = ({ movie }) => {
  const location = useLocation();
  return (
    <Link
      to={`${location.pathname === '/' ? 'movies/' : ''}${movie.id}`}
      state={location}
    >
      {movie.title}
    </Link>
  );
};

export default Movie;
