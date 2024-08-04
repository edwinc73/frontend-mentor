import { useState } from "react";
import favouriteIcon from "../images/icon-star.svg";
import thankYouImage from "../images/illustration-thank-you.svg";
export default function Rating() {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  const handleClick = (e) => {
    setShowError(false);
    setRating(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (rating == null) {
      setShowError(true);
      return;
    }
    setSubmitted(true);
  };

  const Rating = () => {
    return (
      <form id="rating" onSubmit={submit}>
        <div className="interaction-bg">
          <img src={favouriteIcon} alt="favourite icon" />
        </div>
        <label htmlFor="">
          <h1>How did we do?</h1>
        </label>
        <p className="text-muted">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <fieldset
          className="rating-container"
          id="rating-container"
          aria-description="Please give a rating from 1- 5"
        >
          <label
            className={`interaction-bg text-muted ${rating == 1 && "active"}`}
            htmlFor="1"
          >
            <input
              type="radio"
              name="1"
              id="1"
              value={1}
              onChange={handleClick}
            />
            1
          </label>
          <label
            className={`interaction-bg text-muted ${rating == 2 && "active"}`}
            htmlFor="2"
          >
            <input
              type="radio"
              name="2"
              id="2"
              value={2}
              onChange={handleClick}
            />
            2
          </label>
          <label
            className={`interaction-bg text-muted ${rating == 3 && "active"}`}
            htmlFor="3"
          >
            <input
              type="radio"
              name="3"
              id="3"
              value={3}
              onChange={handleClick}
            />
            3
          </label>
          <label
            className={`interaction-bg text-muted ${rating == 4 && "active"}`}
            htmlFor="4"
          >
            <input
              type="radio"
              name="4"
              id="4"
              value={4}
              onChange={handleClick}
            />
            4
          </label>
          <label
            className={`interaction-bg text-muted ${rating == 5 && "active"}`}
            htmlFor="5"
          >
            <input
              type="radio"
              name="5"
              id="5"
              value={5}
              onChange={handleClick}
            />
            5
          </label>
        </fieldset>
        {showError && (
          <small
            className="text-warning"
            id="error-message"
            aria-details="rating-container"
          >
            Please selecet a number
          </small>
        )}

        <button>SUBMIT</button>
      </form>
    );
  };

  const ThankYou = () => {
    return (
      <div className="flex-container">
        <img
          src={thankYouImage}
          alt="successful feedback submission, thank you"
        />
        <p className="rating-pill ">You selected {rating} out of 5</p>
        <div className="text-container text-center">
          <h2 style={{ margin: "0 0 12px", padding: "0" }}>Thank you!</h2>
          <p className="text-muted text-center">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <article className="container">
        {submitted ? <ThankYou /> : <Rating />}
      </article>
    </>
  );
}
