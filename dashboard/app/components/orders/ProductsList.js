"use client";

import Image from "next/image";

export default function ProductsList({ items }) {
  return (
    <div className="w-full">
      <div className="hidden md:grid grid-cols-[48px_1.6fr_0.8fr_0.8fr_0.8fr] text-sm text-primary_color/70 px-2 py-3 border-b border-white/5">
        <div className="grid place-items-center">
          <input
            type="checkbox"
            className="accent-brand_color w-4 h-4 rounded"
          />
        </div>
        <div className="font-semibold text-primary_color">Product Name</div>
        <div className="font-semibold text-primary_color">Price</div>
        <div className="font-semibold text-primary_color">Quantity</div>
        <div className="font-semibold text-primary_color text-right">Total</div>
      </div>

      <div className="divide-y divide-white/5">
        {items.map((it) => (
          <div
            key={it.id}
            className="grid grid-cols-1 md:grid-cols-[48px_1.6fr_0.8fr_0.8fr_0.8fr] items-center gap-3 md:gap-0 px-2 py-4 text-sm"
          >
            <div className="hidden md:grid place-items-center">
              <input
                type="checkbox"
                className="accent-brand_color w-4 h-4 rounded"
              />
            </div>

            <div className="flex items-center gap-3 min-w-0">
              <div className="h-9 w-9 rounded-md bg-black/40 border border-white/10 overflow-hidden shrink-0 grid place-items-center">
                <Image
                  src={it.image}
                  alt={it.name}
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-primary_color/80 truncate">{it.name}</p>
            </div>

            <div className="text-primary_color/60">${it.price.toFixed(2)}</div>
            <div className="text-primary_color/60">{it.qty}</div>
            <div className="text-primary_color/60 md:text-right">
              ${it.total.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
