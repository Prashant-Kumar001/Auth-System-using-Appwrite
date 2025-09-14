"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/useauth";
import authService from "@/services/appwrite";
import { Cloud, Shield, Users, Folder } from "lucide-react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const { authStatus, setAuthStatus } = useAuth();
  

   const handleLogout = () => {
     try {
       authService.logout();
       setAuthStatus(false);
     } catch (error) {
       console.error("Logout failed:", error);
     }
   };

  return (
    <main className="flex flex-col min-h-screen ">
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          MyDrive – Your Cloud, Simplified
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Store, organize, and share your files securely. Access them anywhere,
          anytime – built with the simplicity of Google Drive but fully yours.
        </p>

        <div className="flex gap-4">
          {authStatus ?
            <>
              <Button
                variant={'secondary'}
                onClick={() => router.push("/dashboard")}
              >
                dashboard
              </Button>
              <Button
                variant="destructive"
                onClick={() => router.push("/sign-out")}
              >
                Sign Out
              </Button>
              
            </>
            :
            <>
              <Button
                variant={'secondary'}
                onClick={() => router.push("/signup")}
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push("/signin")}
              >
                Sign In
              </Button>
            </>
          }
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose MyDrive?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
            <Cloud className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Access Anywhere</h3>
            <p className="text-gray-600">
              Keep all your files in one secure place and access them from any
              device with internet connection.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
            <Shield className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
            <p className="text-gray-600">
              Your files are safe with encrypted storage and reliable backups.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
            <Users className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Sharing</h3>
            <p className="text-gray-600">
              Share folders or files with teammates and collaborate effortlessly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 ">
        <h2 className="text-3xl font-bold text-center mb-8">
          A Glimpse of Your Drive
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {["Projects", "Work", "Personal", "Shared"].map((name, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 bg-gray-50 p-4 rounded-xl hover:shadow-md transition cursor-pointer"
              >
                <Folder className="w-10 h-10 text-blue-500" />
                <span className="font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="  text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to take control of your files?
        </h2>
        <p className="text-lg mb-8">
          Sign up today and experience a simpler, faster way to manage your
          files in the cloud.
        </p>
      </section>
    </main>
  );
}
