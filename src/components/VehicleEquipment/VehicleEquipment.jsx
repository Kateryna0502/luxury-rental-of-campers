import { selectEquipment } from '../../redux/campers/selectors.js';
import { addEquipment } from '../../redux/campers/action.js';
import { useDispatch, useSelector } from 'react-redux';
import FilterPanel from '../FilterPanel/FilterPanel.jsx';
import css from './VehicleEquipment.module.css';
// import Icon from '../Icons/Icon.jsx';

const VehicleEquipment = () => {
  const equipments = useSelector(selectEquipment);
  const dispatch = useDispatch();

  const handleChange = (id) => {
    dispatch(addEquipment(id));
  };

  return (
    <div>
      <p className={css.text}>Filters</p>
      <div className={css.filters}>
        <h3 className={css.title}>Vehicle Equipment</h3>
        <ul className={css.list}>
          {Object.entries(equipments).map(([key, value]) => (
            <li key={key} className={css.item}>
              {/* <Icon id={equipments[key].icon} size={20} /> */}
          
              <FilterPanel
                id={key}
                checked={value}
                onChange={() => handleChange(key)}
                type="checkbox"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VehicleEquipment;

