import Icon from '../Icons/Icon.jsx';

import css from './VehicleOptions.module.css';

export default function VehicleOptions({ option, id }) {
  return (
    <div className={css.div}>
      <Icon id={id ? id : option} width={20} height={20}></Icon>
      <p className={css.p}>{option}</p>
    </div>
  );
}