"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function Accordion({ items }) {
  // ====== active accordion id
  const [openId, setOpenId] = useState(0);

  // ====== toggle accordion
  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3 mt-10">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border rounded-xl overflow-hidden transition-all duration-300 ${
            openId === index
              ? "border-primary_color bg-green-50"
              : "border-gray-200 bg-white"
          }`}
        >
          {/* ====== accordion header ============= */}
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-6 py-4 text-left"
          >
            <p
              className={`font-semibold text-lg ${
                openId === index ? "text-primary_color" : "text-black_main"
              }`}
            >
              {item.title}
            </p>

            <span className="text-gray-500 text-xl">
              {openId === index ? <FaMinus /> : <FaPlus />}
            </span>
          </button>

          {/* ====== accordion body ============= */}
          {openId === index && (
            <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
