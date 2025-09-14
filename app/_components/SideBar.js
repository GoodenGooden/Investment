"use client";

import { HiOutlineHome } from "react-icons/hi2";
import { PiVault } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useVault } from "./VaultContext"; // ✅ pull data directly

function SideBar({ isOpen, onClose }) {
  const router = useRouter();
  const { userData, isVisible, setIsVisible } = useVault();

  const handleSignout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleToggle = () => setIsVisible((prev) => !prev);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-64 h-screen p-6 bg-white">
        <SidebarLinks handleSignout={handleSignout} />
      </div>

      {/* Mobile Sidebar (Slide-in) */}
      <div
        className={`lg:hidden fixed inset-0 z-50 flex transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-64 bg-white p-6 shadow-lg h-full flex flex-col">
          {/* Username + Toggle only for mobile */}
          <div className="mb-6">
            {userData ? (
              <p className="text-xl font-bold text-[#6E80A3]">
                Hello, {userData.fullName}
              </p>
            ) : (
              <p className="text-gray-500">Loading account...</p>
            )}

            <div
              onClick={handleToggle}
              className="flex items-center gap-3 cursor-pointer text-2xl mt-4"
            >
              <p className="text-sm text-[#6E80A3]">
                Hide my dashboard balance
              </p>
              {isVisible ? (
                <LiaToggleOnSolid className="text-green-500 text-3xl" />
              ) : (
                <LiaToggleOffSolid className="text-gray-400 text-3xl" />
              )}
            </div>
          </div>

          {/* Sidebar Links */}
          <SidebarLinks handleSignout={handleSignout} />
        </div>

        {/* Overlay */}
        <div className="flex-1 bg-black/50" onClick={onClose}></div>
      </div>
    </>
  );
}

function SidebarLinks({ handleSignout }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 text-[#6E80A3] hover:text-[#00A343] transition">
        <HiOutlineHome size={26} />
        <Link href="/dashboard" className="text-lg">
          Home
        </Link>
      </div>

      <div className="flex items-center gap-4 text-[#6E80A3] hover:text-[#00A343] transition">
        <PiVault size={26} />
        <Link href="/dashboard/vaults" className="text-lg">
          Vault
        </Link>
      </div>

      <div
        onClick={handleSignout}
        className="flex items-center gap-4 text-[#6E80A3] hover:text-red-500 transition cursor-pointer"
      >
        <FiLogOut size={22} />
        <span className="text-lg">Logout</span>
      </div>
    </div>
  );
}

export default SideBar;
