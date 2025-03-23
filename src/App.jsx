import { useState, useEffect, useRef } from 'react';
import ErrorMessage from './components/errorMessage/ErrorMessage';
import ImageGallery from './components/imageGallery/ImageGallery';
import SearchBar from './components/searchBar/SearchBar';
import { fetchPhotos } from './api/photos';
import Loader from './components/loader/Loader';
import ImageModal from './components/imageModal/ImageModal';
import LoadMoreBtn from './components/loadMoreBtn/LoadMoreBtn';
import { perPage } from './constants';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const scrollRef = useRef();

  const handleSearch = query => {
    if (searchQuery != query) setPhotos([]);
    setSearchQuery(query);
    setPage(1);
  };

  const onCloseModal = () => {
    setModalIsOpen(false);
  };

  const onOpenModal = photo => {
    setModalIsOpen(true);
    setSelectedPhoto(photo);
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!searchQuery) return;

    const fetching = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchPhotos(searchQuery, page);
        setTotalPages(data.total_pages);
        setPhotos(prevHits => [...prevHits, ...data.results]);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetching();
  }, [searchQuery, page]);

  useEffect(() => {
    const scrollEl = scrollRef.current?.querySelector(
      `li:nth-child(${(page - 1) * perPage + 1})`
    );
    if (scrollEl) {
      scrollEl.style.scrollMarginTop = '94px';
      scrollEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, [photos, page]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {photos && (
        <ImageGallery photos={photos} onClick={onOpenModal} ref={scrollRef} />
      )}
      {isLoading && <Loader />}
      {!isLoading && page < totalPages && totalPages > 1 && !error && (
        <LoadMoreBtn onClick={onLoadMore} />
      )}
      {error && <ErrorMessage />}
      {
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          onClose={onCloseModal}
          photo={selectedPhoto}
        />
      }
    </>
  );
};

export default App;
