import { useContext } from "react";
import "./ImageGallery.scss";

import PropTypes from "prop-types";
import { LightBoxContext } from "../../context/lightBoxContext";
import { ImagePreviews } from "./ImagePreviews";
import { ImageNav } from "./ImageNav";
import { ImageLarge } from "./ImageLarge";

export default function ImageGallery({ image }) {
  const { setLightBox, currentImageId, setCurrentImageId } =
    useContext(LightBoxContext);
  return (
    <div id="image-gallery">
      <ImageLarge
        imageObj={image[currentImageId]}
        setLightBox={setLightBox}
      ></ImageLarge>
      <ImageNav setCurrentImageId={setCurrentImageId} image={image} />
      <ImagePreviews
        imageObj={image[currentImageId]}
        image={image}
        setCurrentImageId={setCurrentImageId}
      />
    </div>
  );
}

ImageGallery.propTypes = {
  image: PropTypes.array,
};
