import TruckOptions from "../TruckOptions/TruckOptions";
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
        <TruckOptions
          option={data.transmission}
          id="transmission"
        />
      </li>
      <li>
        <TruckOptions
          option={data.engine}
          id="engine"
        />
      </li>
      {options.map((option) => (
        <li key={option}>
          <TruckOptions
            option={option}
            id={option}
          />
        </li>
      ))}
    </ul>
  );
}