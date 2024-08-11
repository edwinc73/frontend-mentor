import { useState } from "react";
import "./ImageGallery.scss";

import PropTypes from "prop-types";

export default function ImageGallery({ image }) {
  const [currentImage, setCurrentImage] = useState(image[0]);

  return (
    <div id="image-gallery">
      <button className="image-large">
        <img src={currentImage.full} alt={currentImage.alt} />
      </button>
      <div className="image-previews">
        {image.map((img) => {
          return (
            <button
              key={img.imageId}
              onClick={() => {
                console.log(img);
                setCurrentImage(img);
              }}
            >
              <div
                className={`image-thumbnail ${
                  currentImage == img ? "active" : ""
                }`}
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
