import { VscArrowLeft } from "react-icons/vsc";
import { LuCalendarSync } from "react-icons/lu";
import Card from "@/app/_components/Card";

function page() {
  return (
    <div className=" bg-[#F4FFF8] ">
      <div className="flex flex-col gap-10 p-10">
        <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full bg-white">
          <VscArrowLeft className="text-[#00A343] text-2xl font-[20px] " />
        </div>
        <p className="text-lg text-[#6E80A3] font-bold "> What vault plan would you choose? </p>
        <div className="flex gap-8">
          < LuCalendarSync className=" text-5xl text-[#00A343] " />
          <p className="text-[#00A343] font-bold text-[22px] pt-2"> Regular Vaults  </p>
        </div>


        <div>
         <Card  />

        </div>
      </div>
    </div>
  )
}

export default page
