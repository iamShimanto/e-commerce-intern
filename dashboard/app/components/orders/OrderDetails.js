"use client";

import Breadcrumb from "../ui/BreadCrumb";
import OrderHeader from "./OrderHeader";
import OrderInfoGrid from "./OrderInfoGrid";
import PaymentAndNotes from "./PaymentAndNotes";
import ProductsSection from "./ProductsSection";


const order = {
  id: "#68543",
  placedAt: "Mon, Jan 28, 2022, 8:40AM",
  status: "Pending",
  customer: {
    name: "Jane Cooper",
    email: "tim.jennings@example.com",
    phone: "+099 856 245",
  },
  orderInfo: {
    shipping: "Next express",
    payment: "Paypal",
    status: "Pending",
  },
  deliverTo: {
    address1: "Santa Ana, Illinois 85486",
    address2: "2972 Westheimer Rd.",
    block: "Block 9A",
  },
  paymentInfo: {
    card: "Master Card**** **** 6557",
    business: "Fox Market LLC",
    phone: "+09985 6578 52",
  },
  items: [
    {
      id: 1,
      name: "Bose noirse cancelling",
      image: "/images/products/headphone2.png",
      price: 948.55,
      qty: 2,
      total: 630.44,
    },
    {
      id: 2,
      name: "Philips wireless head phone",
      image: "/images/products/bottle.png",
      price: 767.5,
      qty: 3,
      total: 767.5,
    },
    {
      id: 3,
      name: "Cumitt smart watch",
      image: "/images/products/watch2.png",
      price: 396.84,
      qty: 1,
      total: 475.22,
    },
    {
      id: 4,
      name: "Google Fixel Buds",
      image: "/images/products/gamepad.png",
      price: 778.35,
      qty: 4,
      total: 293.01,
    },
  ],
  summary: {
    subtotal: 630.44,
    tax: 782.01,
    discount: 293.01,
    total: 310000,
    status: "Pending",
  },
};

export default function OrderDetails() {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-lg sm:text-xl font-bold text-primary_color">
        Order Details
      </h2>
      <div>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Orders", href: "/orders" },
            { label: "Order Details" },
          ]}
        />
      </div>

      <section className="w-full rounded-2xl bg-dark_bg border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-4 sm:p-6 space-y-6">
        <OrderHeader order={order} />
        <OrderInfoGrid order={order} />
        <PaymentAndNotes paymentInfo={order.paymentInfo} />
        <ProductsSection items={order.items} summary={order.summary} />
      </section>
    </div>
  );
}
