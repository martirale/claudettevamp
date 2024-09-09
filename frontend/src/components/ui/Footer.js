"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoClaudette from "../LogoClaudette";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) return null;

  return (
    <footer className="w-full pt-32 pb-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex-grow h-px bg-scarlet"></div>
          <div className="flex-shrink-0 px-4">
            <LogoClaudette className="fill-scarlet w-[194px] h-[72px] md:w-[345px] md:h-[128px]" />
          </div>
          <div className="flex-grow h-px bg-scarlet"></div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="https://alemartir.com"
            target="_blank"
            className="text-sm text-grey uppercase hover:underline"
          >
            Claudette Vamp &copy; {new Date().getFullYear()} AM
          </Link>
        </div>
      </div>
    </footer>
  );
}
