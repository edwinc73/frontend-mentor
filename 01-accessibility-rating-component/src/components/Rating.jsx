import { useState } from "react";

export default function Rating() {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  const handleClick = (e) => {
    setShowError(false);
    setRating(e.target.dataset.value);
  };

  const submit = () => {
    if (rating == null) {
      setShowError(true);
      return;
    }
    setSubmitted(true);
  };

  const Rating = () => {
    return (
      <div id="rating">
        <div className="interaction-bg">
          <img src="/src/assets/images/icon-star.svg" alt="favourite icon" />
        </div>
        <h1>How did we do?</h1>
        <p className="text-muted">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <span
          className="rating-container"
          id="rating-container"
          aria-description="Please give a rating from 1- 5"
        >
          <div
            onClick={handleClick}
            id="1"
            data-value="1"
            className={`interaction-bg text-muted ${rating == 1 && "active"}`}
            tabIndex={1}
          >
            1
          </div>
          <div
            onClick={handleClick}
            id="2"
            data-value="2"
            className={`interaction-bg text-muted ${rating == 2 && "active"}`}
            tabIndex={2}
          >
            2
          </div>
          <div
            onClick={handleClick}
            id="3"
            data-value="3"
            className={`interaction-bg text-muted ${rating == 3 && "active"}`}
            tabIndex={3}
          >
            3
          </div>
          <div
            onClick={handleClick}
            id="4"
            data-value="4"
            className={`interaction-bg text-muted ${rating == 4 && "active"}`}
            tabIndex={4}
          >
            4
          </div>
          <div
            onClick={handleClick}
            id="5"
            data-value="5"
            className={`interaction-bg text-muted ${rating == 5 && "active"}`}
            tabIndex={5}
          >
            5
          </div>
        </span>
        {showError && (
          <small
            className="text-warning"
            id="error-message"
            aria-details="rating-container"
          >
            Please selecet a number
          </small>
        )}

        <button onClick={submit} tabIndex={6}>
          SUBMIT
        </button>
      </div>
    );
  };

  const ThankYou = () => {
    return (
      <article>
        <img
          src="/src/assets/images/illustration-thank-you.svg"
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
      </article>
    );
  };

  return (
    <>
      <div className="container">{submitted ? <ThankYou /> : <Rating />}</div>
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://github.com/edwinc73" target="_blank">
          Edwin Cheng
        </a>
        .
      </div>
    </>
  );
}
