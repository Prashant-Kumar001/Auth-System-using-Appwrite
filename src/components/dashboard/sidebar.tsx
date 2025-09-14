import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const Sidebar = ({ pathname, nav }: { pathname: string; nav: any }) => {
  return (
    <aside className="md:sticky overflow-x-scroll z-20 top-0 border-r border-b p-4  border-slate-300 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="text-xl font-semibold tracking-tight text-slate-800">
        Dashboard
      </div>
      <div className="mt-1 text-xs text-slate-500">Manage account & tasks</div>
      <nav className="p-2 space-y-1">
        {nav.map((item: any) => {
          const active = pathname === item.path;
          const Icon = item.icon;
          return (
              <Button key={item.path} variant={active ? "default" : "ghost"}>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium"
                  key={item.path}
                  href={item.path}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              </Button>
          );
        })}
      </nav>
      <div className="mt-auto p-3 hidden md:block">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          Tip: Use Overview to see a snapshot of account & tasks.
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
