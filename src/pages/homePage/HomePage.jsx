import { useEffect, useState } from 'react';
import { fetchTrandingMovies } from '../../api/movies';
import MovieList from '../../components/movieList/MovieList';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchTrandingMovies();
      setMovies(res);
    };
    fetchData();
  }, []);

  return (
    <div className={css.home}>
      <h2>Tranding today</h2>
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
