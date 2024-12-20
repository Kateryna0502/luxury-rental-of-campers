import { useSelector } from "react-redux";
import { selectCampersInfo } from "../../redux/campers/selectors";

import css from "./Reviews.module.css";

const Reviews = () => {
  const camper = useSelector(selectCampersInfo);

  return (
    <ul className={css.list}>
      {camper.reviews &&
        camper.reviews.map((review, i) => {
          const stars = Array.from({ length: 5 }, (_, index) => {
            return index < review.reviewer_rating ? (
              <svg key={index} width="16px" height="16px">
                <use href="/sprite.svg#icon-Property-1Pressed" />
              </svg>
            ) : (
              <svg key={index} width="16px" height="16px">
                <use href="/sprite.svg#icon-Property-1Default" />
              </svg>
            );
          });
          return (
            <li key={i} className={css.item}>
              <div className={css.blockWrapper}>
                <div className={css.avatar}>{review.reviewer_name[0]}</div>
                <div>
                  <h4 className={css.title}>{review.reviewer_name}</h4>
                  <span className={css.starsList}>{stars}</span>
                </div>
              </div>
              <p className={css.desc}>{review.comment}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Reviews;


// import  { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const ReviewsSection = ({ reviews }) => {
//   const [allReviews, setAllReviews] = useState(reviews || []);

//   const initialValues = {
//     user: "",
//     comment: "",
//     rating: 5,
//   };

//   const validationSchema = Yup.object({
//     user: Yup.string().required("Name is required"),
//     comment: Yup.string().required("Comment is required"),
//     rating: Yup.number().min(1).max(5).required(),
//   });

//   const handleSubmit = (values, { resetForm }) => {
//     setAllReviews((prev) => [...prev, values]);
//     resetForm();
//   };

//   return (
//     <div className="reviews-section">
//       <h2>Reviews</h2>
//       {allReviews.length > 0 ? (
//         allReviews.map((review, index) => (
//           <div key={index} className="review">
//             <p>
//               <strong>{review.user}</strong>: {review.comment} -{" "}
//               <span>{review.rating}/5</span>
//             </p>
//           </div>
//         ))
//       ) : (
//         <p>No reviews yet. Be the first to leave one!</p>
//       )}

//       <h3>Add a Review</h3>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form className="add-review-form">
//           <div>
//             <label>Your Name:</label>
//             <Field type="text" name="user" />
//             <ErrorMessage name="user" component="div" className="error" />
//           </div>
//           <div>
//             <label>Comment:</label>
//             <Field as="textarea" name="comment" />
//             <ErrorMessage name="comment" component="div" className="error" />
//           </div>
//           <div>
//             <label>Rating:</label>
//             <Field as="select" name="rating">
//               {[5, 4, 3, 2, 1].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </Field>
//           </div>
//           <button type="submit">Submit Review</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default ReviewsSection;