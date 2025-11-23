"use client";

import { FiMoreVertical, FiTrendingUp } from "react-icons/fi";

export default function StatCard({
  title = "Total sells",
  value = "$126.500",
  change = "34.7%",
  subtitle = "Compared to Jan 2022",
  icon,
  positive = true,
}) {
  return (
    <div className="w-full rounded-2xl bg-dark_bg border border-white/10 px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
      <div className="flex items-start justify-between">
        <p className="text-sm text-primary_color/60 font-medium">{title}</p>
        <button className="text-primary_color/40 hover:text-primary_color/70 transition">
          <FiMoreVertical />
        </button>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-emerald-300/90 grid place-items-center text-black shrink-0">
          {icon || (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 9h10l-1 9H8L7 9Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M9 9V7a3 3 0 0 1 6 0v2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <circle cx="10" cy="20" r="1.3" fill="currentColor" />
              <circle cx="16" cy="20" r="1.3" fill="currentColor" />
            </svg>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <p className="text-lg font-semibold text-primary_color">{value}</p>
            <div
              className={`flex items-center gap-1 text-sm font-semibold ${
                positive ? "text-emerald-300" : "text-red-400"
              }`}
            >
              <FiTrendingUp className={`${positive ? "" : "rotate-180"}`} />
              <span>{change}</span>
            </div>
          </div>
          <p className="mt-1 text-xs text-primary_color/35 text-right">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
