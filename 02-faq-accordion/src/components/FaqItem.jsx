import PropTypes from "prop-types";
import plusIcon from "../../src/assets/images/icon-plus.svg";
import minusIcon from "../../src/assets/images/icon-minus.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqItem({ id, question, answer, open, handleClick }) {
  return (
    <AnimatePresence>
      <div className=" mt-4 d-flex flex-column align-items-center">
        <div className="p-0 w-100 d-flex align-items-center">
          <button
            aria-expanded={open}
            onClick={handleClick}
            aria-controls={`answer-${id}`}
            className="icon-container text-dark-purple fw-bold d-flex justify-content-between align-items-center col-12 p-0"
            data-value={id}
          >
            {question}
            <img
              className="question-icon "
              src={open ? minusIcon : plusIcon}
              alt={open ? "collapse question icon" : "expand question icon"}
              data-value={id}
            />
          </button>
        </div>
        {open && (
          <motion.div
            layout
            initial={{ opacity: 0, transform: "translateY(10px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0, transform: "translateY(10px)" }}
            transition={{ duration: 0.2 }}
          >
            <div
              aria-labelledby={`question-${id}`}
              className="text-muted-purple my-3 mb-5"
              aria-hidden="true"
              id={`answer-${id}`}
            >
              <p className="p-0 m-0">{answer}</p>
            </div>
          </motion.div>
        )}
      </div>
      <hr />
    </AnimatePresence>
  );
}
