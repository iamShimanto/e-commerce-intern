import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ShopByCategory = () => {
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="heading flex items-center justify-between mb-10">
            <h3 className="text-[40px] font-semibold leading-[120%] text-black_main">Shop by Top Categories</h3>
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
        </div>
      </section>
    </>
  );
};

export default ShopByCategory;
