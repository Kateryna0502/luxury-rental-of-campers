import { Link, NavLink } from 'react-router-dom';
import css from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <h2 className={css.title}>Campers of your dreams</h2>
      <p className={css.p}>
        You can find everything you want in our catalog
      </p>
      <NavLink to='/catalog' className={css.nav}>
        View Now
          </NavLink>
          <Link to="/catalog">
          <button type="button" className={css.btn}>
            View Now
          </button>
        </Link>
    </>
  );
};

export default Hero;