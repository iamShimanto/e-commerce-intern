import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const GridView = ({ products }) => {
  console.log(products);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((p) => (
          <Link
            href={`/products/${p?.id}`}
            key={p?.id}
            className="rounded-2xl border border-white/10 bg-dark_bg p-4 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:bg-white/8 transition"
          >
            <div className="flex justify-between items-start mb-3">
              <Image
                src={p?.images[0]}
                alt={p?.title}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
              <button className="text-primary_color/50 hover:text-primary_color transition">
                <FiMoreVertical />
              </button>
            </div>
            <p className="text-primary_color font-semibold mb-1">{p.name}</p>
            <div className="flex items-center gap-1 text-yellow-400 mb-2">
              {Array.from({ length: p.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-sm text-primary_color/50 mb-3">
              {p.description}
            </p>

            <div className="flex items-center justify-between text-sm text-primary_color/70 mb-2">
              <p>
                <span className="text-primary_color font-semibold">
                  {p.salePrice}
                </span>
              </p>
              <span className="text-primary_color/60">{p.SKU}</span>
            </div>

            <div className="flex items-center justify-between text-xs mt-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span className="text-primary_color/80">{p.status}</span>
              </div>
              <span className="text-primary_color/60 font-medium">
                {p.sales}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default GridView;
