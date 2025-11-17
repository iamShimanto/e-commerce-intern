"use client";

import Image from "next/image";
import CommonBtn from "@/app/ui/CommonBtn";
import bannerImg from "@/public/images/discount-banner.png"; 

const DiscountBanner = () => {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl container">
      {/* RIGHT SIDE BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bannerImg}
          alt="discount banner"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* LEFT SIDE CONTENT */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-20 py-16 max-w-xl">
        <p className="text-sm text-white/70 tracking-widest mb-2">BEST DEALS</p>

        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Sale of the Month
        </h2>

        {/* COUNTDOWN TIMER */}
        <div className="flex items-center gap-5 text-center text-white mb-10">
          <div>
            <p className="text-3xl font-bold">00</p>
            <span className="text-xs text-white/60">DAYS</span>
          </div>

          <div>
            <p className="text-3xl font-bold">02</p>
            <span className="text-xs text-white/60">HOURS</span>
          </div>

          <div>
            <p className="text-3xl font-bold">18</p>
            <span className="text-xs text-white/60">MINS</span>
          </div>

          <div>
            <p className="text-3xl font-bold">46</p>
            <span className="text-xs text-white/60">SECS</span>
          </div>
        </div>

        <CommonBtn
          variant="primary"
          size="md"
          rightIcon="→"
          className="bg-primary_color px-10 py-4 text-white hover:bg-hardprimary"
        >
          Shop Now
        </CommonBtn>
      </div>

      {/* 56% OFF BUBBLE */}
      <div className="absolute top-8 right-8 bg-[#FF8A00] text-white w-24 h-24 rounded-full flex flex-col justify-center items-center font-bold shadow-lg z-10">
        <span className="text-3xl">56%</span>
        <span className="text-xs -mt-1">OFF</span>
      </div>
    </section>
  );
};

export default DiscountBanner;
