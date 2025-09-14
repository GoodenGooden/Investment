
import Image from "next/image";
import { TbArrowBadgeDown } from "react-icons/tb";
import Button from "./Button";

const benefits = [
  "Create Vaults for big goals or projects that are highly important to you and set targets for amounts and completion dates.",
  "Make it easy for your friends, family and loved ones to donate funds and join you in saving up to realise the goal or project.",
  "Get your fund released to you without stress on your completion date once you make a request to withdraw.",
];

function PlanE() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center pt-20 pb-20 gap-10 sm:gap-14 lg:gap-20 px-4 sm:px-8 h-auto">
      {/* Left Section */}
      <div className="flex flex-col gap-6 sm:gap-8 max-w-xl text-center lg:text-left">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141C24]">
          Quick Vault
        </p>

        {benefits.map((benefit, index) => (
          <div className="flex gap-4 sm:gap-6 items-start" key={index}>
            <div className="bg-[#E2FEEB] p-2 rounded-md mt-1 flex-shrink-0">
              <TbArrowBadgeDown className="text-2xl sm:text-3xl text-[#00A343]" />
            </div>
            <p className="text-base sm:text-lg lg:text-[20px] text-[#6E80A3] leading-relaxed">
              {benefit}
            </p>
          </div>
        ))}

        <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center lg:justify-start">
          <Button className="w-48 text-sm sm:text-base lg:text-lg font-semibold" href="/plan">
            Create Vault Now
          </Button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="mb-10 lg:mb-0 flex justify-center lg:justify-end w-full lg:w-auto">
        <Image
          width={450}
          height={300}
          src="/ballcoin.jpg"
          alt="vault"
          className="object-contain rounded-xl max-w-full h-auto"
        />
      </div>
    </div>
  );
}

export default PlanE;
