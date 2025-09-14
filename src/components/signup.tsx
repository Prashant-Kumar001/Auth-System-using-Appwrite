"use client";
import authService from "@/services/appwrite";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleRegister(e: React.MouseEvent<HTMLButtonElement>) {
    if (e) e.preventDefault();
    setLoading(true);
    try {
      const res = await authService.register({ name, email, password });
      console.log(res);
      alert("Account created! ");
      router.push("/");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center p-5">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold  mb-2 text-center">Create Account</h1>
        <form className="space-y-6">
          <div className="relative group">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-4 pr-12  border-2 border-red-100 rounded-xl outline-none transition-all duration-300 ease-in-out focus:border-red-400  focus:shadow-lg focus:shadow-red-400/20 focus:-translate-y-1  peer"
              placeholder="username"
              required
            />
          </div>

          <div className="relative group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 pr-12 bg-white/10 border-2 border-red-100 rounded-xl outline-none transition-all duration-300 ease-in-out focus:border-red-400 focus:bg-white/15 focus:shadow-lg focus:shadow-red-400/20 focus:-translate-y-1  peer"
              placeholder="email"
              required
            />
          </div>

          <div className="relative group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 pr-12 bg-white/10 border-2 border-red-100 rounded-xl outline-none transition-all duration-300 ease-in-out focus:border-red-400 focus:bg-white/15 focus:shadow-lg focus:shadow-red-400/20 focus:-translate-y-1  peer"
              placeholder="password"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex space-x-1">
              <div
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  password.length >= 3 ? "bg-red-400" : "bg-white/20"
                }`}
              ></div>
              <div
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  password.length >= 6 ? "bg-yellow-400" : "bg-white/20"
                }`}
              ></div>
              <div
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  password.length >= 8 ? "bg-green-400" : "bg-white/20"
                }`}
              ></div>
            </div>
            <p className="text-xs /60 font-bold text-center">
              Password strength:{" "}
              {password.length >= 8
                ? "Strong"
                : password.length >= 6
                ? "Medium"
                : password.length >= 3
                ? "Weak"
                : "Too short"}
            </p>
          </div>

          <button
            onClick={handleRegister}
            disabled={loading || !name || !email || !password}
            className="w-full py-4 text-white bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 disabled:from-red-400 disabled:to-rose-500  font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Creating Account...</span>
              </div>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <p className="text-xs /50 text-center mt-4 leading-relaxed">
          By creating an account, you agree to our{" "}
          <a href="#" className="text-red-300 hover:text-red-200 underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-red-300 hover:text-red-200 underline">
            Privacy Policy
          </a>
        </p>

        <div className="mt-6 text-center">
          <p className="/60 text-sm">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-red-300 hover:text-red-200 font-medium hover:underline transition-all duration-300"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
