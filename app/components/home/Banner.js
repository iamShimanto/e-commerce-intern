import Image from "next/image";
import React from "react";
import banner1 from "@/public/images/banner1.png";
import CommonBtn from "@/app/ui/CommonBtn";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="bg-[url(/images/banner-home.png)] bg-cover bg-no-repeat py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          <div className="flex justify-center md:justify-start">
            <Image
              src={banner1}
              alt="banner"
              className="w-full max-w-md md:max-w-full"
              priority
            />
          </div>

          <div className="flex flex-col items-start text-left">
            <p className="text-sm font-medium text-primary_color">
              Welcome to shopery
            </p>

            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl text-black_main font-semibold leading-[120%] mt-2 mb-5">
              Fresh & Healthy Organic Food
            </h1>

            <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-semibold leading-[120%] text-black_main">
              Sale up to <span className="text-[#FF8A00]">30% OFF</span>
            </h4>

            <p className="text-sm sm:text-base leading-[150%] text-secondary_color pt-3 pb-8 max-w-md">
              Free shipping on all your order. We deliver, you enjoy.
            </p>

            <CommonBtn rightIcon={<FaArrowRight />}>Shop now</CommonBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
