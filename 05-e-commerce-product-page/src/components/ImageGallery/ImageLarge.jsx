import { motion } from "framer-motion";
import "./ImageLarge.scss";

export const ImageLarge = ({ imageObj, setLightBox }) => {
  return (
    <button
      className="image-large"
      onClick={() => {
        setLightBox((prev) => !prev);
      }}
      aria-label="Open image in large"
    >
      <motion.img
        key={imageObj.full}
        src={imageObj.full}
        alt={imageObj.alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      ></motion.img>
    </button>
  );
};
