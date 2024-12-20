import Button from "../Button/Button.jsx";
import Loader from "../Loader/Loader.jsx";
import CamperInfo from "../CamperInfo/CamperInfo.jsx";

import {
  useEffect,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import { getAllCampers } from "../../redux/campers/operations.js";
import {
  selectIsRefreshing,
  selectItems,
  selectPagination,
  selectTotal,
} from "../../redux/campers/selectors.js";
import { setPage } from "../../redux/campers/action.js";

import css from "./CampersList.module.css";

const CampersList = () => {
  const dispatch = useDispatch();

  const loader = useSelector(selectIsRefreshing);
  const totalItems = useSelector(selectTotal);
  const pagination = useSelector(selectPagination);
  const { page, limit } = pagination;

  const items = useSelector(selectItems);
  const totalPages = Math.ceil(totalItems / limit);

  const handleClickLoad = () => {
    dispatch(setPage(page + 1));
  };

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch, page]);

  // Favorites functionality
  const loadFromLocalStorage = () => {
    const favoritesTrucks = localStorage.getItem('favoritesTrucks');
    return favoritesTrucks ? JSON.parse(favoritesTrucks) : [];
  };

  const [favorites, setFavorites] = useState(loadFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('favoritesTrucks', JSON.stringify(favorites));
  }, [favorites]);

  const handleButtonClick = (id) => {
    if (favorites.includes(id)) {
      const newItems = favorites.filter((i) => i !== id);
      setFavorites(newItems);
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return loader ? (
    <Loader />
  ) : (
    <div>
      <ul className={css.list}>
        {items.map((camper) => (
          <li key={camper.id} className={css.item}>
            <CamperInfo
              data={camper}
              onClick={handleButtonClick}
              favorites={favorites}
            />
          </li>
        ))}
      </ul>
      <Button
        variant="loadMore"
        loadMore={handleClickLoad}
        disabled={page === totalPages}
      >
        Load more
      </Button>
    </div>
  );
};

export default CampersList;