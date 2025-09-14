
import { LuLock } from "react-icons/lu";
import { MdOutlineSecurityUpdate } from "react-icons/md";
import { TbSteeringWheel } from "react-icons/tb";

function HeroPageB() {
  return (
    <div className="px-4 py-10">
      <h2 className="text-center text-[#121E31] text-5xl font-bold mb-10">
        Save with the assurance of security
      </h2>

      <div className=" flex gap-38 max-w-4xl mx-auto ">
        {/* First Block */}
        <div className="flex gap-3 items-start flex-1">
          <div className="  p-4 bg-[#E2FEEB] rounded-2xl shadow-[#00A343]/20  shadow-xl  ">
            
            <LuLock className="text-4xl text-[#00A343] mt-1 " />
          </div>
          <div className="text-sm text-[#141C24]  ">
            <p className="font-[700] text-[22px] pb-8 ">256-bit SSL   <br />
                 Security</p>
                
            <p className="leading-snug  text-lg text-[#6E80A3] ">
              VaultWay offers you state-of-the-art  <br />
               internet security technology through  <br />
               the use of 256-bit SSL security  <br />
                encryption to safeguard your   <br />
                information from duplicity.
            </p>
          </div>
        </div>

        {/* Second Block */}
        <div className="flex gap-3 items-start flex-1">
          <div className=" p-4 bg-[#E2FEEB] rounded-2xl shadow-[#00A343]/20  shadow-xl ">
            <MdOutlineSecurityUpdate  className=" text-4xl text-[#00A343] mt-1 " />
          </div>
          <div className="text-sm text-[#141C24]">
            <p className=" font-[700] text-[22px] pb-8  "> Two-factor  <br />
                 authentication </p>
            <p className=" leading-snug  text-lg text-[#6E80A3] ">
              Vaultway savings account are  <br />
               protected by Two-factor  <br />
                Authentication (2FA) by default, to  <br />
                 guaranty the safety of your account  <br />
                  from unauthorized access.
            </p>
          </div>
        </div>
      </div>
      <h3 className=" text-[#6E80A3]  text-center pt-30 text-3xl font-bold "> with vaultway </h3>
      <div className="flex justify-center gap-10  text-4xl font-bold pt-5 pb-15">
        <TbSteeringWheel className=" text-[#6E80A3] text-5xl " />
        <p className="text-[#6E80A3] " >  Meet your financial goals... <span className=" text-[#00A343] "> and then, beat em! </span>  </p>
          <TbSteeringWheel className=" text-5xl text-[#6E80A3] "  />
      </div>
    </div>
  );
}

export default HeroPageB;







