// import css from "./DetailsPage.module.css";



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../api/campersApi.jsx";
import BookingForm from "../components/BookingForm.jsx";

const DetailsPage = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);

  useEffect(() => {
    const getCamper = async () => {
      const data = await fetchCamperById(id);
      setCamper(data);
    };
    getCamper();
  }, [id]);

  return (
    <div>
      {camper ? (
        <>
          <h1>{camper.name}</h1>
          <img src={camper.image} alt={camper.name} />
          <p>€{camper.price}.00</p>
          <p>{camper.description}</p>
          <BookingForm />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailsPage;