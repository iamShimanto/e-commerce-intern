"use client";

import Breadcrumb from "@/app/ui/Breadcrumb";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import BillingForm from "@/app/components/checkout/BillingForm";
import PaymentMethod from "@/app/components/checkout/PaymentMethod";
import OrderSummary from "@/app/components/checkout/OrderSummary";

export default function CheckoutPage() {
  const { cart, subtotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <div className="mt-20">
      <Breadcrumb items={[{ label: "Checkout" }]} />

      <div className="container mb-10">
        <h2 className="text-[32px] font-semibold text-black_main text-center py-10">
          Checkout
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <BillingForm />
          </div>

          <div className="space-y-6">
            <OrderSummary cart={cart} subtotal={subtotal} />
            <PaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
