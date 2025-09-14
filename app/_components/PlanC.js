
import VaultCard from "./VaultCard";

function PlanC() {
  return (
    <div className="bg-[#F4FFF8] h-auto pb-14 px-6">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold pt-16">
        Regular Vaults
      </h2>

      <p className="text-center py-8 sm:py-12 text-base sm:text-lg lg:text-2xl text-[#6E80A3] leading-relaxed max-w-2xl mx-auto">
        Enjoy amazing interests every time you save <br className="hidden sm:block" />
        and for as long as you save
      </p>

      {/* Vaults Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 justify-center max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-10 sm:gap-16">
          <VaultCard
            title="Tyro Vault"
            image="/number2.png"
            description="Save for a period of two months. Earn up to 5% interest on your savings in the first month and 1% in the subsequent month."
          />
          <VaultCard
            title="Reaper Vault"
            image="/number4.png"
            description="Save for a period of four months. Earn up to 10% interest on your savings in the first month and 2% in the subsequent months."
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10 sm:gap-16">
          <VaultCard
            title="Ace Vault"
            image="/number6.png"
            description="Save for a period of six months. Earn up to 15% interest on your savings in the first month and 3% in the subsequent months."
          />
          <VaultCard
            title="Stellar Vault"
            image="/number12.png"
            description="Save for a period of twelve months. Earn up to 20% interest on your savings in the first month and 4% in the subsequent months."
          />
        </div>
      </div>
    </div>
  );
}

export default PlanC;




