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
      {isOpen ? <SideMenu isOpen={isOpen}></SideMenu> : null}
      <InlineNav isOpen={isOpen}></InlineNav>
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
        <div className={`burger-menu ${isOpen && "close-icon"}`}>
          <span className="bar menu-bar1"></span>
          <span className="bar menu-bar2"></span>
          <span className="bar menu-bar3"></span>
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
