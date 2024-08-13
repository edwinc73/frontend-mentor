import { useContext } from "react";
import "./Overlay.scss";
import PropTypes from "prop-types";
import { LightBoxContext } from "../../context/lightBoxContext";

export default function Overlay() {
  const { lightBox, setLightBox } = useContext(LightBoxContext);

  const handleClick = () => {
    if (lightBox) setLightBox(false);
  };
  return (
    <div
      id="overlay"
      role="button"
      aria-label="click to close light box mode"
      onClick={handleClick}
    ></div>
  );
}

Overlay.propTypes = {
  setIsOpen: PropTypes.func,
};
