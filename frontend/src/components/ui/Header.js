"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) return null;

  return (
    <header>
      <div></div>
    </header>
  );
}
