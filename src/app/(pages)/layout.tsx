'use client';

import Header from "@/components/Header";
import { UserProvider } from "@/context/userContext";
import { useState, useEffect } from 'react';
import authService from "@/services/appwrite";
import { LoaderCircle } from "lucide-react";




export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [authStatus, setAuthStatus] = useState(false);
    const [loading, setLoading] = useState(true);


    newFunction();


    return (

        <UserProvider value={{ authStatus, setAuthStatus, loading }}>
            {
                loading ? (
                    <div className="flex items-center justify-center h-screen">
                        <LoaderCircle color="red"  size={25} className="animate-spin" />
                    </div>
                ) : (
                    <>
                        {children}
                    </>
                )
            }
        </UserProvider>
    );

    function newFunction() {
        useEffect(() => {
            authService.isLoggedIn()
                .then(setAuthStatus)
                .finally(() => setLoading(false));
        }, []);
    }
}
