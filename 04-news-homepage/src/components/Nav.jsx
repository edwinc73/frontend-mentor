import { useState } from "react";
import logo from "/src/assets/images/logo.svg";
import { AnimatePresence, motion } from "framer-motion";

const NavLinkComponent = ({ link, name, active }) => {
  return (
    <li className="nav-item px-3" key={name}>
      <a className="nav-link text-grey-blue" href={link}>
        {name} {active && <span className="sr-only">(current)</span>}
      </a>
    </li>
  );
};

const navLink = [
  { link: "/", name: "Home", active: true },
  { link: "/", name: "New", active: false },
  { link: "/", name: "Popular", active: false },
  { link: "/", name: "Trending", active: false },
  { link: "/", name: "Categories", active: false },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-0 py-5">
      <a href="/" className="nav-link p-0">
        <img
          src={logo}
          alt="Little Lemon Logo"
          id="logo"
          className="img-fluid"
          style={{ minHeight: "30px" }}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <div className="burger-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </button>
      {/* inline navbar */}
      <div
        className="collapse navbar-collapse"
        id="navbarNavAltMarkup"
        style={{ marginRight: "-30px" }}
      >
        <ul className="navbar-nav ml-auto">
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
      {/* side menu navbar */}
      <AnimatePresence>
        {open ? (
          // <motion.div
          //   initial={{ opacity: 0, transform: "translate(250px, 0)" }}
          //   animate={{ opacity: 1, transform: "translate(0, 0)" }}
          //   exit={{ opacity: 0, transform: "translate(250px, 0)" }}
          // >
          <div className="side-menu row">
            <div className="col-4 faded-background"></div>
            <ul className="col-8 navbar-nav p-2">
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
        ) : // </motion.div>
        null}
      </AnimatePresence>
    </nav>
  );
}
