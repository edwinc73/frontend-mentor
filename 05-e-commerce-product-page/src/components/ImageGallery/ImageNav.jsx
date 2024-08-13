import nextIcon from "/src/assets/images/icon-next.svg";
import prevIcon from "/src/assets/images/icon-previous.svg";
import "./ImageNav.scss";

export const ImageNav = ({ setCurrentImageId, image }) => {
  return (
    <div className="image-nav">
      <button
        aria-label="previous image"
        className="prev"
        onClick={() => {
          setCurrentImageId((prev) => {
            if (prev <= 0) return prev;
            return prev - 1;
          });
        }}
      >
        <img role="presentation" src={prevIcon} alt="see-next-image" />
      </button>
      <button
        aria-label="next image"
        className="next"
        onClick={() => {
          setCurrentImageId((prev) => {
            if (prev >= image.length - 1) return prev;
            return prev + 1;
          });
        }}
      >
        <img role="presentation" src={nextIcon} alt="see-prev-image" />
      </button>
    </div>
  );
};
