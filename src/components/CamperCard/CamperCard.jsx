import { Link } from 'react-router-dom';

const CamperCard = ({ camper, onFavorite }) => {
  return (
    <div className="camper-card">
      <img src={camper.image} alt={camper.name} />
      <h3>{camper.name}</h3>
      <p>Price: {camper.price.toFixed(2)}</p>
      <button onClick={() => onFavorite(camper.id)}>Add to Favorites</button>
      <Link to={`/catalog/${camper.id}`} target="_blank">
        <button>Show More</button>
      </Link>
    </div>
  );
};

export default CamperCard;