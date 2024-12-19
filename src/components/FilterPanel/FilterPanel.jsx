

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./FilterPanel.module.css"; // Підключення CSS Module
import { fetchCampers } from "../../api/campersAPI";

// Схема валідації форми
const FilterSchema = Yup.object().shape({
  location: Yup.string().required("Location is required"),
  equipment: Yup.array(),
  vehicleType: Yup.array(),
});

const FilterPanel = () => {
  // Фільтри обладнання та типу транспортного засобу
  const equipmentOptions = [
    { value: "automatic", label: "Automatic" },
    { value: "kitchen", label: "Kitchen" },
    { value: "tv", label: "TV" },
    { value: "bathroom", label: "Bathroom" },
  ];

  const vehicleTypeOptions = [
    { value: "van", label: "Van" },
    { value: "fully-integrated", label: "Fully Integrated" },
    { value: "alcove", label: "Alcove" },
  ];

  // Функція для відправки даних на бекенд
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("Submitting values:", values);

      const response = await fetchCampers("/vehicles/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("API Response:", data);
      alert("Results fetched successfully!");
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Filter Vehicles</h2>
      <Formik
        initialValues={{
          location: "Kyiv, Ukraine",
          equipment: [],
          vehicleType: [],
        }}
        validationSchema={FilterSchema}
        onSubmit={handleSubmit}
      >
        {({ values, isSubmitting }) => (
          <Form className={styles.form}>
            {/* Поле Локації */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Location</label>
              <Field
                name="location"
                placeholder="Enter location"
                className={styles.input}
              />
            </div>

            {/* Фільтри обладнання */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Vehicle Equipment</label>
              <div className={styles.options}>
                {equipmentOptions.map((option) => (
                  <label key={option.value} className={styles.checkboxLabel}>
                    <Field
                      type="checkbox"
                      name="equipment"
                      value={option.value}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Фільтри типу транспортного засобу */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Vehicle Type</label>
              <div className={styles.options}>
                {vehicleTypeOptions.map((option) => (
                  <label key={option.value} className={styles.checkboxLabel}>
                    <Field
                      type="checkbox"
                      name="vehicleType"
                      value={option.value}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Кнопка для надсилання */}
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Searching..." : "Search"}
            </button>

            {/* Вивід поточних значень */}
            <pre className={styles.debugBox}>
              {JSON.stringify(values, null, 2)}
            </pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FilterPanel;

// import { Field, Form, Formik } from 'formik';
// import Container from '../Container/Container.jsx';
// import css from './FilterBar.module.css';

// const FilterBar = () => {
//   return (
//     <Formik>
//       <Form>
//         <Container className={css.container}>
//           <label htmlFor='location' className={css.label}>
//             Location
//           </label>
//           <Field
//             type='text'
//             name='location'
//             placeholder='Kyiv, Ukraine'
//             className={css.field}
//           />
//         </Container>
//         <h2 className={css.desc}>Filter</h2>
//         <Container className={css.box}>
//           <label htmlFor='equipment' className={css.vehicle}>
//             Vehicle equipment
//           </label>
//         </Container>
//       </Form>
//     </Formik>
//   );
// };

// export default FilterBar;


// import { useDispatch } from 'react-redux';
// import { setFilters } from '../redux/campersSlice';

// const FilterBar = () => {
//   const dispatch = useDispatch();

//   const handleFilter = (e) => {
//     dispatch(setFilters({ location: e.target.value }));
//   };

//   return (
//     <input type="text" placeholder="Location" onChange={handleFilter} />
//   );
// };

// export default FilterBar;