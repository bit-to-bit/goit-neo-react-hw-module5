import { useLocation } from 'react-router-dom';
import css from './Additional.module.css';
import { Outlet, Link } from 'react-router-dom';

const Additional = () => {
  const location = useLocation();
  return (
    <div className={css.additional}>
      <div className={css.menu}>
        <h3>Additional inforamtion</h3>
        <ul>
          <li>
            <Link to='cast' state={location}>
              Cast
            </Link>
          </li>
          <li>
            <Link to='reviews' state={location}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Additional;
