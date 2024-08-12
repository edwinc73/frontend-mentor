import "./Overlay.scss";
import PropTypes from "prop-types";

export default function Overlay({ setIsOpen }) {
  return <div id="overlay"></div>;
}

Overlay.propTypes = {
  setIsOpen: PropTypes.func,
};
