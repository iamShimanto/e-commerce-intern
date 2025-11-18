"use client";

import { FaShoppingBag } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => (addToCart(product, 1), toast.success("Product added to cart"))}
      className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gray-300 text-softprimary flex items-center justify-center text-lg hover:bg-green-600 hover:text-white duration-200 cursor-pointer"
    >
      <FaShoppingBag />
    </button>
  );
}
