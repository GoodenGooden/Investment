"use client"

import { useVault } from "./VaultContext";

function TypeVault() {
  const { vaults } = useVault();

  return (
    <div className="w-full p-4 sm:p-6">
      {vaults.length === 0 ? (
        <p className="text-center text-gray-500 text-sm sm:text-base">
          No vault created yet
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {vaults.map((vault, index) => (
            <div
              key={index}
              className="border border-[#E3EDF3] bg-white p-4 sm:p-6 rounded-xl w-full shadow"
            >
              {/* Header */}
              <div className="flex justify-between mb-2">
                <p className="font-semibold text-[#141C24] text-base sm:text-lg truncate">
                  {vault.title || "Untitled Vault"}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[#6E80A3]">
                  Current balance
                </p>
              </div>

              {/* Balance */}
              <div className="flex justify-between mb-2">
                <p className="text-xs sm:text-sm font-semibold text-[#6E80A3]">
                  {vault.type || "Unknown type"}
                </p>
                <p className="font-semibold text-[#141C24] text-sm sm:text-base">
                  {vault.total ? Number(vault.total).toFixed(2) : "0.00"}
                </p>
              </div>

              {/* Maturity date */}
              <p className="text-xs sm:text-sm font-semibold text-[#6E80A3] mb-3">
                Cash out {vault.maturityDate || "not set"}
              </p>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-[#E3EDF3] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#00A343] rounded-full transition-all duration-300"
                  style={{ width: `${vault.progress || 0}%` }}
                ></div>
              </div>

              <p className="text-xs text-right text-[#6E80A3] mt-1">
                {vault.progress || 0}% complete
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TypeVault;

