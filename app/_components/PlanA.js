
import Image from "next/image";
import Button from "./Button";

function PlanA() {
  return (
    <div className="bg-[url('/back.png')] bg-cover bg-center min-h-[60vh] lg:h-[80vh] flex items-center">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-20 px-6 py-12 lg:pt-20 max-w-6xl mx-auto">
        
        {/* Left Section: Text */}
        <div className="flex flex-col text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141C24] leading-snug">
            Save more to <br />
            achieve more
          </h2>
          <p className="text-base sm:text-lg lg:text-[22px] pt-6 pb-6 text-[#6E80A3]">
            Attain your set financial goals and even more. <br className="hidden sm:block" />
            Start saving through smart plans that make <br className="hidden sm:block" />
            saving a lot better than you ever thought.
          </p>
          <Button className="w-full sm:w-48 text-base sm:text-lg font-bold" href="/plan">
            Start Saving Now
          </Button>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center">
          <Image
            width={350}
            height={300}
            src="/vaultgreen.png"
            alt="vault"
            className="object-contain w-48 sm:w-64 lg:w-[350px]"
          />
        </div>
      </div>
    </div>
  );
}

export default PlanA;

