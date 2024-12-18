import { useDispatch } from 'react-redux';
import { setFilters } from '../redux/campersSlice';

const FilterBar = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(setFilters({ location: e.target.value }));
  };

  return (
    <input type="text" placeholder="Location" onChange={handleFilter} />
  );
};

export default FilterBar;