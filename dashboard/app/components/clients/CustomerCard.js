import Image from "next/image";
import React from "react";
import { FiMoreVertical } from "react-icons/fi";

const dotColor = (status) =>
  status === "Online" ? "bg-emerald-400" : "bg-white/30";

const Status = ({ status }) => (
  <div className="flex items-center gap-2 text-xs text-primary_color/70">
    <span className={`h-2 w-2 rounded-full ${dotColor(status)}`} />
    <span>{status}</span>
  </div>
);
const CustomerCard = ({ c }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-black/30 p-4 sm:p-5 hover:bg-white/5 transition">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 rounded-full overflow-hidden shrink-0 bg-white/5">
            <Image
              src={c.avatar}
              alt={c.name}
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-primary_color truncate">
              {c.name}
            </p>
            <p className="text-xs text-primary_color/50 truncate">{c.email}</p>
          </div>
        </div>

        <button className="h-8 w-8 grid place-items-center rounded-full hover:bg-white/5 transition text-primary_color/50">
          <FiMoreVertical />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-primary_color/60">
        <div className="space-y-1">
          <p className="text-primary_color/40">Phone</p>
          <p className="text-primary_color/80">{c.phone}</p>
        </div>

        <div className="space-y-1">
          <p className="text-primary_color/40">Joined</p>
          <p className="text-primary_color/80 whitespace-nowrap">{c.joined}</p>
        </div>

        <div className="col-span-2 space-y-1">
          <p className="text-primary_color/40">Billing Address</p>
          <p className="text-primary_color/80 leading-relaxed">
            {c.addressLine1}
            <br />
            {c.addressLine2}
          </p>
        </div>

        <div className="col-span-2 flex items-center justify-between pt-1">
          <Status status={c.status} />
          <label className="flex items-center gap-2 text-primary_color/50">
            <input
              type="checkbox"
              className="accent-brand_color w-4 h-4 rounded"
            />
            Select
          </label>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
