"use client";

import Image from "next/image";

export default function OrderSummary({ cart, subtotal }) {
  return (
    <div className="border rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Order Summary</h3>

      <div className="space-y-4 text-sm">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src={item.thumbnail}
                alt={"image"}
                width={40}
                height={40}
                className="rounded-md object-contain"
              />
              <span className="text-gray-800">
                {item.name} ×{item.quantity}
              </span>
            </div>
            <span className="font-semibold text-black_main">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}

        <div className="border-t pt-3 flex justify-between">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-semibold text-black_main">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="text-gray-600">Shipping:</span>
          <span className="font-semibold text-primary_color">Free</span>
        </div>

        <div className="flex justify-between text-lg font-semibold pt-3">
          <span>Total:</span>
          <span className="text-black_main">${subtotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
