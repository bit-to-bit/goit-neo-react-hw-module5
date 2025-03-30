import { useState, useEffect, useMemo } from 'react';
import { fetchMovies } from '../../api/movies';
import Search from '../../components/search/Search';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import LoadMoreBtn from '../../components/loadMoreBtn/LoadMoreBtn';
import MovieList from '../../components/movieList/MovieList';
import { useSearchParams, useLocation } from 'react-router-dom';

const patternMovieDatailsPage = /^\/movies\/\d+.*$/;

const MoviesPage = () => {
  const fromPathName = useLocation().state?.pathname;
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [params, setParams] = useSearchParams();
  const query = useMemo(() => params.get('query') ?? '', [params]);
  const page = useMemo(() => params.get('page') ?? 1, [params]);
  const [totalPages, setTotalPages] = useState(
    patternMovieDatailsPage.test(fromPathName)
      ? sessionStorage.getItem('totalPages') ?? 0
      : 0
  );

  const handleSearch = query => {
    if (!query) return setParams({});
    setMovies([]);
    setParams({ query: query, page: 1 });
  };

  const onLoadMore = () => {
    params.set('page', Number(page) + 1);
    setParams(params);
  };

  useEffect(() => {
    if (!query) return;
    if (patternMovieDatailsPage.test(fromPathName)) {
      setMovies(JSON.parse(sessionStorage.getItem('movies')) ?? []);
      return;
    }
    const fetching = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovies(query, page);
        setTotalPages(data.total_pages);
        sessionStorage.setItem('totalPages', data.total_pages);
        setMovies(prevHits => {
          const newMovies = [...prevHits, ...data.results];
          sessionStorage.setItem('movies', JSON.stringify(newMovies));
          return newMovies;
        });
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetching();
  }, [query, page, fromPathName]);

  return (
    <>
      <Search onSearch={handleSearch}></Search>
      {movies && <MovieList movies={movies} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {!isLoading && page < totalPages && totalPages > 1 && !error && (
        <LoadMoreBtn onClick={onLoadMore} />
      )}
    </>
  );
};

export default MoviesPage;
