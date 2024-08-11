import { NavLink } from "react-router-dom";
import logo from "/src/assets/images/logo.svg";
import "./Nav.scss";
import avatar from "/src/assets/images/image-avatar.png";
import CartIcon from "../CartIcon/CartIcon";

export default function Nav() {
  return (
    <nav>
      <div className="brand-logo">
        <NavLink to="/" className="brand-logo-link">
          <img src={logo} alt="sneakers company logo" />
        </NavLink>
      </div>
      <ul className="navlinks" role="menubar">
        <NavLink to="/">
          <li role="menuitem">Collections</li>
        </NavLink>
        <NavLink to="/">
          <li role="menuitem">Men</li>
        </NavLink>
        <NavLink to="/">
          <li role="menuitem">Women</li>
        </NavLink>
        <NavLink to="/">
          <li role="menuitem">About</li>
        </NavLink>
        <NavLink to="/">
          <li role="menuitem">Contact</li>
        </NavLink>
      </ul>
      <div className="user-center" role="menubar">
        <CartIcon></CartIcon>
        <button>
          <img src={avatar} alt="User profile picture" className="avatar" />
        </button>
      </div>
    </nav>
  );
}
