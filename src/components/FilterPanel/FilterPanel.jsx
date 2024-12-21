// import clsx from "clsx";

// import { Checkbox } from "../Checkbox/Checkbox.jsx";

// // import sprite from "../../images/sprite.svg";

// import css from "./FilterPanel.module.css";

// const FilterPanel = () => {
//   return (
//     <>
//       <form className={css.box}>
//         {/* <label className={css.label}>
//           Location
//           <div className={css.boxInput}>
//             <svg className={css.svg} width={20} height={20}>
//               <use href={`${sprite}#icon-map`}></use>
//             </svg>
//             <input className={css.input} type="text" placeholder="City" />
//           </div>
//         </label> */}
//         <p className={css.textForm}>Filters</p>
//         <h2 className={css.titleForm}>Vehicle equipment</h2>
//         <div className={css.line}></div>

//         <div className={css.customCheckboxes}>
//           <Checkbox id={"checkbox1"} icon={"icon-wind"} label={"AC"} />
//           <Checkbox
//             id={"checkbox2"}
//             icon={"icon-diagram"}
//             label={"Automatic"}
//           />
//           <Checkbox id={"checkbox3"} icon={"icon-fuel-pump"} label={"Petrol"} />
//           <Checkbox id={"checkbox4"} icon={"icon-cup-hot"} label={"Kitchen"} />
//           <Checkbox id={"checkbox5"} icon={"icon-tv"} label={"TV"} />
//           <Checkbox
//             id={"checkbox6"}
//             icon={"icon-shower"}
//             label={"Bathroom"}
//           />
//           <Checkbox id={"checkbox7"} icon={"icon-ui-radios"} label={"Radio"} />
//           <Checkbox
//             id={"checkbox8"}
//             icon={"icon-solar_fridge-outline"}
//             label={"Refrigerator"}
//           />
//           <Checkbox
//             id={"checkbox9"}
//             icon={"icon-ion_water-outline"}
//             label={"Water"}
//           />
//           <Checkbox id={"checkbox10"} icon={"icon-hugeicons_gas"} label={"Gas"} />
//           <Checkbox
//             id={"checkbox11"}
//             icon={"icon-lucide_microwave"}
//             label={"Microwave"}
//           />
//         </div>

//         <h2 className={css.titleForm}>Vehicle type</h2>
//         <div className={css.line}></div>

//         <div className={clsx(css.customCheckboxes, css.boxCheck)}>
//           <Checkbox id={"box1"} icon={"icon-bi_grid-1x2"} label={"Van"} />
//           <Checkbox
//             id={"box2"}
//             icon={"icon-bi_grid"}
//             label={"Fully Integrated"}
//           />
//           <Checkbox
//             id={"box3"}
//             icon={"icon-bi_grid-3x3-gap"}
//             label={"Alcove"}
//           />
//         </div>
//         <button className={css.btn} type="submit">
//           Search
//         </button>
//       </form>
//     </>
//   );
// };

// export default FilterPanel;

// import Icon from '../Icons/Icon.jsx';
// import css from './FilterPanel.module.css';

// const FilterPanel = (params) => {
//   return (
//     <label
//       className={`${css.label} ${params.checked ? css.checked : ''}`}
//     >
//       <input
//         type={params.type}
//         id={params.id}
//         checked={params.checked}
//         onChange={params.onChange}
//         className={css.input}
//       />
//       <Icon id={params.id} width={32} height={32} />
//       <span className={css.text}>
//         {params.name ? params.name : params.id}
//       </span>
//     </label>
//   );
// };

// export default FilterPanel;


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