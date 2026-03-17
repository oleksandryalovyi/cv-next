"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "classnames";
import { navBarLinks } from "../config/navbar.links";

export function NavBar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-start">
      {navBarLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={clsx("px-2 py-1", {
            "bg-white text-gray-900": pathname === link.path,
          })}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
