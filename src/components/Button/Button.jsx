import { Link } from "react-router-dom";
import css from "./Button.module.css";

const Button = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      {children}
    </Link>
  );
};
export default Button;