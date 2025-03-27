import { useState, useEffect, useRef, useMemo } from 'react';
import { fetchMovies } from '../../api/movies';
import Search from '../../components/search/Search';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import LoadMoreBtn from '../../components/loadMoreBtn/LoadMoreBtn';
import MovieList from '../../components/movieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = useMemo(() => searchParams.get('query'), [searchParams]);

  const isFirstRender = useRef(true);

  const handleSearch = query => {
    if (searchQuery != query) setMovies([]);
    setSearchParams({ query: query });
    setPage(1);
    isFirstRender.current = false;
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!searchQuery) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const fetching = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovies(searchQuery, page);
        setTotalPages(data.total_pages);
        setMovies(prevHits => [...prevHits, ...data.results]);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetching();
  }, [searchQuery, page]);

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
