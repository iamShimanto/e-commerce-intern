"use client";
import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.freeapi.app/api/v1/users/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success === false) {
        return toast.error(result.message);
      }
      if (result.success === true) {
        toast.success(result.message);
        document.cookie = `token=${result?.data?.accessToken}`;
        setTimeout(() => {
          router.push("/");
          location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-[380px]">
        <h2 className="text-2xl font-semibold text-center text-black_main mb-8">
          Sign In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              onChange={(e) =>
                setData((prev) => ({ ...prev, username: e.target.value }))
              }
              type="text"
              placeholder="Username"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary_color"
            />
          </div>

          <div className="relative">
            <input
              onChange={(e) =>
                setData((prev) => ({ ...prev, password: e.target.value }))
              }
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

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-primary_color" />
              Remember me
            </label>
            <Link
              href="/forgot-password"
              className="hover:text-primary_color font-medium"
            >
              Forget Password
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-primary_color hover:bg-hardprimary text-white font-medium rounded-full py-3 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have account?{" "}
          <Link href="/signup" className="text-black_main font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
