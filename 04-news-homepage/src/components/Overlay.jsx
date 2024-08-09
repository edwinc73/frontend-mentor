import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

export default function Overlay({ isOpen }) {
  return isOpen ? (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      >
        <div className="faded-bg"></div>
      </motion.div>
    </AnimatePresence>
  ) : null;
}

Overlay.propTypes = {
  isOpen: PropTypes.bool,
};
