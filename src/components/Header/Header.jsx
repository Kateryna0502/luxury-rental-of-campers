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

// import Logo from '../Logo/Logo.jsx';
// import css from './Header.module.css';
// import clsx from 'clsx';
// import { Link, NavLink } from 'react-router-dom';

// const changeLink = ({ isActive }) => {
//     return clsx(isActive&&css.active);
// }
// const Header = () => {
//     return (
//         <header className={css.header}>
//             <div className={css.logo}>
//                 <Link to="/">
//                     <Logo/>
//                 </Link>
//             </div>
//             <nav className={css.nav}>
//                 <NavLink to="/" className={changeLink}>Home</NavLink>
//                 <NavLink to="/catalog" className={changeLink}>Catalog</NavLink>
//             </nav>

            
//         </header>
//     );
// }
// export default Header;

// import { NavLink } from "react-router-dom";
// import { Container } from "../Container/Container.jsx";

// import logo from "../../assets/img/logo.svg";

// import css from "./Navigation.module.css";
// import clsx from "clsx";

// const Navigation = () => {
//   return (
//     <>
//       <header className={css.header}>
//         <Container>
//           <div className={css.box}>
//             <img src={logo} alt="logo" />
//             <nav className={css.nav}>
//               <NavLink
//                 className={({ isActive }) =>
//                   clsx(css.link, isActive && css.active)
//                 }
//                 to="/"
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 className={({ isActive }) =>
//                   clsx(css.link, isActive && css.active)
//                 }
//                 to="/catalog"
//               >
//                 Catalog
//               </NavLink>
//             </nav>
//           </div>
//         </Container>
//       </header>
//     </>
//   );
// };

// export default Navigation;