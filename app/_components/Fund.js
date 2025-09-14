
"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import { useVault } from "./vaultContext";
import { auth, db } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  doc,
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  increment,
} from "firebase/firestore";

// 🔥 Import PaystackButton without SSR
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

function Fund() {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
  const { setwalletAmount } = useVault();
  const [user] = useAuthState(auth);

  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const name = watch("name");
  const email = watch("email");
  const amount = watch("amount");

  const paymentConfig = {
    name: name || "User",
    email: email || "user@example.com",
    amount: amount ? Number(amount) * 100 : 0,
    currency: "NGN",
    publicKey,
  };

  const handleSuccess = async () => {
    if (!user) return toast.error("User not loaded. Try again!");

    const parsedAmount = Number(amount);
    if (!parsedAmount || parsedAmount <= 0)
      return toast.error("Invalid amount");

    try {
      const userRef = doc(db, "users", user.uid);

      await updateDoc(userRef, {
        walletAmount: increment(parsedAmount),
      });

      await addDoc(collection(db, "users", user.uid, "transactions"), {
        type: "credit",
        amount: parsedAmount,
        description: "Deposit via Paystack",
        status: "Completed",
        createdAt: serverTimestamp(),
      });

      setwalletAmount((prev) => prev + parsedAmount);

      toast.success(`Payment successful 🎉 Thanks ${name || "User"}!`);
    } catch (err) {
      console.error("Error updating wallet:", err);
      toast.error("Payment succeeded but wallet update failed ❌");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-6 sm:mt-10 px-4">
      <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-center text-xl sm:text-2xl font-bold mb-6">
          Add money to my wallet
        </h1>

        <div className="flex flex-col gap-4">
          {/* Name Input */}
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded-md text-sm sm:text-base w-full"
          />
          {errors.name && (
            <p className="text-xs sm:text-sm text-red-500">
              {errors.name.message}
            </p>
          )}

          {/* Email Input */}
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="Email"
            className="border p-3 rounded-md text-sm sm:text-base w-full"
          />
          {errors.email && (
            <p className="text-xs sm:text-sm text-red-500">
              {errors.email.message}
            </p>
          )}

          {/* Amount Input */}
          <input
            {...register("amount", { required: "Amount is required" })}
            type="number"
            placeholder="Type the amount"
            className="border p-3 rounded-md text-sm sm:text-base w-full"
          />
          {errors.amount && (
            <p className="text-xs sm:text-sm text-red-500">
              {errors.amount.message}
            </p>
          )}

          {/* Paystack Button */}
          <PaystackButton
            {...paymentConfig}
            text="Fund your wallet"
            className="py-3 w-full bg-[#00A343] text-white text-sm sm:text-base rounded-lg shadow-md hover:bg-green-700 transition mt-4 sm:mt-6 disabled:opacity-50"
            disabled={!name || !email || !amount}
            onSuccess={handleSuccess}
            onClose={() => toast.info("Payment window closed ❌")}
          />
        </div>
      </div>
    </div>
  );
}

export default Fund;




