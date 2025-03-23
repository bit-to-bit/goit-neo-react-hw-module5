import PropagateLoader from 'react-spinners/PropagateLoader';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <PropagateLoader color='#3f51b5' size={24} speedMultiplier={1} />
    </div>
  );
};

export default Loader;
