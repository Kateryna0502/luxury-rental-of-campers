import VehicleListOptions from '../VehicleListOptions/VehicleListOptions.jsx';
import css from './VehicleDetails.module.css';

const VehicleDetails = ({ campersInfo }) => (
  <section className={css.box}>
    <VehicleListOptions data={campersInfo} />
    <section className={css.desc}>
      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <p>Form</p>
          <p>{campersInfo.form}</p>
        </li>
        <li className={css.item}>
          <p>Length</p>
          <p>{campersInfo.length}</p>
        </li>
        <li className={css.item}>
          <p>Width</p>
          <p>{campersInfo.width}</p>
        </li>
        <li className={css.item}>
          <p>Height</p>
          <p>{campersInfo.height}</p>
        </li>
        <li className={css.item}>
          <p>Tank</p>
          <p>{campersInfo.tank}</p>
        </li>
        <li className={css.item}>
          <p>Consumption</p>
          <p>{campersInfo.consumption}</p>
        </li>
      </ul>
    </section>
  </section>
);

export default VehicleDetails;