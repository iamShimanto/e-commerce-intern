"use client";

import { useState } from "react";
import Breadcrumb from "@/app/ui/Breadcrumb";
import { useCart } from "@/app/context/CartContext";
import BillingForm from "@/app/components/checkout/BillingForm";
import PaymentMethod from "@/app/components/checkout/PaymentMethod";
import OrderSummary from "@/app/components/checkout/OrderSummary";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, subtotal, clearCart } = useCart();
  const router = useRouter();

  // BILLING FORM DATA
  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    country: "",
    state: "",
    email: "",
    phone: "",
    notes: "",
  });

  // Errors
  const [errors, setErrors] = useState({});

  // PAYMENT METHOD
  const [paymentMethod, setPaymentMethod] = useState("");

  // LOADING
  const [loading, setLoading] = useState(false);

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!billing.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!billing.address.trim()) newErrors.address = "Address is required";
    if (!billing.country) newErrors.country = "Select country";
    if (!billing.email.trim()) newErrors.email = "Email is required";
    if (!billing.phone.trim()) newErrors.phone = "Phone is required";
    if (!paymentMethod) newErrors.paymentMethod = "Select a payment method";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // no errors → valid
  };

  const handlePlaceOrder = async () => {
    if (!validate()) {
      toast.error("Please fill all required fields!");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));

    setLoading(false);
    toast.success("Order placed successfully!");

    clearCart();
    router.push("/shop");
  };

  return (
    <div className="mt-20">
      <Breadcrumb
        items={[{ label: "Shop", href: "/shop" }, { label: "Checkout" }]}
      />

      <div className="container mb-10">
        <h2 className="text-[32px] font-semibold text-black_main text-center py-10">
          Checkout
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <BillingForm
              billing={billing}
              setBilling={setBilling}
              errors={errors}
            />
          </div>

          <div className="space-y-6">
            <OrderSummary cart={cart} subtotal={subtotal} />
            <PaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              error={errors.paymentMethod}
              handlePlaceOrder={handlePlaceOrder}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
