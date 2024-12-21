import { useDispatch } from "react-redux";
import { useEffect } from "react";

import VehicleEquipment from "../../components/VehicleEquipment/VehicleEquipment.jsx";
import VehicleType from "../../components/VehicleType/VehicleType.jsx";

import Button from "../../components/Button/Button.jsx";
import Location from "../../components/Location/Location.jsx";

import CampersList from "../../components/CampersList/CampersList.jsx";

import { resetItems } from "../../redux/campers/action.js";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetItems());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <section className={css.filters}>
        <Location />
        <VehicleEquipment />
        <VehicleType />
        <Button variant="search">
          Search
        </Button>
      </section>
      <section className={css.trucks}>
        <CampersList />
      </section>
    </div>
  );
};

export default CatalogPage;