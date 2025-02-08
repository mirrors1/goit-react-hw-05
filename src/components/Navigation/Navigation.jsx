import { NavLink } from 'react-router-dom';
import tmdbLogo from '../../assets/blue_short.svg';
import s from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <header>
      <nav className={s.nav}>
        {/* <NavLink className={s.logo} to="/">
          <img src={tmdbLogo} className={s.logoImg} alt="Tmdb logo" />
        </NavLink> */}
        <div className={s.menu}>
          <NavLink
            className={({ isActive }) => clsx(s.link, isActive && s.active)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink className={buildLinkClass} to="/movies">
            Movies
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
export default Navigation;
