import { NavLink } from "react-router-dom";
import logo from "/src/assets/images/logo.svg";
import "./Nav.scss";
import avatar from "/src/assets/images/image-avatar.png";
import CartIcon from "../CartIcon/CartIcon";
import PropTypes from "prop-types";
import { NavInlineLinks } from "./NavInlineLinks";
import { NavLinkComponent } from "./NavLinkComponent";
import { navContent } from "../../navContent";

const NavSideLinks = () => {
  return (
    <ul className="navSideLinks" role="menubar">
      {navContent.map((item) => {
        return <NavLinkComponent key={item.id} name={item.name} />;
      })}
    </ul>
  );
};

export default function Nav({ isOpen, setIsOpen }) {
  return (
    <nav>
      <button
        className={`nav-toggle ${isOpen ? "close" : ""}`}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <span className="toggle-bar1 toggle-bar"></span>
        <span className="toggle-bar2 toggle-bar"></span>
        <span className="toggle-bar3 toggle-bar"></span>
      </button>
      <div className="brand-logo">
        <NavLink to="/" className="brand-logo-link">
          <img src={logo} alt="sneakers company logo" />
        </NavLink>
      </div>
      {isOpen ? <NavSideLinks /> : <NavInlineLinks />}
      <div className="user-center" role="menubar">
        <CartIcon></CartIcon>
        <button>
          <img src={avatar} alt="User profile picture" className="avatar" />
        </button>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
