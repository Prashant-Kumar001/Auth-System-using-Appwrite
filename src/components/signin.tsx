"use client";


import authService from "@/services/appwrite";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/useauth";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { setAuthStatus } = useAuth();

  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    if (e) e.preventDefault();
    setLoading(true);
    try {
      const res = await authService.login({ email, password });
      console.log(res);
      setAuthStatus(true);
      router.push("/");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-screen  bg-gradient-to-br flex items-center justify-center p-5">
      <div className="bg-white/10 text-gray-700 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold  mb-8 text-center">Welcome Back</h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 pr-12  border-2 border-red-100 rounded-xl outline-none transition-all duration-300 ease-in-out focus:border-red-400  focus:shadow-lg focus:shadow-red-400/20 focus:-translate-y-1  peer"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="relative group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 pr-12  border-2 border-red-100 rounded-xl outline-none transition-all duration-300 ease-in-out focus:border-red-400  focus:shadow-lg focus:shadow-red-400/20 focus:-translate-y-1  peer"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading || !email || !password}
            className="w-full text-white py-4 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 disabled:from-red-400 disabled:to-rose-500  font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Logging in...</span>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="mt-6 text-center space-y-2">
          {/* <a
            href="#"
            className="block /70 hover:text-red-300 text-sm transition-colors duration-300"
          >
            Forgot your password?
          </a> */}
          <p className="/60 text-sm">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-red-300 hover:text-red-200 font-medium hover:underline transition-all duration-300"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
