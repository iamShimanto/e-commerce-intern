import ProductCard from "@/app/ui/ProductCard";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import product1 from "@/public/images/product1.png";
import product2 from "@/public/images/product2.png";
import product3 from "@/public/images/product3.png";
import product4 from "@/public/images/product4.png";

const FeatureProduct = () => {
  const products = [
    {
      img: product1,
      title: "Green Apple",
      price: "14.99",
      rating: 5,
    },
    {
      img: product2,
      title: "Chanise Cabbage",
      price: "14.99",
      rating: 5,
    },
    {
      img: product3,
      title: "Green Capsicum",
      price: "14.99",
      rating: 5,
    },
    {
      img: product4,
      title: "Ladies Finger",
      price: "14.99",
      rating: 5,
    },
  ];

  return (
    <section className="featureProduct py-20">
      <div className="container">
        <div className="heading flex items-center justify-between mb-10">
          <h3 className="text-[40px] font-semibold leading-[120%] text-black_main">
            Featured Products
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
