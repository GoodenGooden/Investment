"use client"

import { useVault } from "./VaultContext";

function VaultRegD({ onNext, selectedDate, setSelectedDate }) {
  const { selectedVault } = useVault();

  return (
    <div className="px-4 sm:px-6 md:px-10 py-6 md:py-10 bg-[#F4FFF8] min-h-screen">
      {/* Heading */}
      <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-4">
        Create a regular vault
      </p>

      {/* Vault Info */}
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12 mb-8">
        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#6E80A3]">
          When do you <br /> want to start <br /> saving?
        </p>

        <span className="flex flex-col gap-3 text-base sm:text-lg md:text-2xl font-extrabold text-[#6E80A3]">
          {selectedVault?.details.slice(1).map((d, i) => (
            <div key={i}>
              <p>{d.value}</p>
              <p className="text-sm sm:text-base md:text-lg">{d.label}</p>
            </div>
          ))}
        </span>
      </div>

      {/* Instruction + Continue */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <p className="text-lg sm:text-xl md:text-2xl text-[#6E80A3] font-bold">
          You’ll save this day for {selectedVault?.details[0]?.value}
        </p>
        <button
          onClick={() => onNext(selectedDate)}
          className="w-full sm:w-auto py-3 px-10 md:px-20 bg-[#00A343] text-white rounded-full transition hover:bg-[#008c38]"
        >
          Continue
        </button>
      </div>

      {/* Date Picker */}
      <div className="text-base sm:text-lg text-[#6E80A3] flex flex-col gap-2">
        <p className="font-medium">Select date</p>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full sm:w-1/2 md:w-1/4 outline-none border-0 border-b-2 border-gray-300 focus:border-green-600 bg-transparent text-[#141C24] py-2"
        />
      </div>
    </div>
  );
}

export default VaultRegD;
