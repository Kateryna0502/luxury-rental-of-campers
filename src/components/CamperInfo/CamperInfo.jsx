import Button from "../Button/Button.jsx";
import Icon from "../Icons/Icon.jsx";
import VehicleListOptions from "../VehicleListOptions/VehicleListOptions.jsx";

import css from "./CamperInfo.module.css";

const CamperInfo = ({ data, onClick, favorites }) => {
  const isFavorite = favorites.includes(data.id);

  return (
    <div className={css.item}>
      <img
        className={css.img}
        src={data.gallery[0].original}
        alt="Camper image"
      />
      <section className={css.content}>
        <section>
          <div className={css.name_price}>
            <h2>{data.name}</h2>
            <div className={css.price}>
              <h2>&euro;{data.price.toFixed(2)}</h2>
              <button
                className={css.favorite}
                onClick={() => onClick(data.id)}
              >
                <Icon
                  id="heart"
                  width={26}
                  height={24}
                  color={isFavorite && "button"}
                />
              </button>
            </div>
          </div>
          <ul className={css.rating_location}>
            <li>
              <Icon id="pressed" width={16} height={14} color="rating" />
              <p>
                {data.rating} ({data.reviews.length} Reviews)
              </p>
            </li>
            <li>
              <Icon id="map" width={16} height={14} />
              <p>{data.location}</p>
            </li>
          </ul>
        </section>
        <p className={css.description}>{data.description}</p>
        <VehicleListOptions data={data} />
        <Button variant="showMore" id={data.id}>
          Show more
        </Button>
      </section>
    </div>
  );
};

export default CamperInfo;