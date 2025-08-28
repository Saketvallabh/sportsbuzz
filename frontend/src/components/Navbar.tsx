"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const links = [
    { href: "/matches", label: "Matches" },
    { href: "/points-table", label: "Points Table" },
    { href: "/schedule", label: "Schedule" },
  ];

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow-md">
      <ul className="flex justify-center space-x-12">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`inline-block transition-transform duration-200 hover:scale-110 hover:text-yellow-300 ${
                pathname === link.href ? "font-bold underline" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

