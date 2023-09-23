"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuArray = [
  { id: "01", name: "home" },
  { id: "02", name: "destination" },
  { id: "03", name: "crew" },
  { id: "04", name: "technology" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="z-[1] flex justify-between items-center px-6 pt-6 mb-12 sm:pt-0 sm:px-0 sm:pl-10 sm:mb-[106px]">
      <Link href="/">
        <img
          src="/assets/shared/logo.svg"
          alt="logo"
          className="w-10 h-10 sm:w-12 sm:h-12"
        />
      </Link>
      <button className="sm:hidden">
        <img src="/assets/shared/icon-hamburger.svg" alt="icon hamburger" />
      </button>

      <div className="hidden sm:flex sm:px-12 sm:py-[38px] sm:bg-[rgba(255,255,255,0.04)] sm:backdrop-blur-[40px]">
        <div className="flex gap-7 text-white font-barlow-condensed text-[16px] leading-[20px] tracking-[2.7px] uppercase">
          {menuArray.map((item) => {
            const itemPath =
              item.name.toLowerCase() === "home"
                ? "/"
                : `/${item.name.toLowerCase()}`;

            const isActive = pathname === itemPath;

            return (
              <div key={item.id} className="relative flex gap-3">
                <span className="hidden">{item.id}</span>
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
    </nav>
  );
};

export default Nav;
