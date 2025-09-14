import { TiTick } from "react-icons/ti";
import { useVault } from "./VaultContext";

function VaultRegE({ onNext, frequency, setFrequency }) {
  const { selectedVault } = useVault();

  const options = ["daily", "weekly", "monthly"];

  return (
    <div className="px-4 sm:px-6 md:px-10 py-6 md:py-10 bg-[#F4FFF8] min-h-screen">
      {/* Heading */}
      <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-4">
        Create a regular vault
      </p>

      {/* Vault Info */}
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12 mb-8">
        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#6E80A3]">
          How often do <br /> you want to <br /> save?
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

      {/* Continue Button */}
      <div className="flex justify-end mb-10">
        <button
          onClick={onNext}
          disabled={!frequency}
          className={`w-full sm:w-auto py-3 px-10 md:px-20 rounded-full transition ${
            frequency
              ? "bg-[#00A343] text-white hover:bg-[#008c38]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>

      {/* Options */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-base sm:text-lg font-bold text-[#6E80A3]">
        {options.map((opt) => (
          <div
            key={opt}
            onClick={() => setFrequency(opt)}
            className={`flex items-center gap-3 bg-white p-3 rounded-lg cursor-pointer border transition w-full sm:w-auto ${
              frequency === opt ? "border-[#00A343]" : "border-gray-200"
            }`}
          >
            <TiTick
              className={`text-xl ${
                frequency === opt ? "text-[#00A343]" : "text-gray-300"
              }`}
            />
            <p>{opt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VaultRegE;
