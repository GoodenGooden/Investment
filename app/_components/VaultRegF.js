"use client";

import { useEffect } from "react";
import VaultSection from "./VaultSection";
import { useVault } from "./VaultContext";

function VaultRegF({ onNext, principal, setPrincipal: setParentPrincipal }) {
  const {
    selectedVault,
    setPrincipal,
    setEarning,
    setTotal,
    setOtherMonthEarning,
  } = useVault();

  // parse interestRate safely
  const interestRate = parseFloat(
    selectedVault?.details[1]?.value?.toString().replace("%", "") || "0"
  );

  const monthly = parseInt(selectedVault?.details[0]?.value) - 1 || 0;

  // make sure principal is treated as number
  const numericPrincipal = Number(principal) || 0;

  const otherMonthRate = parseFloat(
    selectedVault?.details[2]?.value?.toString().replace("%", "") || "0"
  );

  // Calculate earning based on principal
  const otherMonthEarning = (numericPrincipal * otherMonthRate) / 100;
  const otherTotal = otherMonthEarning * monthly;

  const earning = (numericPrincipal * interestRate) / 100;
  const total = numericPrincipal + earning + otherTotal;

  // 👇 Whenever values change, update context + parent
  useEffect(() => {
    setTotal(total);
    setPrincipal(numericPrincipal);
    setEarning(earning);
    setOtherMonthEarning(otherMonthEarning);
  }, [
    numericPrincipal,
    setTotal,
    earning,
    setPrincipal,
    setOtherMonthEarning,
    setEarning,
    otherMonthEarning,
    total,
  ]);

  return (
    <div className="p-4 sm:p-6 text-[#6E80A3]">
      <p className="text-lg font-semibold mb-6">Create a regular vault</p>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-4">
            How much do <br /> you want to <br /> save?
          </p>

          <div className="flex flex-col">
            <p className="text-base sm:text-lg font-bold text-gray-500 mb-1">
              Enter an amount
            </p>
            <div className="flex justify-between gap-8 sm:gap-16 lg:gap-60 border-b-2 border-gray-300 pb-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  NGN
                </span>
                <input
                  type="number"
                  placeholder="00"
                  value={principal}
                  onChange={(e) => setParentPrincipal(Number(e.target.value))}
                  className="outline-none text-2xl sm:text-3xl lg:text-4xl font-bold w-24 sm:w-32"
                />
              </div>
              <p className="text-2xl sm:text-3xl lg:text-4xl">.00</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">
          <VaultSection
            numericPrincipal={numericPrincipal}
            earning={earning}
            otherMonthEarning={otherMonthEarning}
            total={total}
            selectedVault={selectedVault}
          />

          <button
            onClick={onNext}
            className="py-[12px] px-12 sm:px-16 lg:px-20 bg-[#00A343] text-[#fff] rounded-full text-sm sm:text-base"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default VaultRegF;
