import VehicleOptions from "../VehicleOptions/VehicleOptions.jsx";
import css from "./VehicleListOptions.module.css";

export default function VehicleListOptions({
  data,
}) {
  const options = Object.keys(
    data,
  ).filter(
    (option) => data[option] === true,
  );

  return (
    <ul className={css.ul}>
      <li>
        <VehicleOptions
          option={data.transmission}
          id="transmission"
        />
      </li>
      <li>
        <VehicleOptions
          option={data.engine}
          id="engine"
        />
      </li>
      {options.map((option) => (
        <li key={option}>
          <VehicleOptions
            option={option}
            id={option}
          />
        </li>
      ))}
    </ul>
  );
}