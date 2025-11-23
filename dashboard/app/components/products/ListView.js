import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const ListView = ({ products }) => {
  return (
    <>
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-dark_bg shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
        <table className="w-full min-w-[800px] text-left text-sm text-primary_color/70">
          <thead>
            <tr className="border-b border-white/5 text-xs text-primary_color/40 uppercase">
              <th className="py-4 px-4">Image</th>
              <th className="py-4 px-4">Name</th>
              <th className="py-4 px-4">SKU</th>
              <th className="py-4 px-4">Price</th>
              <th className="py-4 px-4">Status</th>
              <th className="py-4 px-4">QTY</th>
              <th className="py-4 px-4">Rating</th>
              <th className="py-4 px-4">Sales</th>
              <th className="py-4 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="py-3 px-4">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                </td>
                <td className="py-3 px-4 w-60">
                  <p className="text-primary_color font-medium">{p.name}</p>
                  <p className="text-xs text-primary_color/50 line-clamp-1">
                    {p.description}
                  </p>
                </td>
                <td className="py-3 px-4">{p.sku}</td>
                <td className="py-3 px-4 font-semibold text-primary_color">
                  {p.price}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                    <span>{p.status}</span>
                  </div>
                </td>
                <td className="py-3 px-4">{p.qty}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: p.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </td>
                <td className="py-3 px-4 font-medium">{p.sales}</td>
                <td className="py-3 px-4 text-right">
                  <button className="text-primary_color/50 hover:text-primary_color transition">
                    <FiMoreVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListView;
