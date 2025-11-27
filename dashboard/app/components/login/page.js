"use client";
import { useState } from "react";
import { FiLock, FiEye, FiEyeOff, FiShield, FiMail } from "react-icons/fi";

export default function Login({
  onSubmit,
  loading = false,
  error = "",
  title = "Admin-only area",
  subtitle = "You need to provide a password to be able to access this page.",
}) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://dummydashboardapi.vercel.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
          credentials: "include",
        }
      );

      const result = await res.json();
      console.log(result);
      if (result.success === false) {
        return alert(result.message);
      }
      if (result.data.user.role !== "admin") {
        return;
      }
      document.cookie = `token=${result.data.token}`;
      location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-[70vh] grid place-items-center px-4">
      <div className="w-full max-w-[420px] rounded-2xl bg-dark_bg border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.45)] px-5 sm:px-7 py-8 sm:py-9">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="h-14 w-14 rounded-full bg-white/5 grid place-items-center">
            <FiShield className="text-3xl text-brand_color" />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-primary_color">
            {title}
          </h2>
          <p className="text-sm text-primary_color/50 max-w-[280px]">
            {subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-primary_color">
              Email
            </label>

            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-primary_color/40 text-lg" />
              <input
                type="email"
                value={user.email}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="admin@example.com"
                className="w-full h-11 sm:h-12 rounded-lg bg-black/35 border border-white/10 pl-10 pr-4 text-sm text-primary_color outline-none focus:border-white/20 transition"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-primary_color">
              Password
            </label>

            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-primary_color/40 text-lg" />

              <input
                type={show ? "text" : "password"}
                value={user.password}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, password: e.target.value }))
                }
                placeholder="••••••••"
                className="w-full h-11 sm:h-12 rounded-lg bg-black/35 border border-white/10 pl-10 pr-11 text-sm text-primary_color outline-none focus:border-white/20 transition"
              />

              <button
                type="button"
                onClick={() => setShow((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-primary_color/45 hover:text-primary_color transition"
                aria-label="Toggle password visibility"
              >
                {show ? (
                  <FiEyeOff className="text-lg" />
                ) : (
                  <FiEye className="text-lg" />
                )}
              </button>
            </div>

            {error ? (
              <p className="text-xs text-red-400 pt-1">{error}</p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={loading || !user.password || !user.email}
            className="w-full h-12 sm:h-[52px] rounded-lg bg-brand_color text-white font-semibold text-sm sm:text-base hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <button className="mt-5 w-full text-center text-xs sm:text-sm text-primary_color/45 hover:text-primary_color transition">
          Forgot your password ?
        </button>
      </div>
    </div>
  );
}
