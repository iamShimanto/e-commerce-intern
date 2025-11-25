"use client";

import { FiMoreVertical, FiTrendingUp } from "react-icons/fi";

export default function StatCard({
  title = "Total Sales",
  value = "$126,500",
  change = "34.7%",
  subtitle = "Compared to Jan 2022",
  icon,
  positive = true,
}) {
  return (
    <div
      className={`relative w-full rounded-2xl p-0.5 bg-linear-to-br from-gray-50/10 via-gray-50/10 to-slate-400
      hover:from-white/20 hover:via-white/10 transition-all duration-300`}
    >
      <div className="w-full rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.65)]">
        {/* Title Row */}
        <div className="flex items-start justify-between">
          <p className="text-sm text-white/60 font-medium">{title}</p>
          <button className="text-white/40 hover:text-white/80 transition">
            <FiMoreVertical />
          </button>
        </div>

        {/* Body */}
        <div className="mt-4 flex items-center gap-4">
          {/* Icon */}
          <div className="h-12 w-12 rounded-xl bg-linear-to-br from-emerald-400 to-lime-300 text-black grid place-items-center shadow-lg">
            {icon || (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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

          {/* Text Part */}
          <div className="flex-1">
            <div className="flex items-center justify-between gap-3">
              {/* Value */}
              <p className="text-2xl font-semibold text-white tracking-wide">
                {value}
              </p>

              {/* Change Percentage */}
              <div
                className={`flex items-center gap-1 text-sm font-semibold ${
                  positive ? "text-emerald-300" : "text-red-400"
                }`}
              >
                <FiTrendingUp className={`${positive ? "" : "rotate-180"}`} />
                <span>{change}</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="mt-1 text-xs text-white/40 text-right">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
