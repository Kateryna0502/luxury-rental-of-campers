
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { useState } from "react";

const BookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    startDate: null,
    endDate: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    startDate: Yup.date()
      .required("Start date is required")
      .nullable(),
    endDate: Yup.date()
      .required("End date is required")
      .nullable(),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Booking details:", values);
    alert("Your booking has been submitted!");
    resetForm();
  };

  return (
    <div className="booking-form">
      <h2>Book This Camper</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div>
              <label>Name:</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label>Start Date:</label>
              <DatePicker
                selected={values.startDate}
                onChange={(date) => setFieldValue("startDate", date)}
                dateFormat="yyyy/MM/dd"
                minDate={new Date()} // Заборона обирати минулі дати
              />
              <ErrorMessage name="startDate" component="div" className="error" />
            </div>
            <div>
              <label>End Date:</label>
              <DatePicker
                selected={values.endDate}
                onChange={(date) => setFieldValue("endDate", date)}
                dateFormat="yyyy/MM/dd"
                minDate={values.startDate || new Date()} // Кінець після початку
              />
              <ErrorMessage name="endDate" component="div" className="error" />
            </div>
            <button type="submit">Submit Booking</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;