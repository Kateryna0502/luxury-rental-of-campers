import Icon from '../Icons/Icon.jsx';
import css from './FilterPanel.module.css';

const FilterPanel = ({ id, iconId, name, type, checked, onChange }) => {
  return (
    <label
      className={`${css.label} ${checked ? css.checked : ''}`}
    >
      <input
        type={type}
        id={id}
        checked={checked}
        onChange={onChange}
        className={css.input}
      />
      {/* Іконка */}
      <Icon id={iconId} width={32} height={32} color={checked ? 'accent' : 'main'} />
      {/* Текст */}
      <span className={css.text}>
        {name ? name : id}
      </span>
    </label>
  );
};

export default FilterPanel;