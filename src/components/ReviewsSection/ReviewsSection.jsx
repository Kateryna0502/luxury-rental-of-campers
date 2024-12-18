import  { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ReviewsSection = ({ reviews }) => {
  const [allReviews, setAllReviews] = useState(reviews || []);

  const initialValues = {
    user: "",
    comment: "",
    rating: 5,
  };

  const validationSchema = Yup.object({
    user: Yup.string().required("Name is required"),
    comment: Yup.string().required("Comment is required"),
    rating: Yup.number().min(1).max(5).required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    setAllReviews((prev) => [...prev, values]);
    resetForm();
  };

  return (
    <div className="reviews-section">
      <h2>Reviews</h2>
      {allReviews.length > 0 ? (
        allReviews.map((review, index) => (
          <div key={index} className="review">
            <p>
              <strong>{review.user}</strong>: {review.comment} -{" "}
              <span>{review.rating}/5</span>
            </p>
          </div>
        ))
      ) : (
        <p>No reviews yet. Be the first to leave one!</p>
      )}

      <h3>Add a Review</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="add-review-form">
          <div>
            <label>Your Name:</label>
            <Field type="text" name="user" />
            <ErrorMessage name="user" component="div" className="error" />
          </div>
          <div>
            <label>Comment:</label>
            <Field as="textarea" name="comment" />
            <ErrorMessage name="comment" component="div" className="error" />
          </div>
          <div>
            <label>Rating:</label>
            <Field as="select" name="rating">
              {[5, 4, 3, 2, 1].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </Field>
          </div>
          <button type="submit">Submit Review</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ReviewsSection;