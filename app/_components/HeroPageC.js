
import Image from "next/image";
import { LuCalendarSync } from "react-icons/lu";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { GrDirections } from "react-icons/gr";



function HeroPageC() {
    return (
        <div className="bg-[#F4FFF8] py-10 px-4">  
            <h2 className=" relative text-center text-4xl text-[#141C24]  font-[700] mb-30">
                An array of novel savings plans
                <span className="absolute inset-16 flex justify-center items-center "> just for you </span>
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-30 max-w-6xl mx-auto">
                {/* Image */}
                <Image
                    width={450}
                    height={300}
                    src="/vault.png"
                    alt="vault"
                    className="object-contain"
                />

                {/* Text Content */}
                <div className="flex flex-col gap-8">
                    {/* Card 1 */}
                    <div className="flex gap-4 items-start">
                        <div className="text-5xl text-[#00A343] mt-1 bg-[#E2FEEB] p-4 rounded-2xl ">
                            <LuCalendarSync />
                        </div>

                        <div className="text-[#141C24]">
                            <p className="text-2xl font-extrabold">Regular Vaults</p>
                            <p className="text-lg text-[#6E80A3] font-normal leading-relaxed">
                                Never miss out on earning up to <br />
                                20% interest on your savings in the <br />
                                first month and 5% interest in the <br />
                                subsequent months with unique <br />
                                savings plans that even allow you <br />
                                to automate your savings.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex gap-4 items-start">
                        <div className="text-5xl text-[#00A343] mt-1 bg-[#E2FEEB] p-4 rounded-2xl">
                            < AiOutlineSecurityScan />
                        </div>

                        <div className="text-[#141C24]">
                            <p className=" text-2xl font-extrabold ">Flexi Vaults</p>
                            <p className="text-lg text-[#6E80A3] leading-relaxed">
                                Access your funds anytime without <br />
                                losing your interest benefits. <br />
                                Flexible savings options made for <br />
                                your financial lifestyle.
                            </p>
                        </div>


                    </div>

                    {/* Card 3 */}
                    <div className="flex gap-4 items-start">
                        <div className="text-5xl text-[#00A343] bg-[#E2FEEB] p-4 rounded-2xl mt-1">
                            <  GrDirections />
                        </div>

                        <div className="text-[#141C24]">
                            <p className=" text-2xl font-extrabold ">Locked Vaults</p>
                            <p className="text-lg text-[#6E80A3] leading-relaxed">
                                Lock your savings for a set period <br />
                                and enjoy higher interest returns. <br />
                                Perfect for long-term financial goals <br />
                                and discipline.
                            </p>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
}

export default HeroPageC;



/*
 <p className="text-lg text-[#141C24] font-bold ">
              <strong>Regular Vaults</strong>
              <br />
              <span className="text-md text-[#6E80A3] font-[0]">
                Never miss out on earning up to <br />
                20% interest on your savings in the <br />
                first month and 5% interest in the <br />
                subsequent months with unique <br />
                savings plans that even allow you <br />
                to automate your savings.
              </span>
            </p>
            */


