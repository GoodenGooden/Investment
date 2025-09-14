
import Image from "next/image";
import { BiLogoTwitter } from "react-icons/bi";


function HeroPageE() {
  return (
    <div className="bg-[url('/story.png')] bg-cover bg-center py-40 -mb-30">
      <h2 className="text-[40px] font-bold text-center text-[[#141C24]] mb-12">
        Stories from our Community
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-9xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white px-8 py-10 shadow-lg rounded-2xl space-y-4">
            <div className="flex justify-end">
          <BiLogoTwitter className="text-blue-400 text-2xl   " />
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/man.png"
              alt="User"
              width={80}
              height={80}
              className="rounded-full"
            />
            <p className=" text-gray-600 text-lg ">
              VaultWay made saving fun. I never imagined I had be this disciplined
            with money! </p>
          </div>
          <p className="font-semibold ">
              John Doe
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white px-6 py-8 shadow-lg rounded-2xl space-y-4">
             <div className="flex justify-end">
          <BiLogoTwitter className="text-blue-400 text-2xl" />
           </div>
          <div className="flex items-center gap-4">
            <Image
              src="/man.png"
              alt="User"
              width={80}
              height={80}
              className="rounded-full"
            />
            <p className="text-lg text-gray-600 ">
               Wahala for person wey no use VaultWay ooo. My interest rates keep
            coming in daily like what was promised in the Lord’s prayer.  </p>
          </div>
          <p className=" font-semibold ">
             Wale Crypto
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white px-6 py-8 shadow-lg rounded-2xl space-y-4">
           <div className="flex justify-end">
          <BiLogoTwitter className="text-blue-400 text-2xl" />
           </div>
          <div className="flex items-center gap-4">
            <Image
              src="/man.png"
              alt="User"
              width={80}
              height={80}
              className="rounded-full"
            />
            <p className="text-lg text-gray-600 ">
               Saving with VaultWay is effortless and rewarding. Highly
            recommended!  </p>
          </div>
          <p className=" font-semibold ">
             Ada Vault
          </p>
        </div>
      </div>
      <p className="text-center text-lg font-medium  text-[#00A343] py-10  ">READ MORE </p>

        </div>
  );
}

export default HeroPageE;



