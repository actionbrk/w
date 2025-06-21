"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type HeaderNavLinkProps = {
  href: string;
  children?: React.ReactNode;
  activeClassName?: string;
};

export function HeaderNavLink({
  href,
  children,
  activeClassName,
}: HeaderNavLinkProps) {
  const pathname = usePathname();
  console.log(href);
  const isActive =
    pathname.endsWith(href) || (href.includes(pathname) && pathname !== "/");

  return (
    <Link
      href={href}
      className={
        "hover:text-gray-300 hover:border-b-3 hover:border-b-white/50 transition duration-200 text-lg px-2 " +
        (isActive ? activeClassName : "")
      }
    >
      {children}
    </Link>
  );
}
