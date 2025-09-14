
"use client";
import { useState } from "react";
import { VscArrowLeft } from "react-icons/vsc";
import VaultRegA from "./VaultRegA";
import VaultRegB from "./VaultRegB";
import VaultRegC from "./VaultRegC";
import VaultRegD from "./VaultRegD";
import VaultRegE from "./VaultRegE";
import VaultRegF from "./VaultRegF";
import VaultRegG from "./VaultRegG";
import VaultRegH from "./VaultRegH";

function VaultReg() {
  const totalSteps = 8;
  const [step, setStep] = useState(1);
  const [principal, setPrincipal] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0] // default: today
  );
  const [frequency, setFrequency] = useState(null);
  const [total, setTotal] = useState(0);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const progress = (step / totalSteps) * 100;

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <VaultRegA
            onNext={handleNext}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        );
      case 2:
        return <VaultRegB onNext={handleNext} />;
      case 3:
        return <VaultRegC onNext={handleNext} />;
      case 4:
        return (
          <VaultRegD
            onNext={handleNext}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        );
      case 5:
        return (
          <VaultRegE
            onNext={handleNext}
            frequency={frequency}
            setFrequency={setFrequency}
          />
        );
      case 6:
        return (
          <VaultRegF
            onNext={handleNext}
            principal={principal}
            setPrincipal={setPrincipal}
            setTotal={setTotal}
          />
        );
      case 7:
        return <VaultRegG onNext={handleNext} principal={principal} />;
      case 8:
        return (
          <VaultRegH
            onNext={handleNext}
            selectedOption={selectedOption}
            principal={principal}
            selectedDate={selectedDate}
            frequency={frequency}
            total={total}
          />
        );
      default:
        return <VaultRegA onNext={handleNext} />;
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 py-6 sm:py-10 flex flex-col gap-6 sm:gap-8 items-center w-full bg-[#F4FFF8] min-h-screen">
      {/* Top bar: Back Icon + Progress */}
      <div className="flex items-center gap-4 w-full max-w-4xl">
        {/* Back Icon */}
        <button
          onClick={handlePrev}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-gray-300 rounded-full bg-white hover:bg-gray-50 transition"
        >
          <VscArrowLeft className="text-[#00A343] text-xl sm:text-2xl" />
        </button>

        {/* Progress Bar */}
        <div className="flex-1 bg-gray-200 rounded-full h-1 sm:h-2">
          <div
            className="bg-green-600 h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Dynamic Step Content */}
      <div className="w-full max-w-4xl">{renderStep()}</div>
    </div>
  );
}

export default VaultReg;









