import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';

const HomePage = lazy(() => import('./pages/homePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/moviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('./pages/notFoundPage/NotFoundPage'));
const Navigation = lazy(() => import('./components/navigation/Navigation'));
const MovieCast = lazy(() => import('./components/movieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('./components/movieReviews/MovieReviews')
);
const MovieDetailsPage = lazy(() =>
  import('./pages/movieDetailsPage/MovieDetailsPage')
);

const App = () => {
  return (
    <Suspense fallback={<p>Loading component..</p>}>
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
    </Suspense>
  );
};

export default App;
