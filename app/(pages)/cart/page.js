"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";
import Breadcrumb from "@/app/ui/Breadcrumb";
import { useCart } from "@/app/context/CartContext";
import EmptyCart from "@/app/components/cart/EmptyCart";

export default function CartPage() {
  const { cart, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <div className="mt-20">
      <Breadcrumb items={[{ label: "Cart" }]} />

      <div className="container mb-10 pb-5">
        <h2 className="text-[32px] font-semibold text-black_main text-center py-10">
          My Shopping Cart
        </h2>

        <EmptyCart cart={cart} />

        {cart.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="border rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-gray-500 text-sm uppercase border-b">
                    <tr>
                      <th className="py-4 px-6 w-[40%]">Product</th>
                      <th className="py-4 px-6">Price</th>
                      <th className="py-4 px-6">Quantity</th>
                      <th className="py-4 px-6">Subtotal</th>
                      <th className="py-4 px-6"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b last:border-0 hover:bg-gray-50 transition"
                      >
                        <td className="py-6 px-6 flex items-center gap-4">
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            width={64}
                            height={64}
                            className="object-contain"
                          />
                          <span className="font-medium text-black_main">
                            {item.title}
                          </span>
                        </td>

                        <td className="py-6 px-6 text-gray-700 font-medium">
                          ${item.price.toFixed(2)}
                        </td>

                        <td className="py-6 px-6">
                          <div className="flex items-center justify-center gap-3 border rounded-full bg-gray-50 px-4 py-2 w-fit">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                              className="text-gray-500 hover:text-black_main disabled:opacity-40"
                            >
                              <FaMinus />
                            </button>

                            <span className="font-semibold text-black_main">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="text-gray-500 hover:text-black_main"
                            >
                              <FaPlus />
                            </button>
                          </div>
                        </td>

                        <td className="py-6 px-6 text-black_main font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>

                        <td className="py-6 px-6 text-right">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <FaXmark />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
                <Link
                  href="/shop"
                  className="px-6 py-3 rounded-full border border-gray-300 text-sm font-medium text-black_main hover:bg-gray-100 transition"
                >
                  Return to shop
                </Link>
              </div>
            </div>

            <div>
              <div className="border rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Cart Total</h3>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold text-black_main">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-semibold text-primary_color">
                      Free
                    </span>
                  </div>

                  <div className="flex justify-between pb-3 text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-black_main">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Link
                  href={"/checkout"}
                  className="mt-6 w-full bg-primary_color hover:bg-hardprimary text-white py-3 rounded-full font-medium text-sm transition cursor-pointer block text-center"
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
