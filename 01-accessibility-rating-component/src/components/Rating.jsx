import { useState } from "react";

export default function Rating(params) {
  const [ratings, setRatings] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: true,
  });

  return (
    <>
      <div className="container">
        <div className="interaction-bg">
          <img src="/src/assets/images/icon-star.svg" alt="favourite icon" />
        </div>
        <h1>How did we do?</h1>
        <p className="text-muted">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
          <span className="rating-container">
            {Object.keys(ratings).map((item) => {
              console.log(ratings[item]);
              return (
                <div
                  className={`interaction-bg ${ratings[item] && "active"}`}
                  key={item}
                >
                  {item}
                </div>
              );
            })}
          </span>
        </p>
        <button>SUBMIT</button>
        {/* Rating state end
      Thank you state start
      You selected
      Add rating here
      out of 5 Thank you! We appreciate you taking the time to give a rating. If
      you ever need more support, don’t hesitate to get in touch!
      Thank you state end  */}
      </div>
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
