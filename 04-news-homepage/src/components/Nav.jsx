import logo from "/src/assets/images/logo.svg";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { InlineNav } from "./InlineNav";
import { SideMenu } from "./SideMenu";

export default function Nav({ isOpen, setIsOpen }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-0 py-5">
      <NavLink to="/" className="nav-link p-0">
        <img
          src={logo}
          alt="Little Lemon Logo"
          id="logo"
          className="img-fluid"
          style={{ minHeight: "30px" }}
        />
      </NavLink>
      {/* inline navbar */}
      {isOpen ? <SideMenu></SideMenu> : null}
      <InlineNav></InlineNav>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <div className="burger-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </button>
      {/* side menu navbar */}
    </nav>
  );
}

Nav.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
