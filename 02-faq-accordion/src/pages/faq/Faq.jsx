import { motion } from "framer-motion";
import starImage from "../../assets/images/icon-star.svg";
import FaqItem from "../../components/FaqItem";
import { config } from "../../config.js";
export default function Faq() {
  return (
    <motion.div layout transition={{ duration: 0.5 }}>
      <div
        className="container col-10 col-md-5 col-xl-4 p-3 p-sm-4 bg-white round"
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
              <article key={item.id}>
                <FaqItem {...item}></FaqItem>
              </article>
            ))}
          </div>
        </>
      </div>
    </motion.div>
  );
}
