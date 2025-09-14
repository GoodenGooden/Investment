
"use client"

import Link from "next/link";
import { useVault } from "./vaultContext";
import { useRouter } from "next/navigation";

function Success() {
  const { maturityDate, principal, earning, selectedOption, selectedVault, otherMonthEarning, addVault } = useVault();
  const router = useRouter();

  const handleVaultCreation = () => {
    addVault({
      id: Date.now(),
      title: selectedOption || "No vault selected",
      type: selectedVault?.title || "select a vault",
      principal,
      maturityDate,
      earning,
      total: principal + earning + otherMonthEarning,
      otherMonthEarning,
      progress: 0,
    });
    router.push("/dashboard/vaults");
  };

  return (
    <div className="px-4 sm:px-6  bg-[#F4FFF8] md:px-10">
      <p className="py-8 text-2xl sm:text-3xl md:text-4xl font-bold">
        Your vault was successfully created!
      </p>

      <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
        NGN {principal}
      </p>

      <p className="text-base sm:text-lg font-bold">saved amount</p>

      <p className="text-lg sm:text-2xl md:text-3xl font-bold">
        Your vault will be locked till {maturityDate}
      </p>

      <Link href="/dashboard/vaults">
        <button
          onClick={handleVaultCreation}
          className="mt-4 w-full sm:w-auto py-3 px-12 sm:px-14 md:px-16 bg-[#00A343] text-white rounded-full shadow-md hover:bg-[#008c38] transition"
        >
          Back to vault
        </button>
      </Link>
    </div>
  );
}

export default Success;
