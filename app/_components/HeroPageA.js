
import Image from "next/image"
import Button from "./Button"

function HeroPageA() {
    return (
        <div className="bg-[url('/back.png')] bg-cover bg-bottom h-[90%]">
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center content-center gap-10 lg:gap-70 px-4">
                
                {/* Left Section */}
                <div className="flex flex-col gap-8 text-center lg:text-left">
                    <h2 className="text-[#121E31] leading-16 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                        Save your way <br />
                        into the <span className="text-[#00A343]"> future </span>
                    </h2>
                    <p className="text-[#6E80A3] text-base sm:text-lg">
                        Enjoy amazing interest rates and achieve more <br className="hidden sm:block" />
                        financial freedom by saving through the simplest, <br className="hidden sm:block" />
                        smartest and most comfortable way.
                    </p>
                    <Button 
                        href="/" 
                        className="w-full sm:w-60 text-center items-center font-bold text-lg"
                    >
                        Start Saving Now
                    </Button>
                </div>
                
                {/* Right Section */}
                <div className="flex justify-center">
                    <Image 
                        src="/lady.png" 
                        alt="image" 
                        width={350} 
                        height={500} 
                        quality={100}
                        className="w-60 sm:w-72 md:w-80 lg:w-[350px] h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroPageA
