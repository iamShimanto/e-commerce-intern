"use client";

import { FiCalendar, FiChevronDown, FiPrinter } from "react-icons/fi";
import StatusPill from "./StatusPill";

export default function OrderHeader({ order }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div className="space-y-2">
        <p className="text-sm font-semibold text-primary_color">
          Orders ID: {order.id}
        </p>
        <div className="flex items-center gap-2 text-primary_color/70 text-sm">
          <FiCalendar className="text-base" />
          <span>{order.placedAt}</span>
        </div>
        <div className="pt-1">
          <StatusPill value={order.status} />
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap lg:justify-end">
        <div className="relative">
          <select
            defaultValue="Change Status"
            className="appearance-none h-10 sm:h-11 w-[200px] bg-dark_bg border border-white/10 rounded-lg px-3 pr-8 text-sm text-primary_color/70 outline-none"
          >
            <option disabled className="bg-dark_bg text-primary_color">
              Change Status
            </option>
            <option className="bg-dark_bg text-primary_color">Pending</option>
            <option className="bg-dark_bg text-primary_color">Delivered</option>
            <option className="bg-dark_bg text-primary_color">Canceled</option>
          </select>
          <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary_color/40" />
        </div>

        <button className="h-10 sm:h-11 px-5 rounded-lg bg-white/5 border border-white/10 text-sm text-primary_color/70 hover:bg-white/10 transition">
          Save
        </button>

        <button className="h-10 sm:h-11 w-11 rounded-lg bg-white/5 border border-white/10 grid place-items-center text-primary_color/70 hover:bg-white/10 transition">
          <FiPrinter className="text-lg" />
        </button>
      </div>
    </div>
  );
}
