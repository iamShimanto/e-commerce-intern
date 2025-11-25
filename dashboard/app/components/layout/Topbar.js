"use client";

import {
  FiSearch,
  FiMic,
  FiExternalLink,
  FiChevronDown,
  FiMessageSquare,
  FiBell,
  FiMenu,
  FiX,
  FiGrid,
  FiShoppingBag,
  FiFileText,
  FiCreditCard,
  FiRepeat,
  FiUsers,
} from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logodark.png";
import Link from "next/link";

export default function Topbar({
  user = { name: "User", avatarUrl: "" },
  onSearchChange,
  searchValue = "",
  onToggleSidebar,
  sidebarOpen,
}) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", href: "/", icon: FiGrid },
    { label: "Products", href: "/products", icon: FiShoppingBag },
    { label: "Orders", href: "/orders", icon: FiFileText },
    { label: "Payments", href: "/payments", icon: FiCreditCard },
    { label: "Transactions", href: "/transactions", icon: FiRepeat },
    { label: "Clients", href: "/clients", icon: FiUsers },
  ];

  return (
    <header className="w-full bg-dark_bg fixed top-0 z-50 border-b border-white/5 px-1">
      <div className="h-16 md:h-20 px-3 sm:px-5 md:px-6 lg:px-8 flex items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => {
              if (onToggleSidebar) onToggleSidebar();
              else setOpen((v) => !v);
            }}
            className="md:hidden h-9 w-9 sm:h-10 sm:w-10 grid place-items-center rounded-full bg-black/35 border border-white/5"
            aria-label="Toggle menu"
          >
            {sidebarOpen ?? open ? (
              <FiX className="text-primary_color/80 text-lg" />
            ) : (
              <FiMenu className="text-primary_color/80 text-lg" />
            )}
          </button>

          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src={logo}
              alt="logo"
              priority
              width={120}
              height={36}
              className="h-7 w-auto sm:h-8 md:h-9"
            />
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center md:justify-start min-w-0 px-2 sm:px-3 md:px-6">
          <div className="relative w-full max-w-[620px] md:max-w-[520px] lg:max-w-[640px]">
            <div className="hidden sm:flex items-center gap-2 sm:gap-3 h-10 md:h-12 rounded-full bg-black/45 border border-white/5 px-3 sm:px-4 shadow-inner">
              <FiSearch className="text-primary_color/70 text-base md:text-lg shrink-0" />
              <input
                value={searchValue}
                onChange={(e) => onSearchChange?.(e.target.value)}
                placeholder="Search"
                className="flex-1 min-w-0 bg-transparent outline-none text-xs sm:text-sm md:text-sm text-primary_color placeholder:text-primary_color/40"
              />
              <FiMic className="text-primary_color/50 text-base md:text-lg shrink-0" />
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center ml-1 lg:ml-2 shrink-0">
          <button className="flex items-center gap-2 text-sm font-semibold text-primary_color/70 hover:text-primary_color transition whitespace-nowrap">
            <FiExternalLink className="text-base" />
            <span>Browse</span>
            <FiChevronDown className="text-base opacity-60" />
          </button>
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3 md:gap-5 shrink-0">
          <button className="hidden sm:grid relative h-9 w-9 md:h-10 md:w-10 place-items-center rounded-full hover:bg-white/5 transition">
            <FiMessageSquare className="text-primary_color/60 text-lg md:text-xl" />
            <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-brand_color ring-2 ring-dark_bg"></span>
          </button>

          <button className="grid relative h-9 w-9 md:h-10 md:w-10 place-items-center rounded-full hover:bg-white/5 transition">
            <FiBell className="text-primary_color/60 text-lg md:text-xl" />
            <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-brand_color ring-2 ring-dark_bg"></span>
          </button>

          <button className="h-9 w-9 md:h-11 md:w-11 rounded-full bg-brand_color/20 grid place-items-center overflow-hidden ring-2 ring-brand_color/60">
            {user.avatarUrl ? (
              <Image
                src={user.avatarUrl}
                alt={user.name}
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full grid place-items-center text-primary_color font-semibold text-sm md:text-base">
                {user.name?.[0] || "U"}
              </div>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden origin-top transition-all duration-200 ease-out ${
          sidebarOpen ?? open
            ? "max-h-140 opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-95"
        }`}
      >
        <div className="px-3 sm:px-5 pb-3 flex items-center gap-3">
          <button className="flex items-center gap-2 text-sm font-semibold text-primary_color/70 hover:text-primary_color transition">
            <FiExternalLink className="text-base" />
            <span>Browse</span>
            <FiChevronDown className="text-base opacity-60" />
          </button>

          <button className="relative ml-auto sm:hidden h-9 w-9 grid place-items-center rounded-full hover:bg-white/5 transition">
            <FiMessageSquare className="text-primary_color/60 text-lg" />
            <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-brand_color ring-2 ring-dark_bg"></span>
          </button>
        </div>
        <ul className="flex flex-col gap-3 text-white my-2 items-center">
          {navItems.map((item, index) => (
            <li key={index} className="bg-brand_color w-40 py-2 text-center rounded-2xl">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
