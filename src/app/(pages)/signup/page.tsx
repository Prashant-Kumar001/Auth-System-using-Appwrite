'use client'


import { useAuth } from '@/context/useauth';
import RegisterPage from '@/components/signup';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const page = () => {

  const { authStatus } = useAuth();
  const router = useRouter();


  useEffect(() => {
    if (authStatus) {
      router.replace("/profile");
    }
  }, [authStatus, router]);

  
  
  return authStatus ? null : <RegisterPage />

}

export default page
