"use client";
import Breadcrumb from "@/app/ui/Breadcrumb";
import Image from "next/image";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowRightFromBracket, FaClockRotateLeft, FaGear, FaHeart, FaTableColumns } from "react-icons/fa6";


export default function Dashboard() {
  const [active, setActive] = useState("Dashboard");

  const menu = [
    { label: "Dashboard", icon: <FaTableColumns /> },
    { label: "Order History", icon: <FaClockRotateLeft /> },
    { label: "Wishlist", icon: <FaHeart /> },
    { label: "Shopping Cart", icon: <FaShoppingCart /> },
    { label: "Settings", icon: <FaGear /> },
    { label: "Log-out", icon: <FaArrowRightFromBracket /> },
  ];

  const orders = [
    {
      id: "#7388",
      date: "8 Sep, 2020",
      total: "$135.00 (5 Products)",
      status: "Processing",
    },
    {
      id: "#703",
      date: "24 May, 2020",
      total: "$25.00 (1 Product)",
      status: "On the way",
    },
    {
      id: "#130",
      date: "22 Oct, 2020",
      total: "$250.00 (4 Products)",
      status: "Completed",
    },
    {
      id: "#561",
      date: "1 Feb, 2020",
      total: "$35.00 (1 Product)",
      status: "Completed",
    },
    {
      id: "#536",
      date: "21 Sep, 2020",
      total: "$578.00 (3 Products)",
      status: "Completed",
    },
    {
      id: "#492",
      date: "22 Oct, 2020",
      total: "$345.00 (7 Products)",
      status: "Completed",
    },
  ];

  return (
    <div className="pt-20">
      <Breadcrumb items={[{ label: "Dashboard" }]} />
      <div className="container py-10 grid grid-cols-1 lg:grid-cols-5 gap-8">
        <aside className="border rounded-xl shadow-sm p-4 h-fit">
          <h3 className="text-sm font-semibold text-gray-600 mb-4">
            Navigation
          </h3>
          <ul className="space-y-2">
            {menu.map((item) => (
              <li
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                  active === item.label
                    ? "bg-green-50 text-primary_color border-l-4 border-primary_color"
                    : "text-gray-500 hover:text-black_main"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </aside>

   
        <main className="lg:col-span-4 space-y-6">
       
          <div className="grid sm:grid-cols-2 gap-6">
            
            <div className="border rounded-xl p-6 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-black_main">
                Dianne Russell
              </h3>
              <p className="text-gray-500 text-sm">Customer</p>
              <button className="text-primary_color text-sm font-medium mt-2 hover:underline">
                Edit Profile
              </button>
            </div>

           
            <div className="border rounded-xl p-6">
              <h4 className="text-sm font-semibold text-black_main mb-2">
                Billing Address
              </h4>
              <p className="text-gray-700 text-sm font-medium">
                Dianne Russell
              </p>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                4140 Parker Rd. Allentown, New Mexico 31134
              </p>
              <p className="text-gray-500 text-sm mt-2">
                dianne.russell@gmail.com
              </p>
              <p className="text-gray-500 text-sm">(671) 555-0110</p>
              <button className="text-primary_color text-sm font-medium mt-2 hover:underline">
                Edit Address
              </button>
            </div>
          </div>

          
          <div className="border rounded-xl p-6 overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold text-black_main">
                Recent Order History
              </h4>
              <button className="text-primary_color text-sm font-medium hover:underline">
                View All
              </button>
            </div>

            <table className="w-full text-sm border-t">
              <thead className="text-left text-gray-500 font-medium">
                <tr className="border-b">
                  <th className="py-3">Order ID</th>
                  <th className="py-3">Date</th>
                  <th className="py-3">Total</th>
                  <th className="py-3">Status</th>
                  <th className="py-3"></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, i) => (
                  <tr
                    key={i}
                    className="border-b last:border-0 hover:bg-gray-50 transition"
                  >
                    <td className="py-3 font-medium">{order.id}</td>
                    <td className="py-3 text-gray-600">{order.date}</td>
                    <td className="py-3 text-gray-800 font-semibold">
                      {order.total}
                    </td>
                    <td
                      className={`py-3 capitalize ${
                        order.status === "Processing"
                          ? "text-yellow-500"
                          : order.status === "On the way"
                          ? "text-blue-500"
                          : "text-green-600"
                      }`}
                    >
                      {order.status}
                    </td>
                    <td className="py-3 text-primary_color font-medium cursor-pointer hover:underline">
                      View Details
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
