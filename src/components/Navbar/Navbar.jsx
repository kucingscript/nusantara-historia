import { useState, useEffect } from "react";

import { Link } from "react-scroll";
import { themeChange } from "theme-change";

import { BiMenuAltLeft } from "react-icons/bi";
import { MdOutlineCloseFullscreen } from "react-icons/md";

import { navLists } from "../data/";
import NavbarCenter from "./NavbarCenter";
import NavbarEnd from "./NavbarEnd";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <nav name="nav" className="navbar shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle btn-sm"
            onClick={handleClick}
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {!nav ? (
              <BiMenuAltLeft className="h-5 w-5" />
            ) : (
              <MdOutlineCloseFullscreen className="h-5 w-5" />
            )}
          </label>
          <ul
            tabIndex={0}
            className={
              !nav
                ? "hidden"
                : "menu menu-compact dropdown-content space-y-8 mt-4 px-2 backdrop-blur-sm"
            }
          >
            {navLists.map((item, index) => {
              return (
                <Link
                  to={item.link}
                  duration={500}
                  smooth={true}
                  offset={item.offset}
                  key={index}
                >
                  <li
                    className="capitalize cursor-pointer hover:text-primary"
                    onClick={handleClick}
                  >
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <NavbarCenter />
      </div>

      <div className="navbar-end">
        <NavbarEnd />
      </div>
    </nav>
  );
}

export default Navbar;
