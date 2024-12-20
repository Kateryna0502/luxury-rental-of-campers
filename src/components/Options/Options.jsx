import Icon from '../Icons/Icon.jsx';

import css from './Options.module.css';

export default function Options({ option, id }) {
  return (
    <div className={css.content}>
      <Icon id={id ? id : option} width={20} height={20}></Icon>
      <p className={css.info}>{option}</p>
    </div>
  );
}