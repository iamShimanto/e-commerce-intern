"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.png";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { FaBagShopping, FaBars, FaUser } from "react-icons/fa6";

const Navbar = ({ token }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur shadow z-50">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="logo" className="w-auto h-10" />
          </Link>

          <ul className="hidden lg:flex items-center gap-10 font-medium">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`relative pb-1 transition-all duration-200 ${
                    isActive(link.path)
                      ? "text-primary_color font-semibold"
                      : "text-black_main hover:text-primary_color"
                  }`}
                >
                  {link.name}

                  {isActive(link.path) && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary_color rounded-full"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Icons */}
          <div className="hidden sm:flex items-center gap-4 text-2xl">
            <Link href="/cart" className="hover:scale-110 duration-200">
              <FaBagShopping />
            </Link>

            {token ? (
              <Link href="/profile" className="hover:scale-110 duration-200">
                <FaUserCircle />
              </Link>
            ) : (
              <Link href="/login" className="hover:scale-110 duration-200">
                <FaUser />
              </Link>
            )}
          </div>

          <button className="lg:hidden text-2xl" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-black_main font-medium">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`transition-all duration-200 ${
                    isActive(link.path)
                      ? "text-primary_color font-semibold"
                      : "hover:text-primary_color"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 mt-5 text-2xl">
            <Link href="/cart" className="hover:scale-110 duration-200">
              <FaBagShopping />
            </Link>

            {token ? (
              <Link href="/profile" className="hover:scale-110 duration-200">
                <FaUserCircle />
              </Link>
            ) : (
              <Link href="/login" className="hover:scale-110 duration-200">
                <FaUser />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
