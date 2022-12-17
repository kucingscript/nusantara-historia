import { useState, useEffect } from "react";

import { Link } from "react-scroll";
import { themeChange } from "theme-change";

import { BiMenuAltLeft } from "react-icons/bi";
import { MdOutlineCloseFullscreen } from "react-icons/md";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const lists = [
    { name: "beranda", link: "beranda", offset: 0 },
    { name: "sejarah", link: "sejarah", offset: 0 },
    { name: "tentang", link: "tentang", offset: 100 },
    { name: "faq", link: "faq", offset: 0 },
    { name: "kontak", link: "kontak", offset: 0 },
  ];

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
            {lists.map((list, index) => {
              return (
                <Link
                  to={list.link}
                  duration={500}
                  smooth={true}
                  offset={list.offset}
                  key={index}
                >
                  <li
                    className="capitalize cursor-pointer hover:text-primary"
                    onClick={handleClick}
                  >
                    {list.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="navbar-center">
        <button
          className="btn btn-ghost text-primary text-xl"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Nusantara
        </button>
      </div>

      <div className="navbar-end">
        <button
          data-set-theme="coffee"
          data-act-class="ACTIVECLASS"
          className="btn btn-xs btn-circle bg-[#DC944C] hover:bg-[#DC944C]"
          data-aos="fade-down"
          data-aos-delay="200"
        ></button>
        <button
          data-set-theme="forest"
          data-act-class="ACTIVECLASS"
          className="btn btn-xs btn-circle bg-[#1EB854] hover:bg-[#1EB854] mx-2 md:mx-4"
          data-aos="fade-down"
          data-aos-delay="300"
        ></button>
      </div>
    </nav>
  );
}

export default Navbar;
