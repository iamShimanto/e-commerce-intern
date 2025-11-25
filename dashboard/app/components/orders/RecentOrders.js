"use client";

import Image from "next/image";
import { FiMoreVertical } from "react-icons/fi";
import Breadcrumb from "../ui/BreadCrumb";
import Link from "next/link";

const orders = [
  {
    id: 1,
    orderId: "#25413",
    customer: "Jerome Bell",
    avatar: "/images/user1.png",
    method: "American Express",
    date: "17 Oct, 2022",
    status: "Delivered",
    total: "$106.58",
  },
  {
    id: 2,
    orderId: "#25413",
    customer: "Cody Fisher",
    avatar: "/images/user2.png",
    method: "PayPal",
    date: "1 Feb, 2022",
    status: "Pending",
    total: "$710.68",
  },
  {
    id: 3,
    orderId: "#25413",
    customer: "Wade Warren",
    avatar: "/images/user3.png",
    method: "Check",
    date: "8 Sep, 2022",
    status: "Delivered",
    total: "$406.27",
  },
  {
    id: 4,
    orderId: "#25413",
    customer: "Savannah Nguyen",
    avatar: "/images/user4.png",
    method: "PayPal",
    date: "17 Oct, 2022",
    status: "Canceled",
    total: "$943.65",
  },
  {
    id: 5,
    orderId: "#25413",
    customer: "Savannah Nguyen",
    avatar: "/images/user4.png",
    method: "Visa",
    date: "21 Sep, 2022",
    status: "Canceled",
    total: "$943.65",
  },
  {
    id: 6,
    orderId: "#25413",
    customer: "Savannah Nguyen",
    avatar: "/images/user4.png",
    method: "Cash",
    date: "21 Sep, 2022",
    status: "Canceled",
    total: "$943.65",
  },
  {
    id: 7,
    orderId: "#25413",
    customer: "Kathryn Murphy",
    avatar: "/images/user5.png",
    method: "Visa",
    date: "22 Oct, 2022",
    status: "Delivered",
    total: "$450.54",
  },
  {
    id: 8,
    orderId: "#25413",
    customer: "Kathryn Murphy",
    avatar: "/images/user5.png",
    method: "MasterCard",
    date: "8 Sep, 2022",
    status: "Delivered",
    total: "$450.54",
  },
  {
    id: 9,
    orderId: "#25413",
    customer: "Kathryn Murphy",
    avatar: "/images/user5.png",
    method: "American Express",
    date: "21 Sep, 2022",
    status: "Delivered",
    total: "$450.54",
  },
  {
    id: 10,
    orderId: "#25413",
    customer: "Eleanor Pena",
    avatar: "/images/user6.png",
    method: "PayPal",
    date: "17 Oct, 2022",
    status: "Pending",
    total: "$219.78",
  },
  {
    id: 11,
    orderId: "#25413",
    customer: "Ronald Richards",
    avatar: "/images/user1.png",
    method: "Visa",
    date: "24 May, 2022",
    status: "Pending",
    total: "$219.78",
  },
  {
    id: 12,
    orderId: "#25413",
    customer: "Jerome Bell",
    avatar: "/images/user1.png",
    method: "Visa",
    date: "24 May, 2022",
    status: "Pending",
    total: "$219.78",
  },
  {
    id: 13,
    orderId: "#25413",
    customer: "Floyd Miles",
    avatar: "/images/user1.png",
    method: "Cash",
    date: "21 Sep, 2022",
    status: "Canceled",
    total: "$576.28",
  },
  {
    id: 14,
    orderId: "#25413",
    customer: "Ralph Edwards",
    avatar: "/images/user1.png",
    method: "American Express",
    date: "24 May, 2022",
    status: "Canceled",
    total: "$576.28",
  },
  {
    id: 15,
    orderId: "#25413",
    customer: "Guy Hawkins",
    avatar: "/images/user1.png",
    method: "American Express",
    date: "17 Oct, 2022",
    status: "Canceled",
    total: "$576.28",
  },
];

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
            <Link href={"/orders/1"}
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
