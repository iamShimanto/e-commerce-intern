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
  FiMoon,
  FiSun,
  FiExternalLink,
  FiChevronRight,
} from "react-icons/fi";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/", icon: FiGrid },
  { label: "Products", href: "/products", icon: FiShoppingBag },
  { label: "Orders", href: "/orders", icon: FiFileText },
  { label: "Payments", href: "/payments", icon: FiCreditCard },
  { label: "Transactions", href: "/transactions", icon: FiRepeat },
  { label: "Clients", href: "/clients", icon: FiUsers },
];

const categories = [
  { label: "Laptops", count: 8, color: "bg-yellow-300 text-black" },
  { label: "Mobile phones", count: 6, color: "bg-orange-400 text-white" },
  { label: "Desktops", count: null, color: "" },
  { label: "Accessories", count: 5, color: "bg-pink-400 text-white" },
  { label: "Portable storage", count: 9, color: "bg-emerald-400 text-white" },
  { label: "Networking", count: null, color: "" },
];

const sellers = [
  "/images/s1.png",
  "/images/s2.png",
  "/images/s3.png",
  "/images/s4.png",
];

export default function Sidebar({ isCollapsed = false }) {
  const pathname = usePathname();

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
              {categories.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center text-sm text-primary_color/60"
                >
                  <span className="flex-1">{c.label}</span>
                  {c.count != null && (
                    <span
                      className={`min-w-6 h-6 px-2 rounded-md grid place-items-center text-xs font-bold ${c.color}`}
                    >
                      {c.count}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary_color/80 hover:text-primary_color transition">
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
                  className="h-8 w-8 rounded-full overflow-hidden ring-2 ring-dark_bg"
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
              <button className="h-8 w-8 rounded-full bg-brand_color/15 text-brand_color grid place-items-center ring-1 ring-brand_color/40">
                <FiPlus />
              </button>
            </div>
          </div>

          <div className="px-6 mt-6">
            <div className="rounded-2xl bg-gradient-to-br from-brand_color/90 to-purple-500 p-5 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_rgba(255,255,255,0.35)_1px,_transparent_1px)] [background-size:18px_18px]" />
              <div className="relative">
                <div className="w-full h-28 rounded-xl bg-white/10 mb-4 grid place-items-center text-3xl font-bold">
                  <FiExternalLink />
                </div>
                <h3 className="text-lg font-semibold mb-1">Go to Pro</h3>
                <p className="text-sm text-white/90 mb-4">
                  Get access to all features on Pro account
                </p>
                <button className="h-10 px-4 rounded-full bg-white text-black font-semibold text-sm flex items-center gap-2">
                  Upgrade
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-auto px-6 pb-6 pt-5">
            <div className="rounded-xl bg-black/35 border border-white/5 p-3 flex items-center justify-between">
              <div className="flex items-center gap-3 text-primary_color/70">
                <FiMoon />
                <div className="h-6 w-12 rounded-full bg-white/10 relative">
                  <div className="h-6 w-6 rounded-full bg-brand_color absolute left-1 top-0" />
                </div>
                <FiSun />
              </div>
              <button className="h-9 w-9 rounded-lg bg-white/5 grid place-items-center text-primary_color/70">
                <FiExternalLink />
              </button>
            </div>
          </div>
        </>
      )}
    </aside>
  );
}
