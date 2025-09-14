"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, Menu, X } from "lucide-react";
import { useAuth } from "@/context/useauth";
import authService from "@/services/appwrite";
import { Button } from "./ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { authStatus, setAuthStatus, loading } = useAuth();

  const handleLogout = () => {
    try {
      authService.logout();
      setAuthStatus(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-red-500">appwrite</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link href="/" className="text-red-500 hover:text-red-600">
                Home
              </Link>
              <Link href="/profile" className="text-red-500 hover:text-red-600">
                Profile
              </Link>

            </nav>
          </div>
          <div className="flex space-x-4">
            {loading ? <Loader2 className="animate-spin" /> : authStatus ? (
              <>
                <Button
                variant={"destructive"}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="bg-transparent text-black px-4 py-1 rounded-lg shadow hover:bg-red-100 transition"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-transparent text-black px-4 py-1 rounded-lg shadow hover:bg-red-100 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <button
            className="md:hidden text-red-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 pb-4">
            <Link href="/" className="text-red-500 hover:text-red-600">
              Home
            </Link>
            <Link href="/profile" className="text-red-500 hover:text-red-600">
              About
            </Link>

            <div className="flex flex-col space-x-2 gap-3">
              {authStatus ? (
                <>
                  <Button
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="bg-transparent text-black px-4 py-1 rounded-lg shadow hover:bg-red-100 transition"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="bg-transparent text-black px-4 py-1 rounded-lg shadow hover:bg-red-100 transition"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
