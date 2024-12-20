import {
  useDispatch,
  useSelector,
} from "react-redux";

// import Icon from "../Icons/Icon.jsx";

import { selectLocation } from "../../redux/campers/selectors.js";
import { addLocation } from "../../redux/campers/action.js";

import css from "./Location.module.css";

const Location = () => {
  const value = useSelector(selectLocation);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    dispatch(addLocation(e.target.value));
  };

  return (
    <div>
      <p className={css.text}>Location</p>
      <div className={css.inputElements}>
        <input
          type="text"
          name="location"
          value={value}
          placeholder="Kyiv, Ukraine"
          className={css.input}
          onChange={onHandleChange}
        />
        {/* <i className={css.icon}>
          <Icon id="map" width={20} height={20} className={css.icon} />
        </i> */}
      </div>
    </div>
  );
};

export default Location;