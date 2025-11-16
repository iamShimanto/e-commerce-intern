"use client";

import Image from "next/image";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

import farmer1 from "@/public/images/farmer1.png";
import farmer2 from "@/public/images/farmer2.png";
import CommonBtn from "@/app/ui/CommonBtn";

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col sm:flex-row sm:gap-6 gap-4">
          <div className="sm:w-1/2 w-full">
            <Image
              src={farmer1}
              alt="Farmer 1"
              className="rounded-xl w-full h-auto object-cover shadow-lg"
            />
          </div>

          <div className="sm:w-1/2 w-full sm:mt-10">
            <Image
              src={farmer2}
              alt="Farmer 2"
              className="rounded-xl w-full h-auto object-cover shadow-lg"
            />
          </div>
        </div>

        <div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] leading-[120%] font-bold text-black_main mb-6 md:mb-8">
            100% Trusted <br /> Organic Food Store
          </h2>

          <div className="flex items-start gap-4 mb-6 md:mb-8">
            <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary_color flex items-center justify-center text-white text-base md:text-lg">
              <FaCheck />
            </span>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-black_main">
                Healthy & natural food for lovers of healthy food.
              </h4>
              <p className="text-sm text-secondary_color mt-2 max-w-lg leading-relaxed">
                Ut quis tempus erat. Phasellus euismod bibendum magna non
                tristique. Pellentesque semper vestibulum elit sed condimentum.
                Nunc pretium fermentum interdum.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-8 md:mb-10">
            <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary_color flex items-center justify-center text-white text-base md:text-lg">
              <FaCheck />
            </span>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-black_main">
                Every day fresh and quality products for you.
              </h4>
              <p className="text-sm text-secondary_color mt-2 max-w-lg leading-relaxed">
                Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a
                posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus
                lobortis felis. Sed vestibulum nisl sit amet sapien.
              </p>
            </div>
          </div>

          <CommonBtn variant="primary" size="md" rightIcon={<FaArrowRight />}>
            Shop Now
          </CommonBtn>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
