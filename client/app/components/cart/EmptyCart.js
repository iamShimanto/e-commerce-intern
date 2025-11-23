import Image from "next/image";
import Link from "next/link";
import React from "react";

const EmptyCart = ({ cart }) => {
  return (
    <>
      {cart.length === 0 && (
        <div className="text-center py-16 border rounded-2xl shadow-sm bg-gray-50">
          <Image
            src="/images/empty-cart.png"
            alt="Empty Cart"
            width={200}
            height={200}
            className="mx-auto opacity-80"
          />

          <h3 className="text-xl font-semibold mt-6 text-black_main">
            Your cart is empty
          </h3>
          <p className="text-gray-600 mt-2">
            Looks like you haven&apos;t added anything yet.
          </p>

          <Link
            href="/shop"
            className="mt-6 inline-block bg-primary_color text-white px-8 py-3 rounded-full font-medium hover:bg-hardprimary transition"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </>
  );
};

export default EmptyCart;
