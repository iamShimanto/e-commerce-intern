"use client";

import CategoryCard from "@/app/ui/CategoryCard";
import Link from "next/link";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import cate1 from "@/public/images/cate1.png";
import cate2 from "@/public/images/cate2.png";
import cate3 from "@/public/images/cate3.png";
import cate4 from "@/public/images/cate4.png";
import cate5 from "@/public/images/cate5.png";
import cate6 from "@/public/images/cate6.png";

const categories = [
  { icon: cate1, title: "Vegetables", count: 165 },
  { icon: cate2, title: "Fresh Fruits", count: 120 },
  { icon: cate3, title: "Meat & Fish", count: 80 },
  { icon: cate4, title: "Bakery", count: 60 },
  { icon: cate5, title: "Juices", count: 40 },
  { icon: cate6, title: "Snacks", count: 100 },
  { icon: cate1, title: "Vegetables", count: 165 },
  { icon: cate2, title: "Fresh Fruits", count: 120 },
  { icon: cate3, title: "Meat & Fish", count: 80 },
  { icon: cate4, title: "Bakery", count: 60 },
  { icon: cate5, title: "Juices", count: 40 },
  { icon: cate6, title: "Snacks", count: 100 },
];

const ShopByCategory = () => {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-[40px] font-semibold leading-[120%] text-black_main">
            Shop by Top Categories
          </h3>
          <Link
            href="/shop"
            className="flex items-center gap-2 text-primary_color"
          >
            View All <FaArrowRight />
          </Link>
        </div>

        <div className="relative">
          <button className="custom-prev absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-primary_color text-xl hover:bg-primary_color hover:text-white duration-200">
            <FaChevronLeft />
          </button>

          <button className="custom-next absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-primary_color text-xl hover:bg-primary_color hover:text-white duration-200">
            <FaChevronRight />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            spaceBetween={24}
            loop
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="pb-10"
          >
            {categories.map((item, index) => (
              <SwiperSlide key={index}>
                <CategoryCard
                  icon={item.icon}
                  title={item.title}
                  count={item.count}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
