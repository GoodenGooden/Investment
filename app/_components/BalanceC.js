
"use client";

import { FiSend } from "react-icons/fi";
import { FaCcMastercard } from "react-icons/fa6";
import { IoMdArrowForward } from "react-icons/io";
import Debit from "./Debit";

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

function BalanceC() {
  const [user] = useAuthState(auth); // Logged-in user
  const [userData, setUserData] = useState(null); // Firestore user data

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 bg-white rounded-xl w-full">
      {userData ? (
        <>
          {/* Wallet Balance + Withdraw */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-[#E3EDF3] rounded-lg p-4 bg-[#F9FCFB]">
              <p className="text-sm text-[#6E80A3] mb-1">
                Total Wallet Balance
              </p>
              <p className="text-2xl font-bold text-[#141C24] break-words">
                ₦{userData.walletAmount ?? 0}
              </p>
            </div>

            <div className="border border-[#E3EDF3] rounded-lg p-4 bg-[#F9FCFB] flex items-center justify-between">
              <p className="text-sm text-[#6E80A3]">Withdraw to Bank</p>
              <FiSend size={24} className="text-[#00A343]" />
            </div>
          </div>

          {/* Funding Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Fund via Bank Transfer */}
            <div className="border border-[#E3EDF3] rounded-lg p-6 bg-[#F9FCFB] flex flex-col gap-4">
              <p className="font-medium text-[#141C24]">
                Fund Wallet via Bank Transfer
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[#141C24]">
                <div className="flex flex-col">
                  <p className="font-semibold">Wema Bank</p>
                  <p className="text-[#6E80A3]">Bank Name</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">0045678754</p>
                  <p className="text-[#6E80A3]">Account Number</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Ayodeji Osindele</p>
                  <p className="text-[#6E80A3]">Account Name</p>
                </div>
              </div>
            </div>

            {/* Fund via Card */}
            <div className="border border-[#E3EDF3] rounded-lg p-6 bg-[#F9FCFB] flex flex-col justify-between">
              <p className="text-sm text-[#141C24] mb-2">
                Fund Wallet via Card
              </p>
              <div className="flex justify-between items-center">
                <FaCcMastercard size={24} className="text-[#00A343]" />
                <IoMdArrowForward size={20} className="text-[#6E80A3]" />
              </div>
            </div>
          </div>

          {/* Debit Component */}
          <div className="pt-4">
            <Debit />
          </div>
        </>
      ) : (
        <p className="p-4">Loading account...</p>
      )}
    </div>
  );
}

export default BalanceC;
