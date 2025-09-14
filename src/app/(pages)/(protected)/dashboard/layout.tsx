"use client";

import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
import { Clock, Database, File, Folder, Share2, Star, Trash2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { LuUser } from "react-icons/lu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const baseUrl = "/dashboard";

  const nav = [
    { label: "My Drive", path: `${baseUrl}/drive`, icon: Folder },
    { label: "favorites", path: `${baseUrl}/favorites`, icon: Star },
    { label: "Trash", path: `${baseUrl}/trash`, icon: Trash2 },
    { label: "Storage", path: `${baseUrl}/storage`, icon: Database },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 md:grid-cols-[260px_1fr]">
        <Sidebar pathname={pathname} nav={nav} />
        <main className="flex h-screen flex-col">
          <Header pathname={pathname} nav={nav} />
          <div className="mx-auto border-r overflow-auto border-slate-300 w-full max-w-5xl flex-1 p-4 md:p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
