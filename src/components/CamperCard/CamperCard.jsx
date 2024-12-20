// import { Link } from 'react-router-dom';

// const CamperCard = ({ camper, onFavorite }) => {
//   return (
//     <div className="camper-card">
//       <img src={camper.image} alt={camper.name} />
//       <h3>{camper.name}</h3>
//       <p>Price: {camper.price.toFixed(2)}</p>
//       <button onClick={() => onFavorite(camper.id)}>Add to Favorites</button>
//       <Link to={`/catalog/${camper.id}`} target="_blank">
//         <button>Show More</button>
//       </Link>
//     </div>
//   );
// };

// export default CamperCard;

import Icon from '../Icons/Icon.jsx';
import css from './CamperCard.module.css';

const CamperCard = ({ camperInfo }) => (
  <section className={css.description}>
    <section className={css.mainInfo}>
      <h2>{camperInfo.name}</h2>
      <div className={css.ratingDescr}>
        <ul className={css.ratingLocation}>
          <li>
            <Icon id="star" width={16} height={16} color="rating" />
            <p>
              {camperInfo.rating} ({camperInfo.reviews.length} Reviews)
            </p>
          </li>
          <li>
            <Icon id="map" width={16} height={14} />
            <p>{camperInfo.location}</p>
          </li>
        </ul>
        <div className={css.price}>
          <h2>&euro;{camperInfo.price.toFixed(2)}</h2>
        </div>
      </div>
    </section>
    <ul className={css.imgGallery}>
      {camperInfo.gallery.map((img, index) => (
        <li key={index} className={css.imgItem}>
          <img src={img.original} alt="Camper photo" className={css.img} />
        </li>
      ))}
    </ul>
    <p>{camperInfo.description}</p>
  </section>
);

export default CamperCard;