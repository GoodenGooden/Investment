

"use client";

// components/BalanceB.jsx
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { VscAdd } from "react-icons/vsc";
import BalanceCard from "./BalanceCard";
import TypeVault from "./TypeVault";

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useVault } from "./vaultContext";

function BalanceB() {
  const [user] = useAuthState(auth); // Logged-in user
  const [userData, setUserData] = useState(null); // Firestore user data
  const { totalEarn, isVisible, vaultBalance, totalPrincipal, loadingUserData } = useVault();

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

   if (loadingUserData) {
    return <p className="p-4">Loading account...</p>;
  }

  return (
    <div className="bg-[#F4FFF8]">
      {userData ? (
        <>
          {/* Responsive Grid for balances */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            <BalanceCard
              label="Total Vault Balance"
              value={isVisible ? "****" : `₦${vaultBalance?.toLocaleString()}`}
              icon={
                <MdOutlineAccountBalanceWallet
                  size={20}
                  className="text-[#00A343]"
                />
              }
            />

            <BalanceCard
              label="Principal"
              value={isVisible ? "****" : `₦${totalPrincipal?.toLocaleString()}`}
              icon={<IoWalletOutline size={20} className="text-[#00A343]" />}
            />

            <BalanceCard
              label="Interest Earned"
              value={isVisible ? "****" : `₦${totalEarn?.toLocaleString()}`}
              icon={<GiWallet size={20} className="text-[#00A343]" />}
            />

            {/* Create vault card styled consistently */}
            <Link href="/dashboard/vaults/create/" className="block">
              <div className="flex flex-col items-center justify-center gap-4 border border-[#E3EDF3] bg-[#00A343] text-white p-6 rounded-xl w-full h-full">
                <VscAdd className="text-2xl font-bold" />
                <p className="text-lg font-bold">Create a vault</p>
              </div>
            </Link>
          </div>

          {/* Vault types section */}
          <div className="w-full bg-[#F4FFF8] py-6">
          <div className=" max-w-7xl mx-auto px-4 sm:px-6 ">
            <TypeVault />
          </div>
          </div>
        </>
      ) : (
        
       <p className="p-4">Processing Account...</p>
        
      )}
    </div>
  );
}

export default BalanceB;
