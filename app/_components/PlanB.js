
import Image from "next/image";
import { TbArrowBadgeDown } from "react-icons/tb";

function PlanB() {
  return (
    <div className="min-h-screen pb-16 px-6">
      {/* Heading */}
      <h2 className="relative text-center py-12 text-3xl sm:text-4xl lg:text-[44px] text-[#141C24] font-extrabold leading-snug">
        The best way to save{" "}
        <span className="block sm:inline text-[#00A343]">is the vaultway</span>
      </h2>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 py-10 max-w-6xl mx-auto">
        {/* Left: Image */}
        <div className="flex justify-center">
          <Image
            width={500}
            height={500}
            src="/coin.jpg"
            alt="vault"
            className="object-contain w-64 sm:w-80 md:w-[400px] lg:w-[500px]"
          />
        </div>

        {/* Right: Features */}
        <div className="flex flex-col gap-8">
          {[
            {
              title: "Have a great time building your funds",
              desc: "Get to automate your savings or choose to top-up directly. Have lots of fun while you save and enjoy awesome interest rates your bank will never offer you.",
            },
            {
              title: "Stay consistent with your goals",
              desc: "Set financial targets and track your progress easily. Our platform helps you stay accountable while making saving simple and stress-free.",
            },
            {
              title: "Earn more as you save",
              desc: "Enjoy higher interest rates than traditional banks. The more you save, the more you earn — it’s that simple.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="bg-[#E2FEEB] p-2 mt-1 rounded-lg shrink-0">
                <TbArrowBadgeDown className="text-3xl sm:text-4xl text-[#00A343]" />
              </div>
              <div>
                <p className="text-lg sm:text-xl lg:text-[28px] font-bold leading-snug py-2">
                  {item.title}
                </p>
                <p className="text-sm sm:text-base lg:text-[20px] text-[#6E80A3]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanB;
