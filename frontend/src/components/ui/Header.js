"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MonogramClaudette from "../MonogramClaudette";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Inicio", href: "/inicio" },
    { name: "Claudette", href: "/universo" },
    { name: "Novela", href: "/claudette" },
    { name: "Relatos", href: "/relatos" },
  ];

  const isMobile = windowWidth < 768;

  const renderDesktopMenu = () => {
    const midPoint = Math.ceil(menuItems.length / 2);
    return (
      <>
        <div className="flex-1 flex justify-end space-x-16">
          {menuItems.slice(0, midPoint).map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:text-scarlet transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex-shrink-0 mx-16">
          {/* <MonogramClaudette className="fill-scarlet w-[51px] h-[72px]" /> */}
        </div>
        <div className="flex-1 flex justify-start space-x-16">
          {menuItems.slice(midPoint).map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:text-scarlet transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </>
    );
  };

  const renderMobileMenu = () => (
    <>
      <div className="flex-shrink-0">
        {/* <MonogramClaudette className="fill-scarlet w-[46px] h-[64px]" /> */}
      </div>
      <button onClick={toggleMenu} className="text-white p-2">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-scarlet">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block py-5 px-4 text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );

  if (isHomePage) return null;

  return (
    <header className="top-0 left-0 w-full border-b-scarlet border-b-[1px] z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {isMobile ? renderMobileMenu() : renderDesktopMenu()}
        </div>
      </div>
    </header>
  );
};

export default Header;
