import { NavLink } from 'react-router-dom';
import css from './NotFoundPage.module.css';
const NotFoundPage = () => {
  return (
    <div className={css.main}>
      <h2>Page not found</h2>
      <NavLink to='/' className={css.home}>
        Home
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
