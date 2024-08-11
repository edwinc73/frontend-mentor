import { useState } from "react";
import "./ImageGallery.scss";
import nextIcon from "/src/assets/images/icon-next.svg";
import prevIcon from "/src/assets/images/icon-previous.svg";

import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function ImageGallery({ image }) {
  const [currentImageId, setCurrentImageId] = useState(0);

  const imageObj = image[currentImageId];

  return (
    <div id="image-gallery">
      <button className="image-large">
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
      <div className="image-nav">
        <button
          className="prev"
          onClick={() => {
            setCurrentImageId((prev) => {
              if (prev <= 0) return prev;
              return prev - 1;
            });
          }}
        >
          <img src={prevIcon} alt="see-next-image" />
        </button>
        <button
          className="next"
          onClick={() => {
            setCurrentImageId((prev) => {
              if (prev >= image.length - 1) return prev;
              return prev + 1;
            });
          }}
        >
          <img src={nextIcon} alt="see-prev-image" />
        </button>
      </div>
      <div className="image-previews">
        {image.map((img) => {
          return (
            <button
              key={img.imageId}
              onClick={() => {
                console.log(img);
                setCurrentImageId(img.imageId - 1);
              }}
            >
              <div
                className={`image-thumbnail ${imageObj == img ? "active" : ""}`}
              >
                <img src={img.thumbnail} alt={img.alt} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

ImageGallery.propTypes = {
  image: PropTypes.array,
};
