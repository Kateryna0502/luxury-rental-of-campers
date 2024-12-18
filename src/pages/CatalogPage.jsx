import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadCampers, incrementPage } from '../redux/campersSlice';
import CamperCard from '../components/CamperCard';
import Loader from '../components/Loader';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, status, page, filters } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(loadCampers({ filters, page }));
  }, [dispatch, filters, page]);

  return (
    <div>
      <div>
        {items.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </div>
      {status === 'loading' && <Loader />}
      <button onClick={() => dispatch(incrementPage())}>Load More</button>
    </div>
  );
};

export default CatalogPage;