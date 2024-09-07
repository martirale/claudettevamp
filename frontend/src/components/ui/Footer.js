"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) return null;

  return (
    <footer className="lg:px-16 2xl:px-0">
      <Link
        href="https://alemartir.com"
        target="_blank"
        className="text-xs text-grey uppercase hover:underline"
      >
        Claudette Vamp &copy; 2024 AM
      </Link>
    </footer>
  );
}
