import nextIcon from "/src/assets/images/icon-next.svg";
import prevIcon from "/src/assets/images/icon-previous.svg";
import "./ImageNav.scss";

export const ImageNav = ({ setCurrentImageId, image }) => {
  return (
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
  );
};
