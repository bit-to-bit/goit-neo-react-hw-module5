import { FaUserPen } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../api/movies';
import css from './MovieReviews.module.css';
const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchReviews(movieId);
      setReviews(res);
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      <ul className={css.reviews}>
        {reviews &&
          reviews.total_pages > 0 &&
          reviews.results.map(review => (
            <li key={review.id}>
              <p className={css.author}>
                <FaUserPen size={20} />
                {review.author}
              </p>
              <p className={css.content}>{review.content}</p>
            </li>
          ))}
      </ul>
      {reviews && reviews.total_pages === 0 && (
        <p className={css.noData}>Reviews comming soon ... </p>
      )}
    </div>
  );
};

export default MovieReviews;
