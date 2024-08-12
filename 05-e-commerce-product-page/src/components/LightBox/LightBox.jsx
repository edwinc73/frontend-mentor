import { useEffect, useState } from "react";
import { ImageLarge } from "../ImageGallery/ImageLarge";
import { ImageNav } from "../ImageGallery/ImageNav";
import { ImagePreviews } from "../ImageGallery/ImagePreviews";
import "./LightBox.scss";
import closeIcon from "/src/assets/images/icon-close.svg";
export const LightBox = ({ currentImageId, image, setLightBox }) => {
  const [lightBoxIndex, setLightBoxIndex] = useState(0);

  useEffect(() => {
    setLightBoxIndex(currentImageId);
  }, []);

  return (
    <div id="light-box">
      <ImageLarge
        imageObj={image[lightBoxIndex]}
        setLightBox={setLightBox}
      ></ImageLarge>
      <ImageNav setCurrentImageId={setLightBoxIndex} image={image} />
      <ImagePreviews
        imageObj={image[lightBoxIndex]}
        image={image}
        setCurrentImageId={setLightBoxIndex}
      />
      <button
        className="close"
        onClick={() => {
          setLightBox(false);
        }}
      >
        <img src={closeIcon} alt="close light box icon" />
      </button>
    </div>
  );
};
