"use client";

import Image from "next/image";
import Button from "@/app/ui/CommonBtn";
import notFoundImg from "@/public/images/404-illustration.png"; // your image

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-5 py-20">
      <Image
        src={notFoundImg}
        alt="404 Illustration"
        className="w-full max-w-md mb-10"
        priority
      />

      <h1 className="text-3xl sm:text-4xl font-extrabold text-black_main mb-4">
        Oops! page not found
      </h1>

      <p className="text-secondary_color max-w-lg leading-relaxed mb-10">
        The page you’re looking for isn’t available. But don’t worry—everything
        you need is just a click away in our shop.
      </p>

      <Button href="/" size="md" variant="primary" className="px-10 py-3">
        Back to Home
      </Button>
    </section>
  );
}
