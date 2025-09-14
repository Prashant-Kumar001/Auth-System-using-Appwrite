"use client";

import { useAuth } from "@/context/useauth";
import LoginPage from "@/components/signin";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const { authStatus } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authStatus) {
      router.replace("/profile");
    }
  }, [authStatus, router]);

  return authStatus ? null : <LoginPage />;
};

export default Page;
