"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) return null;

  return (
    <footer>
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
