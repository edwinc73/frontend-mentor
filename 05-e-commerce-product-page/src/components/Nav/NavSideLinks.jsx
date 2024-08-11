import { navContent } from "../../navContent";
import { NavLinkComponent } from "./NavLinkComponent";

export const NavSideLinks = () => {
  return (
    <ul className="navSideLinks" role="menubar">
      {navContent.map((item) => {
        return <NavLinkComponent key={item.id} name={item.name} />;
      })}
    </ul>
  );
};
