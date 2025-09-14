import React from "react";
import { Button } from "../ui/button";
import authService from "@/services/appwrite";
import { useAuth } from "@/context/useauth";
import { useRouter } from "next/navigation";

type HeaderProps = {
  pathname: string;
  nav: any[];
};

const Header = ({ pathname, nav }: HeaderProps) => {
  const {  setAuthStatus } = useAuth();
  const router = useRouter();

   const handleLogout = () => {
    try {
      authService.logout();
      setAuthStatus(false);
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };


  return (
    <header className="sticky z-20 top-0 border-b border-r border-slate-300 bg-white/70 p-4  backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <div className="text-sm font-medium text-slate-600">
          {nav.find((n: any) => n.path === pathname)?.label ?? "Overview"}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={"destructive"}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
