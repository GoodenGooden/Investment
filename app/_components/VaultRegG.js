"use client";


import VaultSection from "./VaultSection";
import { useVault } from "./VaultContext";
import { useEffect, useState } from "react";

function VaultRegG({ onNext, principal = 0 }) {
  const {
    selectedVault,
    walletAmount,
    setEarning,
    setOtherMonthEarning,
    setPrincipal,
    deductBalance,
  } = useVault();

  const [selectedMethod, setSelectedMethod] = useState(null);
  const [error, setError] = useState(""); // 👈 Track error message

  // Safely parse values from selectedVault
  const duration = Number(selectedVault?.details?.[0]?.value) || 0;
  const interestRate = parseFloat(
    selectedVault?.details?.[1]?.value?.toString().replace("%", "") || "0"
  );
  const otherMonthRate = parseFloat(
    selectedVault?.details?.[2]?.value?.toString().replace("%", "") || "0"
  );

  const monthly = Math.max(duration - 1, 0);

  // Ensure principal is numeric
  const numericPrincipal = Number(principal) || 0;

  // Calculate returns
  const earning = (numericPrincipal * interestRate) / 100;
  const otherMonthEarning = (numericPrincipal * otherMonthRate) / 100;
  const otherTotal = otherMonthEarning * monthly;
  const total = numericPrincipal + earning + otherTotal;

  // Sync with vault context
  useEffect(() => {
    setPrincipal(numericPrincipal);
    setEarning(earning);
    setOtherMonthEarning(otherMonthEarning);
  }, [
    numericPrincipal,
    setPrincipal,
    setEarning,
    setOtherMonthEarning,
    earning,
    otherMonthEarning,
  ]);

  // Validation for insufficient funds
  useEffect(() => {
    if (selectedMethod === "wallet" && numericPrincipal > walletAmount) {
      setError("Insufficient funds ❌");
    } else {
      setError("");
    }
  }, [selectedMethod, numericPrincipal, walletAmount]);

  return (
    <div className="p-4 sm:p-6 text-[#6E80A3]">
      <p className="text-lg font-semibold mb-6">Create a regular vault</p>

      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-4 items-start">
        {/* Left section */}
        <div className="w-full lg:w-1/2">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-4">
            Choose a <br /> payment method.
          </p>

          {/* Wallet balance card */}
          <div
            onClick={() => setSelectedMethod("wallet")}
            className={`flex flex-col bg-white p-4 rounded-2xl mb-4 shadow cursor-pointer ${
              selectedMethod === "wallet" ? "ring-2 ring-[#00A343]" : ""
            }`}
          >
            <p className="text-base sm:text-lg font-bold text-gray-500 mb-1">
              Wallet balance
            </p>
            <div className="pb-4">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                ₦{Number(walletAmount || 0).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        {/* Right section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">
          <VaultSection
            numericPrincipal={numericPrincipal}
            earning={earning}
            otherMonthEarning={otherMonthEarning}
            total={total}
            selectedVault={selectedVault}
          />

          <button
            onClick={() => {
              if (!error && selectedMethod === "wallet") {
                // ✅ Continue with vault creation flow
                onNext();
              }
            }}
            disabled={!selectedMethod || error} // 👈 disabled if no method OR insufficient funds
            className={`mt-4 py-[12px] px-12 sm:px-16 lg:px-20 rounded-full transition text-sm sm:text-base ${
              !selectedMethod || error
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#00A343] text-white"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default VaultRegG;







/*
import VaultSection from "./VaultSection";
import { useVault } from "./vaultContext";
import { useEffect, useState } from "react";

function VaultRegG({ onNext, principal }) {
  const { selectedVault, balance, setEarning, setOtherMonthEarning,  setPrincipal } = useVault();
  const [selectedMethod, setSelectedMethod] = useState(null); // track chosen method

  // parse interestRate safely
  const interestRate = parseFloat(
    selectedVault?.details[1]?.value?.toString().replace("%", "") || "0"
  );

    const monthly = parseInt(selectedVault.details[0].value) - 1 || 0;


  // make sure principal is treated as number
  const numericPrincipal = Number(principal) || 0;

  const otherMonthRate = parseFloat(
    selectedVault?.details[2]?.value?.toString().replace("%", "") || 0
  );

  // Calculate earning based on principal
  const otherMonthEarning = (numericPrincipal * otherMonthRate) / 100;
  const otherTotal = otherMonthEarning * monthly;

  // calculate interest and total
  const earning = (numericPrincipal * interestRate) / 100;
  const total = numericPrincipal + earning + otherTotal;

useEffect(() => {
   setPrincipal(numericPrincipal);
  setEarning(earning);
  setOtherMonthEarning(otherMonthEarning);
}, [earning, setPrincipal, setEarning, setOtherMonthEarning,  numericPrincipal,  otherMonthEarning]);


  return (
    <div className="p-6 text-[#6E80A3]">
      <p className="text-lg font-semibold mb-6">Create a regular vault</p>

      <div className="flex justify-between gap-4 items-start">
        
        <div>
          <p className="text-4xl font-bold leading-snug mb-4">
            Choose a <br /> payment method.
          </p>

          
          <div
            onClick={() => setSelectedMethod("wallet")}
            className={`flex flex-col bg-white p-4 rounded-2xl mb-4 shadow cursor-pointer ${
              selectedMethod === "wallet" ? "ring-2 ring-[#00A343]" : ""
            }`}
          >
            <p className="text-lg font-bold text-gray-500 mb-1">Wallet balance</p>
            <div className="pb-4">
              <p className="text-4xl font-bold">{balance}</p>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col gap-2">
          <VaultSection
            numericPrincipal={numericPrincipal}
            earning={earning}
            otherMonthEarning={otherMonthEarning}
            total={total}
            selectedVault={selectedVault}
          />

          <button
            onClick={onNext}
            disabled={!selectedMethod} // disable until selected
            className={`mt-4 py-[12px] px-20 rounded-full ${
              selectedMethod
                ? "bg-[#00A343] text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default VaultRegG;

*/
