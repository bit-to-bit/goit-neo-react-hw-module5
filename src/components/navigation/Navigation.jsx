import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const getActiveLink = ({ isActive }) => {
  return isActive ? css.active : null;
};

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <ul>
        <li>
          <NavLink to='/' className={getActiveLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getActiveLink} to='/movies'>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
