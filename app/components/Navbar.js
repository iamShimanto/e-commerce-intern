import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/images/logo.png";
import { FaBagShopping, FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow">
      <div className="container">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/shop">Shop</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/aboutus">About Us</Link>
                </li>

                <div className="flex">
                  <li>
                    <Link
                      className="hover:scale-110 duration-200 sm:hidden text-2xl"
                      href="/cart"
                    >
                      <FaBagShopping />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:scale-110 duration-200 sm:hidden text-2xl"
                      href="/login"
                    >
                      <FaUser />
                    </Link>
                  </li>
                </div>
              </ul>
            </div>

            <Link href="/" className="btn btn-ghost text-xl">
              <Image src={logo} alt="logo" />
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/aboutus">About Us</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end items-center hidden sm:flex gap-3 text-2xl">
            <Link className="hover:scale-110 duration-200" href="/cart">
              <FaBagShopping />
            </Link>
            <Link className="hover:scale-110 duration-200" href="/login">
              <FaUser />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
