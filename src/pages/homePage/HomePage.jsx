import { useEffect, useState } from 'react';
import { fetchTrandingMovies } from '../../api/movies';
import css from './HomePage.module.css';
import Movie from '../../components/movie/Movie';

const HomePage = () => {
  const [trendingMovies, setTrandingMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchTrandingMovies();
      setTrandingMovies(res);
    };
    console.log('do');
    fetchData();
  }, []);

  return (
    <div>
      <h2>Tranding today</h2>
      <ul className={css.trend}>
        {trendingMovies &&
          trendingMovies.map(movie => (
            <li key={movie.id}>
              <Movie movie={movie} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HomePage;
