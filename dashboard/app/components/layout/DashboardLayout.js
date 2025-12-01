"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children, user }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black flex z-50">
      <div
        className={`md:hidden fixed inset-0 z-40 ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setSidebarOpen(false)}
        />
        <div className="absolute left-0 top-0 h-full w-[290px]">
          <Sidebar />
        </div>
      </div>

      <Sidebar />

      <div className="flex-1 min-w-0 ">
        <Topbar
          user={user}
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((v) => !v)}
        />
        <main className="p-4 sm:p-6 lg:p-8 w-full">{children}</main>
      </div>
    </div>
  );
}
