"use client";

export default function StatusPill({ value }) {
  return (
    <span
      className={`text-xs px-3 py-1.5 rounded-full font-medium ${
        value === "Pending"
          ? "bg-emerald-500/10 text-emerald-400"
          : value === "Delivered"
          ? "bg-indigo-500/10 text-indigo-400"
          : "bg-red-500/10 text-red-400"
      }`}
    >
      {value}
    </span>
  );
}
