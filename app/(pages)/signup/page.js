"use client";
import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[380px]">
        <h2 className="text-2xl font-semibold text-center text-black_main mb-8">
          Create Account
        </h2>

        <form className="space-y-5">
  
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary_color"
            />
          </div>

        
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary_color"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 cursor-pointer text-gray-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>


          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary_color"
            />
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-3.5 cursor-pointer text-gray-400"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

     
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input type="checkbox" className="accent-primary_color" />
            Accept all terms & Conditions
          </label>

        
          <button
            type="submit"
            className="w-full bg-primary_color hover:bg-hardprimary text-white font-medium rounded-full py-3 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have account?{" "}
          <Link href="/login" className="text-black_main font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
