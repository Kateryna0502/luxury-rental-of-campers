// export default function Logo() {
//     return (
//         <div className="logo">
//             <img src="/Logo.png" alt="Logo" />
            
//         </div>
//     );
// }

import { NavLink } from "react-router-dom";

import logo from "../../../public/Logo.png";

import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <NavLink to="/" className={css.logo}>
        <img src={logo} alt="logo" width="136" height="16" />
      </NavLink>
    </div>
  );
};

export default Logo;