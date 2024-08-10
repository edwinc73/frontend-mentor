import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./NavLinkComponent.css";
export const NavLinkComponent = ({ link, name, active }) => {
  return (
    <li className="nav-item px-3" key={name} role="menuitem">
      <NavLink to={link} className="nav-link">
        {name} {active && <span className="sr-only">(current)</span>}
      </NavLink>
    </li>
  );
};

NavLinkComponent.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
  active: PropTypes.bool,
};
