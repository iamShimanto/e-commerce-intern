"use client";

import Image from "next/image";
import { FiMoreVertical } from "react-icons/fi";

const orders = [
  {
    id: 1,
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Bessie Cooper",
    avatar: "/images/user1.png",
    status: "Delivered",
    amount: "$400.00",
  },
  {
    id: 2,
    product: "iPhone 11 Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Annette Black",
    avatar: "/images/user2.png",
    status: "Pending",
    amount: "$200.00",
  },
  {
    id: 3,
    product: "Oppo A20",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Bessie Cooper",
    avatar: "/images/user1.png",
    status: "Delivered",
    amount: "$250.00",
  },
  {
    id: 4,
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Kristin Watson",
    avatar: "/images/user3.png",
    status: "Canceled",
    amount: "$400.00",
  },
  {
    id: 5,
    product: "MacBook Air",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Esther Howard",
    avatar: "/images/user4.png",
    status: "Delivered",
    amount: "$100.00",
  },
  {
    id: 6,
    product: "Samsung A50",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Jerome Bell",
    avatar: "/images/user5.png",
    status: "Pending",
    amount: "$150.00",
  },
  {
    id: 7,
    product: "MacBook Air",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Brooklyn",
    avatar: "/images/user6.png",
    status: "Canceled",
    amount: "$150.00",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Delivered":
      return "bg-emerald-400";
    case "Pending":
      return "bg-orange-400";
    case "Canceled":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

export default function RecentPurchases() {
  return (
    <div className="w-full rounded-2xl bg-dark_bg border border-white/10 p-4 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)] mt-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <h3 className="text-sm sm:text-base font-semibold text-primary_color">
          Recent Purchases
        </h3>
        <FiMoreVertical className="text-primary_color/50 cursor-pointer" />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block w-full overflow-x-auto">
        <table className="w-full text-left text-sm text-primary_color/70 table-auto">
          <thead>
            <tr className="border-b border-white/5 text-xs text-primary_color/40 uppercase">
              <th className="py-3 px-2 w-10">
                <input
                  type="checkbox"
                  className="accent-brand_color w-4 h-4 rounded cursor-pointer"
                />
              </th>
              <th className="py-3 px-2">Products</th>
              <th className="py-3 px-2">Order ID</th>
              <th className="py-3 px-2">Date</th>
              <th className="py-3 px-2">Customer</th>
              <th className="py-3 px-2">Status</th>
              <th className="py-3 px-2 text-right">Amount</th>
              <th className="py-3 px-2 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr
                key={o.id}
                className="border-b border-white/5 hover:bg-white/5 transition-colors duration-150"
              >
                <td className="py-3 px-2">
                  <input
                    type="checkbox"
                    className="accent-brand_color w-4 h-4 rounded cursor-pointer"
                  />
                </td>
                <td className="py-3 px-2 font-medium text-primary_color whitespace-nowrap">
                  {o.product}
                </td>
                <td className="py-3 px-2">{o.orderId}</td>
                <td className="py-3 px-2 whitespace-nowrap">{o.date}</td>
                <td className="py-3 px-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={o.avatar}
                        alt={o.customer}
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="truncate max-w-[120px] sm:max-w-40 text-ellipsis">
                      {o.customer}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${getStatusColor(
                        o.status
                      )}`}
                    />
                    <span className="whitespace-nowrap">{o.status}</span>
                  </div>
                </td>
                <td className="py-3 px-2 text-right font-semibold text-primary_color whitespace-nowrap">
                  {o.amount}
                </td>
                <td className="py-3 px-2 text-right">
                  <button className="text-primary_color/50 hover:text-primary_color transition">
                    <FiMoreVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="block md:hidden mt-4 space-y-3">
        {orders.map((o) => (
          <div
            key={o.id}
            className="rounded-xl border border-white/10 bg-black/30 p-3 flex flex-col gap-2 text-sm text-primary_color/80"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold">{o.product}</p>
              <span
                className={`h-2 w-2 rounded-full ${getStatusColor(o.status)}`}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-primary_color/50">
              <p>{o.orderId}</p>
              <p>{o.date}</p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Image
                src={o.avatar}
                alt={o.customer}
                width={28}
                height={28}
                className="rounded-full object-cover"
              />
              <p className="font-medium text-primary_color">{o.customer}</p>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs">{o.status}</span>
              <span className="font-semibold text-primary_color">
                {o.amount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
