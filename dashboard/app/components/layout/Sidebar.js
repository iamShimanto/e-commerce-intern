"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FiGrid,
  FiShoppingBag,
  FiFileText,
  FiCreditCard,
  FiRepeat,
  FiUsers,
  FiPlus,
} from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Dashboard", href: "/", icon: FiGrid },
  { label: "Products", href: "/products", icon: FiShoppingBag },
  { label: "Orders", href: "/orders", icon: FiFileText },
  { label: "Payments", href: "/payments", icon: FiCreditCard },
  { label: "Transactions", href: "/transactions", icon: FiRepeat },
  { label: "Clients", href: "/clients", icon: FiUsers },
];

const sellers = [
  "/images/s1.png",
  "/images/s2.png",
  "/images/s3.png",
  "/images/s4.png",
];

export default function Sidebar({ isCollapsed = false }) {
  const pathname = usePathname();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const result = await res.json();
        setCategories(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <aside
      className={`fixed top-0 bg-dark_bg/95 border-r border-white/5
  ${isCollapsed ? "w-[88px]" : "w-[290px]"}
  transition-all duration-200 ease-out hidden md:flex flex-col h-screen overflow-y-auto
  [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`}
    >
      <div className="px-6 pt-8 pb-6 flex items-center gap-3">
        <div className="h-11 w-11 rounded-full  grid place-items-center shrink-0"></div>
      </div>

      <nav className="px-4 space-y-2">
        {navItems.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`h-12 rounded-xl flex items-center gap-3 px-4 transition
                ${
                  active
                    ? "bg-brand_color text-white"
                    : "text-primary_color/60 hover:bg-white/5 hover:text-primary_color"
                }
              `}
            >
              <div className="w-6 grid place-items-center">
                <Icon className="text-xl" />
              </div>
              {!isCollapsed && (
                <span className="font-semibold text-sm">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {!isCollapsed && (
        <>
          <div className="px-6 mt-6">
            <div className="h-px bg-white/10" />
          </div>

          <div className="px-6 mt-5">
            <h4 className="text-sm font-semibold text-primary_color/90 mb-3">
              Categories
            </h4>

            <div className="space-y-3">
              {categories.slice(0, 6  ).map((c) => (
                <div
                  key={c.slug}
                  className="flex items-center text-base text-primary_color/60 cursor-pointer hover:text-brand_color duration-200 "
                >
                  {c.name}
                </div>
              ))}
            </div>

            <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary_color/80 hover:text-primary_color transition cursor-pointer">
              <FiPlus className="text-base" />
              <span>Add category</span>
            </button>
          </div>

          <div className="px-6 mt-6">
            <div className="h-px bg-white/10" />
          </div>

          <div className="px-6 mt-5">
            <h4 className="text-sm font-semibold text-primary_color/90 mb-3">
              Top Sellers
            </h4>

            <div className="flex items-center gap-2">
              {sellers.map((src, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full overflow-hidden ring-2 ring-dark_bg cursor-pointer"
                >
                  <Image
                    src={src}
                    alt="seller"
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
              <button className="h-8 w-8 cursor-pointer rounded-full bg-brand_color/15 text-brand_color grid place-items-center ring-1 ring-brand_color/40">
                <FiPlus />
              </button>
            </div>
          </div>
        </>
      )}
    </aside>
  );
}
