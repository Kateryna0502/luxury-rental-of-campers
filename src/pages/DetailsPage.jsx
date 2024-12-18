


// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { fetchCamperById } from '../api/campersAPI';
// import Loader from '../components/Loader';

// const CamperDetailsPage = () => {
//   const { id } = useParams();
//   const [camper, setCamper] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchCamperById(id).then((data) => {
//       setCamper(data);
//       setLoading(false);
//     });
//   }, [id]);

//   return loading ? (
//     <Loader />
//   ) : (
//     <div>
//       <h1>{camper.name}</h1>
//       <p>{camper.description}</p>
//       <img src={camper.image} alt={camper.name} />
//     </div>
//   );
// };

// export default CamperDetailsPage;