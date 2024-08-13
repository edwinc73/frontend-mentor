import "./ImagePreviews.scss";

export const ImagePreviews = ({ imageObj, image, setCurrentImageId }) => {
  return (
    <div className="image-previews">
      {image.map((img) => {
        return (
          <button
            aria-label={`preview image ${img.imageId}`}
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
  );
};
