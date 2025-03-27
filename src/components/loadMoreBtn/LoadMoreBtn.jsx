import css from './loadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.loadMore} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
