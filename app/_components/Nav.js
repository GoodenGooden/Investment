
// Nav.jsx
"use client";

import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useVault } from "./vaultContext";

function Nav({ onOpenSidebar = () => {} }) {
  const { isVisible, userData, setIsVisible } = useVault();
  const [user] = useAuthState(auth);

  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ set mounted to true after client hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // Tailwind `md` breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) setUserData(docSnap.data());
      }
    };
    fetchUserData();
  }, [user]);

  const handleToggle = () => setIsVisible((prev) => !prev);

  if (!mounted) return null;
  if (!user) return <p>Loading user...</p>;

  return (
    <div>
      {userData ? (
        <div className="flex justify-between">
          {/* Left */}
          <div className="flex px-14 py-6 gap-16 items-center">
            {/* Hamburger (md/sm) */}
            <button
              className="lg:hidden"
              onClick={() =>
                onOpenSidebar({
                  userData,
                  isVisible,
                  handleToggle,
                })
              }
            >
              <RxHamburgerMenu className="text-2xl text-[#6E80A3]" />
            </button>

            {/* ✅ Responsive image width */}
            <Image
              src="/inv.jpeg"
              alt="image"
              width={isMobile ? 60 : 100}
              height={50}
              quality={50}
            />

            {/* Greeting (lg only) */}
            <p className="hidden lg:block text-4xl font-extrabold px-2 text-[#6E80A3]">
              Hello, {userData.fullName}
            </p>
          </div>

          {/* Toggle (lg only) */}
          <div
            onClick={handleToggle}
            className="hidden lg:flex items-center gap-3 cursor-pointer text-3xl px-14"
          >
            <p className="text-lg text-[#6E80A3]">Hide my dashboard balance</p>
            {isVisible ? (
              <LiaToggleOnSolid className="text-green-500 text-4xl" />
            ) : (
              <LiaToggleOffSolid className="text-gray-400 text-4xl" />
            )}
          </div>
        </div>
      ) : (
        <p>Loading account...</p>
      )}
    </div>
  );
}

export default Nav;
