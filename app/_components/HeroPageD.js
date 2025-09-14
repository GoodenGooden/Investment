import Image from "next/image"

function HeroPageD() {
    return (
        <div className="  bg-[#F5F7FA] pb-16">
            <h2 className="text-center font-[700] text-5xl pt-20"> Smart saving now made easy </h2>
            <p className=" relative text-center text-[22px] text-[#6E80A3] pt-8  "> You can start saving and earning amazing interest in just
                <span className=" absolute inset-20 flex justify-center items-center "> four simple steps </span> </p>
            <div className="flex justify-center gap-38  pt-12 ">
                <div className="flex flex-col">

                    <div className="flex gap-4">
                        <div  className="bg-[#00A343] text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold"> 1</div>
                        <span className="flex flex-col">
                            <p className=" text-[22px] text-[#6E80A3] font-[750]  "> Open An Account </p>
                            <p className=" text-lg text-[#6E80A3] pt-4 pb-6  "> create your own savings account with your   <br />
                                name, email and password </p>
                        </span>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-[#00A343] text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold" >2</div>
                        <span className="flex flex-col">
                            <p className=" text-[22px] text-[#6E80A3] font-[750]"> Choose a Plan </p>
                            <p className=" text-lg text-[#6E80A3] pt-4 pb-6" > Select a savings plan that suits your financial  <br />
                                goals and time frame </p>
                        </span>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-[#00A343] text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold" >3</div>
                        <span className="flex flex-col ">
                            <p className=" text-[22px] text-[#6E80A3] font-[750]" >Setup your Payment details </p>
                            <p className=" text-lg text-[#6E80A3] pt-4 pb-6"> Add your bank account and debit card details  <br />
                                for ease of payments and withdrawals. </p>
                        </span>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-[#00A343] text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold" >4</div>
                        <span className=" flex flex-col">
                            <p className=" text-[22px] text-[#6E80A3] font-[750]" > Begin your Savings Journey  </p>
                            <p className=" text-lg text-[#6E80A3] pt-4 pb-6" > Watch your financial goals move closer to  <br />
                                achievement each day as your savings grow. </p>
                        </span>
                    </div>

                </div>
                <div className="content-center">
                    <Image
                        width={350}
                        height={300}
                        src="/computer.png" alt="computer" />
                </div>

            </div>

        </div>
    )
}

export default HeroPageD
