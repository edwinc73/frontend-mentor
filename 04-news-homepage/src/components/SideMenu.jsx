import { navLink } from "../navLink";
import { NavLinkComponent } from "./NavLinkComponent";
import "./SideMenu.css";
import "../App.css";
export const SideMenu = ({ isOpen }) => {
  return (
    <>
      <ul
        aria-hidden={!isOpen}
        role="menubar"
        className="stext-color-dark-blue"
        id="side-menu"
        style={{ paddingTop: "30vh", color: "hsl(240, 100%, 5%)" }}
      >
        {navLink.map(({ link, name, active }) => {
          return (
            <NavLinkComponent
              link={link}
              name={name}
              active={active}
              key={name}
            ></NavLinkComponent>
          );
        })}
      </ul>
    </>
  );
};
