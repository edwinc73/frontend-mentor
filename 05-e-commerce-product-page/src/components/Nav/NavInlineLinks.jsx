import { navContent } from "../../navContent";
import { NavLinkComponent } from "./NavLinkComponent";

export const NavInlineLinks = () => {
  return (
    <ul className="navlinks-inline" role="menubar" aria-label="desktop nav">
      {navContent.map((item) => {
        return (
          <NavLinkComponent key={item.id} name={item.name}></NavLinkComponent>
        );
      })}
    </ul>
  );
};
