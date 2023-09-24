"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuArray = [
  { id: "00", name: "home" },
  { id: "01", name: "destination" },
  { id: "02", name: "crew" },
  { id: "03", name: "technology" },
];

const Nav = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 pt-6 mb-12 sm:pt-0 sm:px-0 sm:pl-10 sm:mb-[106px] lg:pl-[55px] lg:pt-10 lg:mb-[250px]">
      <Link href="/">
        <img
          src="/assets/shared/logo.svg"
          alt="logo"
          className="w-10 h-10 sm:w-12 sm:h-12"
        />
      </Link>

      <button
        className="grid place-content-center z-10 sm:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img
          src="/assets/shared/icon-hamburger.svg"
          alt="icon hamburger"
          className={`icon_transition ${isMenuOpen ? "" : "icon_visible"}`}
        />
        <img
          src="/assets/shared/icon-close.svg"
          alt="icon close"
          className={`icon_transition ${isMenuOpen ? "icon_visible" : ""}`}
        />
      </button>

      {/* menu desktop */}
      <div className="hidden menu_desktop">
        <div className="flex gap-7 menu_item">
          {menuArray.map((item) => {
            const itemPath =
              item.name.toLowerCase() === "home"
                ? "/"
                : `/${item.name.toLowerCase()}`;

            const isActive = pathname === itemPath;

            return (
              <div key={item.id} className="relative flex gap-3">
                <span className="hidden font-bold lg:block">{item.id}</span>
                <Link
                  href={itemPath}
                  className={`menu_hover ${isActive ? "menu_active" : ""}`}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* menu mobile */}
      <div className={`menu_mobile ${isMenuOpen ? "" : "hide_menu"} sm:hidden`}>
        <div className="flex flex-col gap-8 menu_item">
          {isMenuOpen
            ? menuArray.map((item) => {
                const itemPath =
                  item.name.toLowerCase() === "home"
                    ? "/"
                    : `/${item.name.toLowerCase()}`;

                const isActive = pathname === itemPath;

                return (
                  <div key={item.id} className="relative flex gap-3">
                    <span className="font-bold">{item.id}</span>
                    <Link
                      href={itemPath}
                      className={`menu_hover_mobile ${
                        isActive ? "menu_active_mobile" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
