"use client";

import Image from "next/image";
import { FiMoreVertical } from "react-icons/fi";
import Breadcrumb from "../ui/BreadCrumb";
import Link from "next/link";
import { ordersdata } from "./orderdata";

const orders = ordersdata;

const statusDot = (status) => {
  if (status === "Delivered") return "bg-emerald-400";
  if (status === "Pending") return "bg-orange-400";
  if (status === "Canceled") return "bg-red-500";
  return "bg-gray-500";
};

export default function RecentOrders() {
  return (
    <section className="w-full min-w-0">
      <div className="w-full rounded-2xl bg-dark_bg border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden">
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/5">
          <h3 className="text-2xl sm:text-4xl font-semibold text-primary_color">
            Recent Orders
          </h3>
          <FiMoreVertical className="text-primary_color/50 cursor-pointer" />
        </div>
        <div className="ml-6 mt-2">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Orders" }]}
          />
        </div>

        <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map((o) => (
            <Link
              href={"/orders/1"}
              key={o.id}
              className="w-full rounded-xl border border-white/10 bg-black/30 p-4 space-y-3 hover:bg-white/5 transition"
            >
              <div className="flex items-center justify-between">
                <div className="text-primary_color font-semibold">
                  {o.orderId}
                </div>
                <button className="text-primary_color/50 hover:text-primary_color transition">
                  <FiMoreVertical />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={o.avatar}
                    alt={o.customer}
                    width={36}
                    height={36}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-primary_color font-medium truncate">
                    {o.customer}
                  </div>
                  <div className="text-xs text-primary_color/50 truncate">
                    {o.method}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-primary_color/60">
                <div className="flex items-center gap-2">
                  <span className="text-primary_color/40">Date:</span>
                  <span className="whitespace-nowrap">{o.date}</span>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span className="text-primary_color/40">Total:</span>
                  <span className="text-primary_color font-semibold">
                    {o.total}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2 text-xs text-primary_color/80">
                  <span
                    className={`h-2 w-2 rounded-full ${statusDot(o.status)}`}
                  />
                  <span>{o.status}</span>
                </div>
                <div className="text-xs text-primary_color/50">{o.method}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
