

// import { useState } from 'react';
// import FilterPanel from '../FilterPanel/FilterPanel.jsx';

// const FiltersContainer = () => {
//   const [filters, setFilters] = useState([
//     { id: 'ac', name: 'AC', iconId: 'ac', type: 'checkbox', checked: false },
//     { id: 'automatic', name: 'Automatic', iconId: 'automatic', type: 'checkbox', checked: false },
//     { id: 'kitchen', name: 'Kitchen', iconId: 'kitchen', type: 'checkbox', checked: false },
//     { id: 'tv', name: 'TV', iconId: 'tv', type: 'checkbox', checked: false },
//     { id: 'bathroom', name: 'Bathroom', iconId: 'bathroom', type: 'checkbox', checked: false },
//   ]);

//   const handleChange = (id) => {
//     setFilters((prevFilters) =>
//       prevFilters.map((filter) =>
//         filter.id === id ? { ...filter, checked: !filter.checked } : filter
//       )
//     );
//   };

//   return (
//     <div>
//       {filters.map((filter) => (
//         <FilterPanel
//           key={filter.id}
//           id={filter.id}
//           name={filter.name}
//           iconId={filter.iconId}
//           type={filter.type}
//           checked={filter.checked}
//           onChange={() => handleChange(filter.id)}
//         />
//       ))}
//     </div>
//   );
// };

// export default FiltersContainer;