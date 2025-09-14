"use client";

import { IoCarOutline } from "react-icons/io5";
import { PiHouseLine, PiFlowerTulip } from "react-icons/pi";
import { SlPlane, SlCamera, SlGraduation } from "react-icons/sl";
import { useVault } from "./VaultContext";

function VaultRegA({ onNext }) {
  const { selectedVault, selectedOption, setSelectedOption } = useVault();

  const options = [
    {
      icon: <IoCarOutline className="text-5xl sm:text-6xl md:text-8xl" />,
      label: "buy a car",
    },
    {
      icon: <PiHouseLine className="text-5xl sm:text-6xl md:text-8xl" />,
      label: "buy a house",
    },
    {
      icon: <PiFlowerTulip className="text-5xl sm:text-6xl md:text-8xl" />,
      label: "fund my wedding",
    },
    {
      icon: <SlPlane className="text-5xl sm:text-6xl md:text-8xl" />,
      label: "plan a trip",
    },
    {
      icon: <SlCamera className="text-5xl sm:text-6xl md:text-8xl" />,
      label: "buy gadgets",
    },
    {
      icon: <SlGraduation className="text-5xl sm:text-6xl md:text-8xl" />,
      label: "pay school fees",
    },
  ];

  return (
    <div className="bg-[#F4FFF8] px-4 sm:px-6 md:px-10 py-6 md:py-10">
      <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-4">
        Create a regular vault
      </p>

      {/* Vault Title + Details */}
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10">
        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#6E80A3]">
          What are you <br /> saving for?
        </p>

        <span
          className={`flex flex-col gap-2 sm:gap-3 md:gap-4 text-base sm:text-lg md:text-2xl font-extrabold transition ${
            selectedOption ? "text-[#6E80A3]" : "text-gray-400"
          }`}
        >
          {selectedVault?.details.slice(1).map((d, i) => (
            <div key={i}>
              <p>{d.value}</p>
              <p className="text-sm sm:text-base md:text-lg">{d.label}</p>
            </div>
          ))}
        </span>
      </div>

      {/* Customized input + Continue button */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-16 mt-8 items-center">
        <div
          className={`w-full rounded-full px-4 py-3 text-center sm:text-left font-extrabold transition ${
            selectedOption ? "text-[#6E80A3]" : "text-gray-400"
          } bg-white border`}
        >
          {selectedOption || "Give your vault a customized name"}
        </div>

        <button
          onClick={onNext}
          disabled={!selectedOption}
          className={`w-full md:w-auto py-3 px-10 md:px-20 rounded-full transition ${
            selectedOption
              ? "bg-[#00A343] text-white"
              : "bg-gray-400 text-gray-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-10">
        {options.map((opt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedOption(opt.label)}
            className={`cursor-pointer rounded-lg flex flex-col items-center justify-center p-4 sm:p-6 text-center transition ${
              selectedOption === opt.label
                ? "bg-[#E6F7F0] border-2 border-[#00A343] text-[#00A343]"
                : "bg-white text-[#6E80A3]"
            }`}
          >
            {opt.icon}
            <p className="mt-2 text-sm sm:text-base md:text-lg font-bold">
              {opt.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VaultRegA;
