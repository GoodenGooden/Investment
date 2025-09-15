
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

function VaultCard({ title, image, description }) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 border border-[#E3EDF3] bg-white rounded-xl shadow-md w-full">
      {/* Title */}
      <h3 className="text-center text-2xl sm:text-3xl font-extrabold py-4">
        {title}
      </h3>

      {/* Content (image + text) */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center md:items-start">
        <Image
          src={image}
          alt="vault icon"
          width={100}
          height={80}
          className="object-contain"
        />
        <p className="text-base sm:text-lg lg:text-xl text-[#6E80A3] leading-relaxed text-center md:text-left">
          {description}
        </p>
      </div>

      {/* CTA */}
      <div className="flex justify-center md:justify-start items-center gap-2 mt-6 text-[#00A343] font-semibold cursor-pointer hover:underline">
        <p className="text-sm sm:text-base">CREATE VAULT NOW</p>
        <MdKeyboardArrowRight size={20} className="sm:size-6" />
      </div>
    </div>
  );
}

export default VaultCard;

