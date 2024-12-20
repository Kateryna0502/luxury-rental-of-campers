import Logo from '../Logo/Logo.jsx';
import css from './Header.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const changeLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logoContainer}>
        <Logo />
      </div>
      <nav className={css.navigation}>
        <NavLink to="/" className={changeLink}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={changeLink}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

