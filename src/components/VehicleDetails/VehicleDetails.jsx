import VehicleListOptions from '../VehicleListOptions/VehicleListOptions.jsx';
import css from './VehicleDetails.module.css';

const VehicleDetails = ({ camperInfo }) => (
  
  <section className={css.box}>
    <VehicleListOptions data={camperInfo} />
    <section className={css.desc}>
      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <p>Form</p>
          <p>{camperInfo.form}</p>
        </li>
        <li className={css.item}>
          <p>Length</p>
          <p>{camperInfo.length}</p>
        </li>
        <li className={css.item}>
          <p>Width</p>
          <p>{camperInfo.width}</p>
        </li>
        <li className={css.item}>
          <p>Height</p>
          <p>{camperInfo.height}</p>
        </li>
        <li className={css.item}>
          <p>Tank</p>
          <p>{camperInfo.tank}</p>
        </li>
        <li className={css.item}>
          <p>Consumption</p>
          <p>{camperInfo.consumption}</p>
        </li>
      </ul>
    </section>
  </section>
);
export default VehicleDetails;