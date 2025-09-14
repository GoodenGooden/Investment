
import { useState } from "react";
import { IoThumbsUpOutline, IoThumbsDownOutline } from "react-icons/io5";
import { useVault } from "./vaultContext";

function VaultRegC({ onNext }) {
  const { selectedVault } = useVault();
  const [choice, setChoice] = useState(null);

  return (
    <div className="px-4 sm:px-6 md:px-10 py-6 md:py-10 bg-[#F4FFF8] min-h-screen">
      {/* Heading */}
      <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-4">
        Create a regular vault
      </p>

      {/* Vault Info */}
      <div
        className={`flex flex-col md:flex-row justify-between gap-6 md:gap-12 transition ${
          choice ? "opacity-100" : "opacity-50 pointer-events-none"
        }`}
      >
        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#6E80A3]">
          Do you want <br /> to automate <br /> savings?
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

      {/* Choice Options */}
      <div className="flex flex-col sm:flex-row gap-6 mt-10 text-[#6E80A3]">
        {/* YES */}
        <div
          onClick={() => setChoice("yes")}
          className={`bg-white flex-1 p-6 sm:p-8 md:p-10 cursor-pointer border-2 rounded-xl text-center transition ${
            choice === "yes" ? "border-[#00A343]" : "border-transparent"
          }`}
        >
          <IoThumbsUpOutline className="text-6xl sm:text-7xl md:text-8xl mx-auto" />
          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-bold">
            Yes, I do
          </p>
        </div>

        {/* NO */}
        <div
          onClick={() => setChoice("no")}
          className={`bg-white flex-1 p-6 sm:p-8 md:p-10 cursor-pointer border-2 rounded-xl text-center transition ${
            choice === "no" ? "border-[#00A343]" : "border-transparent"
          }`}
        >
          <IoThumbsDownOutline className="text-6xl sm:text-7xl md:text-8xl mx-auto" />
          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-bold">
            Not Interested
          </p>
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-center md:justify-end mt-10">
        <button
          onClick={onNext}
          disabled={!choice}
          className={`w-full sm:w-auto py-3 px-10 md:px-20 rounded-full transition ${
            choice
              ? "bg-[#00A343] text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default VaultRegC;
