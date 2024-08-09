import { navLink } from "../navLink";
import { NavLinkComponent } from "./NavLinkComponent";
import "./SideMenu.css";
import "../App.css";
export const SideMenu = () => {
  return (
    <>
      <ul
        className="d-flex flex-column text-color-dark-blue"
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
