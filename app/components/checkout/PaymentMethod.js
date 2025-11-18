"use client";

import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function PaymentMethod({ paymentMethod, setPaymentMethod }) {
  const [loading, setLoading] = useState(false);
  const { clearCart } = useCart();
  const router = useRouter();

  const handleOrder = async () => {
    setLoading(true);

    await new Promise((r) => setTimeout(r, 2000));

    setLoading(false);
    toast.success("Order placed successfully!");
    clearCart();
    router.push("/shop");
  };
  return (
    <div className="border rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-3">Payment Method</h3>

      <div className="space-y-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
            className="accent-primary_color"
          />
          <span className="text-sm text-gray-800">Cash on Delivery</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
            className="accent-primary_color"
          />
          <span className="text-sm text-gray-800">PayPal</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="amazon"
            checked={paymentMethod === "amazon"}
            onChange={() => setPaymentMethod("amazon")}
            className="accent-primary_color"
          />
          <span className="text-sm text-gray-800">Amazon Pay</span>
        </label>
      </div>

      <button
        onClick={handleOrder}
        disabled={loading}
        className={`mt-8 w-full py-3 rounded-full font-medium text-sm transition flex justify-center items-center gap-2 
        ${
          loading
            ? "bg-hardprimary cursor-not-allowed"
            : "bg-primary_color hover:bg-hardprimary text-white"
        }`}
      >
        {loading ? (
          <>
            <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Processing...
          </>
        ) : (
          "Place Order"
        )}
      </button>
    </div>
  );
}
