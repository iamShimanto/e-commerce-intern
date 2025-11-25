"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const ListView = ({ products }) => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-dark_bg shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
      {/* ===== Header ===== */}
      <div className="hidden md:grid grid-cols-[80px_1.5fr_1fr_1fr_1fr_0.5fr_0.7fr_0.8fr_0.3fr] border-b border-white/5 text-xs text-primary_color/40 uppercase px-4 py-3">
        <span>Image</span>
        <span>Name</span>
        <span>SKU</span>
        <span>Price</span>
        <span>Status</span>
        <span>QTY</span>
        <span>Rating</span>
        <span>Sales</span>
        <span className="text-right">Actions</span>
      </div>

      {/* ===== Rows ===== */}
      <div className="divide-y divide-white/5">
        {products.map((p) => (
          <div
            key={p.id}
            className="grid grid-cols-[80px_1.5fr_1fr_1fr_1fr_0.5fr_0.7fr_0.8fr_0.3fr] items-center px-4 py-3 text-sm text-primary_color/70 hover:bg-white/5 transition"
          >
            {/* Image */}
            <div>
              <Image
                src={p.image}
                alt={p.name}
                width={60}
                height={60}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Name + Description */}
            <div>
              <p className="text-primary_color font-medium">{p.name}</p>
              <p className="text-xs text-primary_color/50 truncate">
                {p.description}
              </p>
            </div>

            {/* SKU */}
            <div className="text-primary_color/80">{p.sku}</div>

            {/* Price */}
            <div className="font-semibold text-primary_color">{p.price}</div>

            {/* Status */}
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>{p.status}</span>
            </div>

            {/* Quantity */}
            <div>{p.qty}</div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-400">
              {Array.from({ length: p.rating }).map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
            </div>

            {/* Sales */}
            <div className="font-medium text-primary_color">{p.sales}</div>

            {/* Actions */}
            <div className="text-right">
              <button className="text-primary_color/50 hover:text-primary_color transition">
                <FiMoreVertical />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Mobile View ===== */}
      <div className="block md:hidden divide-y divide-white/10">
        {products.map((p) => (
          <div
            key={p.id}
            className="flex flex-col gap-3 p-3 text-sm text-primary_color/80"
          >
            <div className="flex items-center gap-3">
              <Image
                src={p.image}
                alt={p.name}
                width={60}
                height={60}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <p className="text-primary_color font-semibold">{p.name}</p>
                <p className="text-xs text-primary_color/50 line-clamp-1">
                  {p.description}
                </p>
              </div>
              <button className="text-primary_color/50 hover:text-primary_color transition">
                <FiMoreVertical />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-primary_color/60">
              <p>
                <span className="text-primary_color/50">SKU:</span> {p.sku}
              </p>
              <p>
                <span className="text-primary_color/50">Price:</span> {p.price}
              </p>
              <p>
                <span className="text-primary_color/50">Status:</span>{" "}
                {p.status}
              </p>
              <p>
                <span className="text-primary_color/50">Sales:</span> {p.sales}
              </p>
            </div>

            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: p.rating }).map((_, i) => (
                  <FaStar key={i} size={12} />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span>{p.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListView;
