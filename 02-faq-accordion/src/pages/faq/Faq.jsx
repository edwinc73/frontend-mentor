import { motion } from "framer-motion";
import starImage from "../../assets/images/icon-star.svg";
import FaqItem from "../../components/FaqItem";
import { config } from "../../config.js";
import { useState } from "react";
export default function Faq() {
  const [open, setOpen] = useState(1);
  const handleClick = (e) => {
    console.log(e.target);
    setOpen((prev) => {
      if (prev == e.target.dataset.value) {
        return false;
      }
      return e.target.dataset.value;
    });
  };

  return (
    <div
      className="container col-10 col-md-5 col-xl-4 p-3 p-sm-4 bg-white round animate"
      style={{ boxSizing: "content-box" }}
    >
      <>
        <div id="faq-title" className="d-flex align-items-center">
          <div className="d-inline">
            <img
              className="star-icon"
              src={starImage}
              alt="Star icon, referring to the Frequently Asked Questions"
            />
          </div>
          <h2
            className="fw-bold text-dark-purple p-0 m-0 col-10 d-inline"
            style={{
              fontSize: "2.5rem",
            }}
          >
            FAQs
          </h2>
        </div>
        <div id="faq-items" className="mt-2">
          {config.faq.map((item) => (
            <div className="faq-item" key={item.id}>
              <FaqItem
                {...item}
                open={open == item.id}
                handleClick={handleClick}
              ></FaqItem>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}
