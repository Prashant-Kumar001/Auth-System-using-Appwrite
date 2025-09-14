"use client";

import Header from "@/components/Header";
import { useAuth } from "@/context/useauth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { authStatus } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authStatus) {
      alert("You are not logged in.");
      router.replace("/signin");
    }
  }, [authStatus, router]);

  return authStatus ? children : null;
}
