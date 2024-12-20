import { useParams } from "react-router-dom";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  useEffect,
  useState,
} from "react";




import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import VehicleDetails from "../../components/VehicleDetails/VehicleDetails.jsx";
import CamperCard from "../../components/CamperCard/CamperCard.jsx";

import {
  selectIsRefreshing,
  selectCampersInfo,
} from "../../redux/campers/selectors.js";
import { getCamperById } from "../../redux/campers/operations.js";

import css from "./DetailsPage.module.css";
import Reviews from "../../components/Reviews/Reviews.jsx";
import Loader from "../../components/Loader/Loader.jsx";

function CamperInfoPage() {
  const dispatch = useDispatch();
  const camperInfo = useSelector(
    selectCampersInfo,
  );
  console.log(camperInfo);
  const loader = useSelector(
    selectIsRefreshing,
  );

  const { id } = useParams();
  console.log(id); 

  const [features, setFeatures] =
    useState(true);
  const [reviews, setReviews] =
    useState(false);

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [dispatch, id]);
  

  const handleClick = (name) => {
    if (name === "features") {
      setFeatures(true);
      setReviews(false);
    } else {
      setFeatures(false);
      setReviews(true);
    }
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        Object.keys(camperInfo)
          .length !== 0 && (
          <div
            className={css.container}
          >
            <CamperCard
              camperInfo={camperInfo}
            />
            <div
              className={css.navigation}
            >
              <button
                className={`${
                  css.btn
                } ${
                  features &&
                  css.isActive
                }`}
                onClick={() =>
                  handleClick(
                    "features",
                  )
                }
              >
                <h3>Features</h3>
              </button>
              <button
                className={`${
                  css.btn
                } ${
                  reviews &&
                  css.isActive
                }`}
                onClick={() =>
                  handleClick("reviews")
                }
              >
                <h3>Reviews</h3>
              </button>
            </div>
            <div
              className={
                css.detail_info_form
              }
            >
              {features ? (
                <VehicleDetails
                  camperInfo={camperInfo}
                />
              ) : (
                <Reviews
                  reviews={
                    camperInfo.reviews
                  }
                />
              )}
              <BookingForm />
            </div>
          </div>
        )
      )}
    </>
  );
}

export default CamperInfoPage;




// import css from './CatalogPage.module.css';
// import FilterPanel from '../../components/FilterPanel/FilterPanel.jsx';
// import Section from '../../components/Section/Section.jsx';



// const CatalogPage = () => {
//   return (
//     <Section className={css.section}>
//       <FilterPanel />
//     </Section>
//   );
// };

// export default CatalogPage;