
"use client";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const res = await signInWithEmailAndPassword(email, password);

      if (!res) throw new Error("No response from Firebase.");

      console.log("User logged in:", res.user);

      setEmail("");
      setPassword("");
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/user-not-found"
      ) {
        setErrorMessage("Incorrect email or password. Please try again.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Incorrect password. Try again.");
      } else if (error.code === "auth/too-many-requests") {
        setErrorMessage("Too many failed attempts. Please try again later.");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="bg-green-900 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-4   " >
        <Image
          src="/inv.jpeg"
          alt="logo"
          width={120}
          height={120}
          style={{ height: "50px", width: "auto" }}
          className="block"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-center items-center flex-1 px-6 gap-10 lg:gap-20">
        {/* Left Side - Welcome Text */}
        <div className="flex flex-col text-white text-center lg:text-left max-w-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-sm sm:text-base">
            Glad to have you back, keep making money moves
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white w-full max-w-md sm:max-w-lg p-6 sm:p-10 rounded-xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-[#141C24]">
            Login to Your Account
          </h2>

          <form
            onSubmit={handleLogin}
            className="w-full bg-[#F4FFF8] p-6 sm:p-10 rounded-2xl shadow-lg flex flex-col gap-6 sm:gap-8"
          >
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#6E80A3] mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00A343]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#6E80A3] mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#00A343]"
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </div>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-600 font-semibold text-sm">
                {errorMessage}
              </p>
            )}

            <p className="text-[#00A343] text-sm cursor-pointer">
              Forgot Password
            </p>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-[#00A343] text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
            >
              Login
            </button>

            {/* Register Link */}
            <div className="flex justify-center gap-2 text-sm sm:text-base font-bold text-[#121E31]">
              <p>New User?</p>
              <Link href="/" className="text-[#00A343] font-bold">
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
