"use client";

import Link from "next/link";
import { FiHome, FiChevronRight } from "react-icons/fi";

export default function Breadcrumb({
  items = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
  ],
}) {
  if (!items?.length) return null;

  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-primary_color/60">
      {items.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

        return (
          <div
            key={`${item.label}-${index}`}
            className="flex items-center gap-2"
          >
            <Link
              href={item.href || "#"}
              className={`flex items-center gap-1.5 transition ${
                isLast ? "text-brand_color" : "hover:text-primary_color/90"
              }`}
              aria-current={isLast ? "page" : undefined}
            >
              {isFirst && <FiHome className="text-sm sm:text-base" />}
              <span>{item.label}</span>
            </Link>

            {!isLast && (
              <FiChevronRight className="text-primary_color/40 text-sm sm:text-base" />
            )}
          </div>
        );
      })}
    </div>
  );
}
