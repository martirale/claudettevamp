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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Inicio", href: "/inicio" },
    { name: "Universo", href: "/universo" },
    { name: "Novela", href: "/novela" },
    { name: "Relatos", href: "/relatos" },
  ];

  const isMobile = windowWidth < 768;

  const renderDesktopMenu = () => {
    const midPoint = Math.ceil(menuItems.length / 2);
    return (
      <>
        <div className="font-LeMurmure text-2xl flex-1 flex justify-end space-x-16 uppercase">
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
          <Link href="/inicio">
            <MonogramClaudette className="fill-scarlet w-[51px] h-[72px]" />
          </Link>
        </div>
        <div className="font-LeMurmure text-2xl flex-1 flex justify-start space-x-16 uppercase">
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
        <Link href="/inicio">
          <MonogramClaudette className="fill-scarlet w-[45px] h-[64px]" />
        </Link>
      </div>
      <button onClick={toggleMenu} className="text-white p-2">
        {isMenuOpen ? (
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
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
            />
          </svg>
        )}
      </button>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full py-4 bg-scarlet">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="font-LeMurmure text-2xl block px-4 py-2 text-white uppercase"
              onClick={() => setIsMenuOpen(false)}
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
    <header className="fixed top-0 left-0 w-full border-b-scarlet border-b-[1px] bg-darkBlack grain-texture-header z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {isMobile ? renderMobileMenu() : renderDesktopMenu()}
        </div>
      </div>
    </header>
  );
};

export default Header;
