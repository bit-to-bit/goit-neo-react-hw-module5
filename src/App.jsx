// import { useState, useEffect, useRef } from 'react';
// import ErrorMessage from './components/errorMessage/ErrorMessage';
// import ImageGallery from './components/imageGallery/ImageGallery';
// import SearchBar from './components/searchBar/SearchBar';
// import { fetchPhotos } from './api/photos';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import MovieDetailsPage from './pages/movieDetailsPage/MovieDetailsPage';
import MoviesPage from './pages/moviesPage/MoviesPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import Navigation from './components/navigation/Navigation';
import MovieCast from './components/movieCast/MovieCast';
import MovieReviews from './components/movieReviews/MovieReviews';

import css from './App.module.css';

const App = () => {
  // const [photos, setPhotos] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);
  // const [searchQuery, setSearchQuery] = useState('');
  // const [page, setPage] = useState(0);
  // const [totalPages, setTotalPages] = useState(0);
  // const scrollRef = useRef();

  // const handleSearch = query => {
  //   if (searchQuery != query) setPhotos([]);
  //   setSearchQuery(query);
  //   setPage(1);
  // };

  // const onCloseModal = () => {
  //   setModalIsOpen(false);
  // };

  // const onOpenModal = photo => {
  //   setModalIsOpen(true);
  //   setSelectedPhoto(photo);
  // };

  // const onLoadMore = () => {
  //   setPage(page + 1);
  // };

  // useEffect(() => {
  //   if (!searchQuery) return;

  //   const fetching = async () => {
  //     try {
  //       setIsLoading(true);
  //       setError(false);
  //       const data = await fetchPhotos(searchQuery, page);
  //       setTotalPages(data.total_pages);
  //       setPhotos(prevHits => [...prevHits, ...data.results]);
  //     } catch (error) {
  //       console.error(error);
  //       setError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetching();
  // }, [searchQuery, page]);

  // useEffect(() => {
  //   const scrollEl = scrollRef.current?.querySelector(
  //     `li:nth-child(${(page - 1) * perPage + 1})`
  //   );
  //   if (scrollEl) {
  //     scrollEl.style.scrollMarginTop = '94px';
  //     scrollEl.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, [photos, page]);

  return (
    <div>
      <Navigation />
      <main className={css.main}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast />} />
            <Route path='reviews' element={<MovieReviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
