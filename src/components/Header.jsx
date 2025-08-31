import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { CiSearch, CiDiscount1, CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline, IoHelpBuoyOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);

  function ShowSideMenu() {
    setToggle(true);
  }
  function hideSideMenu() {
    setToggle(false);
  }

  // Define navigation links
  const links = [
    { path: "/", icons: <CiSearch />, name: "Home" },
    { path: "/offers", icons: <CiDiscount1 />, name: "Offers", sup: "New" },
    { path: "/help", icons: <IoHelpBuoyOutline />, name: "Help" },
    { path: "/about", icons: <IoPersonOutline />, name: "About" },
    { path: "/cart", icons: <CiShoppingCart />, name: "Cart", sup: 2 },
  ];

  return (
    <div>
      {/* Side Menu Overlay */}
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[400px] bg-white h-full absolute duration-[400ms]"
          style={{ left: toggle ? "0%" : "-100%" }}
        ></div>
      </div>

      {/* Header */}
      <header className="p-3 shadow-xl sticky text-[#686b78] top-0 z-[9999]">
        <div className="mx-w-[1200px] mx-auto flex items-center ">
          {/* Logo */}
          <div className="w-[100px]">
            <img src="images/logo.png" alt="Logo" />
          </div>

          {/* Location */}
          <div className="">
            <span className="font-bold border-b-[3px] border-[black]">
              Ratanada
            </span>{" "}
            Jodhpur, Rajasthan, India
            <RxCaretDown
              onClick={ShowSideMenu}
              fontSize={20}
              className="font-bold inline text-[0.9rem] text-[#e67e22] cursor-pointer"
            />
          </div>

          {/* Navigation */}
          <nav className="flex list-none gap-7 ml-auto font-semibold text-[15px]">
            {links.map((link, index) => (
              <li key={index} className="cursor-pointer flex items-center gap-2">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#e67e22] flex items-center gap-2"
                      : "hover:text-[#e67e22] flex items-center gap-2"
                  }
                >
                  {link.icons}
                  {link.name}
                  {link.sup && <sup>{link.sup}</sup>}
                </NavLink>
              </li>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
