import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const NavLinkComponent = ({ name }) => {
  return (
    <li role="menuitem">
      <NavLink to="/">{name}</NavLink>
    </li>
  );
};

NavLinkComponent.propTypes = {
  name: PropTypes.string,
};
