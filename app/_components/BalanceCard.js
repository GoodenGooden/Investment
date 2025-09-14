
// components/BalanceCard.jsx
function BalanceCard({ label, value, icon, vault, account }) {
  return (
    <div
      className="
        border border-[#E3EDF3] bg-[#F4FFF8] 
        p-4 sm:p-6 rounded-xl 
        w-full   /* ✅ full width of grid cell, no overflow */
        flex flex-col
        gap-4 lg:gap-6
      "
    >
      <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-[#6E80A3]">
        {label}
        {icon}
      </div>
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#6E80A3] mt-2 sm:mt-3">
        {value} {vault} {account}
      </p>
    </div>
  );
}

export default BalanceCard;

























/*
// components/BalanceCard.jsx
function BalanceCard({ label, value, icon, vault, account }) {
  return (
    <div
      className="
        border border-[#E3EDF3] bg-[#F4FFF8] 
        p-4 sm:p-6 rounded-xl 
        w-full sm:w-60 md:w-72 lg:w-80 
        flex flex-col
      "
    >
      <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-[#6E80A3]">
        {label}
        {icon}
      </div>
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#6E80A3] mt-2 sm:mt-3">
        {value} {vault} {account}
      </p>
    </div>
  );
}

export default BalanceCard;

"make Balancecard div responsive in screen 1024 and 1440 screen size let it have a gap-6 pls dont add any extra design or change anything work only on div responsiveness "

*/