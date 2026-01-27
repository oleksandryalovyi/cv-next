"use client";

import Link from "next/link";
import { LINKS } from "../config";
import { usePathname } from "next/navigation";
import clsx from "classnames";

export function NavBar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-start">
      <Link
        href={LINKS.HOME}
        className={clsx("px-2 py-1", {
          "bg-white text-gray-900": pathname === LINKS.HOME,
        })}
      >
        (1) About
      </Link>
    </div>
  );
}
