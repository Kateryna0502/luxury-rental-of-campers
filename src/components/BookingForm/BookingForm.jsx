import clsx from "clsx";
import { ToastContainer, toast } from "react-toastify";

import css from "./BookingForm.module.css";

const BookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Thank you for choosing us! We will call you later");
    e.target.reset();
  };

  return (
    <div className={css.mainWrapper}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.desc}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit} className={css.formWrapper}>
        <div className={css.inputsWrapper}>
          <input type="text" name="name" placeholder="Name*" required />
          <input type="email" name="email" placeholder="Email*" required />

          <input
            placeholder="Booking date*"
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            id="date"
            name="bookingDate"
            required
          />
          <textarea
            className={css.comment}
            name="comment"
            placeholder="Comment"
          />
        </div>
        <button type="submit" className={clsx("accentButton", css.button)}>
          Send
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default BookingForm;
