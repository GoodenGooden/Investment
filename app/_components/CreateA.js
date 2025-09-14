
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/config";
import { doc, serverTimestamp, setDoc, collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

function CreateA() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [fieldError, setFieldError] = useState(null);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const errorMessages = {
    "auth/email-already-in-use": "This email is already registered. Please log in instead.",
    "auth/invalid-email": "That doesn’t look like a valid email address.",
    "auth/weak-password": "Your password is too weak. Please use at least 6 characters.",
    "auth/missing-password": "Password cannot be empty.",
    "auth/network-request-failed": "Network error — please check your internet connection.",
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setFieldError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setFieldError("Passwords do not match");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(email, password);

      if (res && res.user) {
        await setDoc(doc(db, "users", res.user.uid), {
          fullName,
          walletAmount: 0,
          vaultAmount: 0,
          principal: 0,
          createdAt: new Date(),
        });

        try {
          const transactionsRef = collection(db, "users", res.user.uid, "transactions");
          await addDoc(transactionsRef, {
            type: "credit",
            amount: 0,
            description: "Account created",
            status: "Completed",
            createdAt: serverTimestamp(),
          });
        } catch (err) {
          console.error("❌ Failed to add transaction:", err.message, err);
        }

        router.push("/login");
      }
    } catch (err) {
      console.error("❌ Signup failed:", err.message, err);
    }
  };

  const friendlyError = error
    ? errorMessages[error.code] || "Something went wrong. Please try again."
    : fieldError;

  return (
    <div className="bg-green-900 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-4">
        <Image
          src="/inv.jpeg"
          alt="logo"
          width={120}
          height={120}
          style={{ height: "50px", width: "auto" }}
          className="block"
        />
      </div>

      {/* Content wrapper */}
      <div className="flex flex-col lg:flex-row justify-center items-center p-5 gap-10 lg:gap-20 flex-1">
        {/* Left text section */}
        <div className="flex flex-col text-white text-center lg:text-left max-w-sm mb-6 lg:mb-0">
          <h2 className="text-xl md:text-2xl font-bold">Welcome onboard</h2>
          <p className="mt-2 text-sm md:text-base">
            Glad to have you back, keep making money moves
          </p>
        </div>

        {/* Right form section */}
        <div className="bg-white p-6 sm:p-10 rounded-xl shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-[#141C24]">
            Create an account
          </h2>
          <p className="text-center mb-6 text-[#6E80A3] text-sm sm:text-base">
            Sign up to start saving the vault life
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full bg-[#F4FFF8] p-6 sm:p-10 rounded-2xl shadow-lg flex flex-col gap-6"
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-[#6E80A3] mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00A343]"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-[#6E80A3] mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#00A343] 
                  ${error?.code === "auth/email-already-in-use" || error?.code === "auth/invalid-email"
                    ? "border-red-500"
                    : "border-gray-300"
                  }`}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#6E80A3] mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`w-full rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 
                    ${error?.code === "auth/weak-password"
                      ? "border-red-500"
                      : "border-gray-300 focus:ring-[#00A343]"
                    }`}
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </div>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-[#6E80A3] mb-1">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={`w-full rounded-lg p-3 focus:outline-none focus:ring-2 
                  ${fieldError === "Passwords do not match"
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-[#00A343]"
                  }`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#00A343] text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
            >
              {loading ? "Creating..." : "Get Started"}
            </button>

            {/* Firebase Error */}
            {friendlyError && (
              <p className="text-red-500 font-medium text-center">{friendlyError}</p>
            )}

            {/* Already Have Account Link */}
            <div className="flex justify-center gap-2 text-sm sm:text-base font-bold text-[#121E31]">
              <p>Already have an account?</p>
              <Link href="/login" className="text-[#00A343] hover:underline">Sign in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateA;






