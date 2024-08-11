import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const NavLinkComponent = ({ name }) => {
  return (
    <NavLink to="/">
      <li role="menuitem">{name}</li>
    </NavLink>
  );
};

NavLinkComponent.propTypes = {
  name: PropTypes.string,
};
