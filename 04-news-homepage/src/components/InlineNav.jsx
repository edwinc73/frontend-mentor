import { NavLinkComponent } from "./NavLinkComponent";
import { navLink } from "../navLink";

export const InlineNav = ({ isOpen }) => {
  return (
    <div
      className="collapse navbar-collapse"
      id="nav-menu"
      style={{ marginRight: "-24px" }}
    >
      <ul
        role="menubar"
        aria-hidden={isOpen}
        tabIndex="0"
        className="navbar-nav ml-auto text-grey-blue"
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
    </div>
  );
};
