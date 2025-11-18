import ProductCard from "@/app/ui/ProductCard";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const products = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/products?limit=5&skip=6`, {
      method: "GET",
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const BestSellerProduct = async () => {
  const data = await products();

  return (
    <section className="featureProduct py-20">
      <div className="container">
        <div className="heading flex items-center justify-between mb-10">
          <h3 className="text-[40px] font-semibold leading-[120%] text-black_main">
            Best Seller Products
          </h3>
          <Link
            href={"/shop"}
            className="flex items-center gap-2 text-primary_color"
          >
            View All{" "}
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data?.products?.map((item, index) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerProduct;
