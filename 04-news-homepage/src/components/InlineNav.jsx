import { NavLinkComponent } from "./NavLinkComponent";
import { navLink } from "../navLink";

export const InlineNav = () => {
  return (
    <div
      className="collapse navbar-collapse"
      id="nav-menu"
      style={{ marginRight: "-38px" }}
    >
      <ul className="navbar-nav ml-auto text-grey-blue">
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
